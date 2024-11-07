console.log('Start to build...');

const fs = require('fs');
const yaml = require('js-yaml');
const md5 = require('js-md5');
const sizeOf = require('image-size');
const sharp = require('sharp');

const ALBUM_PATH = './album';
const DIST_PATH = './dist/api';
const PHOTO_PER_PAGE = 50;
const RECENT_SLICE = 150;

const getMeta = () => {
  try {
    const yamlFile = fs.readFileSync(`${ALBUM_PATH}/meta.yml`, 'utf8');
    return yaml.load(yamlFile);
  } catch (error) {
    console.error('Error when reading yaml:', error);
  }
}

const compress = (src, dst) => {
  return new Promise((resolve, reject) => {
    sharp(src)
      .resize(256, 256, { fit: 'inside' })
      .jpeg({ quality: 80 })
      .withMetadata()
      .toFile(dst, (err, info) => {
        if(err) {
          reject(err);
        } else {
          resolve(info);
        }
      });
  });
}

const getFiles = async (dir) => {
  const files = await fs.promises.readdir(dir);
  return files;
};

const splitArray = (array, chunkSize) => {
  const result = [];
  const length = array.length;
  for (let i = 0; i < length; i += chunkSize) {
    result.push(array.slice(i, i + chunkSize));
  }
  return result;
}

const album = getMeta()?.album || [];

const main = async () => {
  // 准备一个干净的temp目录
  try {
    fs.rmSync(DIST_PATH, { recursive: true });
  } catch(error) {
    console.log('Welcome to use iAlbum!');
  } finally {
    fs.mkdirSync(DIST_PATH, { recursive: true });
  }
  console.log('Prepared for temp directory.');

  // 生成meta.json
  const metajson = [];
  for(const i of album) {
    metajson.push({
      name: i.name,
      friendly_name: i.friendly_name,
      preview: 'preview.jpg',
    });
  }
  fs.writeFileSync(`${DIST_PATH}/meta.json`, JSON.stringify(metajson));
  console.log('Generated meta.json.');

  // 创建相册目录
  fs.mkdirSync(`${DIST_PATH}/default`); // 默认相册
  // fs.mkdirSync(`${DIST_PATH}/recent`); // 最近相册
  for(const i of album) {
    fs.mkdirSync(`${DIST_PATH}/${i.name}`);
    if(!i.password) { // 非加密相册
      fs.cpSync(`${ALBUM_PATH}/${i.name}`, `${DIST_PATH}/${i.name}/raw`, { recursive: true });
      fs.mkdirSync(`${DIST_PATH}/${i.name}/cache`);
      fs.readdirSync(`${DIST_PATH}/${i.name}/raw`).forEach(async j => {
        await compress(`${DIST_PATH}/${i.name}/raw/${j}`, `${DIST_PATH}/${i.name}/cache/${j}`);
      });
      await compress(`${DIST_PATH}/${i.name}/raw/${i.preview}`, `${DIST_PATH}/${i.name}/preview.jpg`);
    } else { // 加密相册
      const md5password = md5(String(i.password));
      fs.cpSync(`${ALBUM_PATH}/${i.name}`, `${DIST_PATH}/${i.name}/${md5password}`, { recursive: true });
      fs.mkdirSync(`${DIST_PATH}/${i.name}/${md5password}_cache`);
      fs.readdirSync(`${DIST_PATH}/${i.name}/${md5password}`).forEach(async j => {
        await compress(`${DIST_PATH}/${i.name}/${md5password}/${j}`, `${DIST_PATH}/${i.name}/${md5password}_cache/${j}`);
      });
      await compress(`${DIST_PATH}/${i.name}/${md5password}/${i.preview}`, `${DIST_PATH}/${i.name}/preview.jpg`);
      fs.writeFileSync(`${DIST_PATH}/${i.name}/${md5password}/probe.json`, '{}');
    }
  }
  console.log('Images has been compressed.');

  const defaultJson = [];
  for(const i of album) {
    if(!i.password) { // 非加密相册
      const list = await getFiles(`${DIST_PATH}/${i.name}/raw/`);
      fs.writeFileSync(`${DIST_PATH}/${i.name}/meta.json`, JSON.stringify({ count: list.length }));
      const pageJson = [];
      for(const j of list) {
        const dimensions = sizeOf(`${DIST_PATH}/${i.name}/raw/${j}`);
        const current = {
          al: i.name,
          name: j,
          h: dimensions.height,
          w: dimensions.width,
          ct: fs.statSync(`${DIST_PATH}/${i.name}/raw/${j}`).ctimeMs / 1000,
        };
        pageJson.push(current);
        defaultJson.push(current);
      }
      const pages = splitArray(pageJson, PHOTO_PER_PAGE);
      for(let j in pages) {
        fs.writeFileSync(`${DIST_PATH}/${i.name}/page_${j}.json`, JSON.stringify(pages[j]));
      }
    } else { // 加密相册
      const md5password = md5(String(i.password));
      const list = await getFiles(`${DIST_PATH}/${i.name}/${md5password}/`);
      fs.writeFileSync(`${DIST_PATH}/${i.name}/meta.json`, JSON.stringify({
        count: list.length - 1, // without probe.json
        secret: true,
        hint: i.hint,
      })); 
      const pageJson = [];
      for(const j of list) {
        if(j.endsWith('.json')) continue;
        const dimensions = sizeOf(`${DIST_PATH}/${i.name}/${md5password}/${j}`);
        const current = {
          al: i.name,
          name: j,
          h: dimensions.height,
          w: dimensions.width,
          ct: fs.statSync(`${DIST_PATH}/${i.name}/${md5password}/${j}`).ctimeMs / 1000,
        };
        pageJson.push(current);
      }
      const pages = splitArray(pageJson, PHOTO_PER_PAGE);
      for(let j in pages) {
        fs.writeFileSync(`${DIST_PATH}/${i.name}/page_${j}.json`, JSON.stringify(pages[j]));
      }
    }
  }
  const defaultPages = splitArray(defaultJson.sort((a, b) => b.ct - a.ct), PHOTO_PER_PAGE); // 按时间倒序
  for(let i in defaultPages) {
    fs.writeFileSync(`${DIST_PATH}/default/page_${i}.json`, JSON.stringify(defaultPages[i]));
  }
  fs.writeFileSync(`${DIST_PATH}/default/meta.json`, JSON.stringify({ count: defaultJson.length }));

  // const recentJson = defaultJson.sort((a, b) => b.ct - a.ct).slice(0, RECENT_SLICE); // 按时间倒序
  // const recentPages = splitArray(recentJson, PHOTO_PER_PAGE);
  // for(let i in recentPages) {
  //   fs.writeFileSync(`${DIST_PATH}/recent/page_${i}.json`, JSON.stringify(recentPages[i]));
  // }
  // fs.writeFileSync(`${DIST_PATH}/recent/meta.json`, JSON.stringify({ count: recentJson.length }));

  console.log('Generated meta.json and page.json.');
}

main();
