<template>
  <div style="padding-left: 10px; padding-right: 10px; height: 100%; overflow-y: auto" @scroll="handleScroll">
    <div :class="['navbar', shouldShowSemiTransparentNavBar ? '' : 'large']">
      <div class="nav-title">
        照片
      </div>
      <div class="left-button-group">
        <span class="hidden-btn"
          @click="() => {
            this.raise_event_show_sidebar(false, 'mobile');
            this.raise_event_show_sidebar(false, 'pc');
          }
        ">
          <IconBase icon-color="#5555ff"> <IconSideBar /> </IconBase>
        </span>
      </div>

      <div class="right-button-group">
        <span @click="logout()"> <IconBase icon-color="#5555ff" height="21"> <IconExit /> </IconBase> </span>
      </div>
    </div>

    <div class="title1 navtitle" :style="{ marginTop: '50px', opacity: 1-shouldShowSemiTransparentNavBar }">
      照片
    </div>

    <div class="listview normal-menu-ui" style="margin-top: 5px;">
      <a v-show="show_banner" 
        :class="selected('default')"
        @click="switch_album('default', '最近项目')">
        <span>最近项目</span>
      </a>
      <!-- <a v-show="show_banner"
        :class="selected('recent')"
        @click="switch_album('recent', '最近项目')">
        <span>最近项目</span>
      </a> -->
      <!-- <a :class="selected('_fav')"
        @click="switch_album('_fav', '收藏夹')">
        <span>收藏夹</span>
      </a> -->
    </div>

    <div class="title2">
      我的相册
    </div>
    <div class="listview">
      <a :class="[ 'album-prev', selected(album.name) ]"
        @click="switch_album(album.name, album.friendly_name)"
        v-for="album in album_list" :key="album.name">

        <!-- preview.jpg -->
        <div style="position: relative">
          <div class="list_img" :style="{ backgroundImage: `url(${publicPath}/api/${album.name}/${album.preview||'preview.jpg'})` }"></div>
          <span style="margin-left: 27px;">{{ album.friendly_name }}</span>
        </div>

      </a>
    </div>
  </div>
</template>

<script>
import '../css/style.css';
import '../css/sidebar.css';
import '../css/mobile_optimize.css'
import '../css/dark_theme.css'
import utils from "@/js/utils";
import IconBase from "@/icons/IconBase";
import IconSideBar from "@/icons/IconSideBar";
import IconExit from "@/icons/IconExit";
import { publicPath } from '../../vue.config';

export default {
  name: "Sidebar",
  // eslint-disable-next-line vue/no-unused-components
  components: { IconSideBar, IconBase, IconExit },
  data: () => ({
    album_list: [],
    selected_album_name: 'default',
    show_banner: true,
    shouldShowSemiTransparentNavBar: false,
    publicPath: utils.publicPath,
  }),
  async mounted() {
    const args = await utils.parse_args();
    if(args.i) {
      const album_list = await this.getAlbumList();
      for(const i of album_list) {
        if(i.name === args.i) {
          this.switch_album(i.name, i.friendly_name);
          break;
        }
      }
    }
  },
  methods: {
    raise_event_show_sidebar(val, mode) {
      this.$emit('should-show-sidebar', val, mode);
    },
    switch_album(album_name, album_friendly_name) {
      this.$emit('switch-album', album_name, album_friendly_name);
      this.selected_album_name = album_name;
      if (window.innerWidth <= 1200) {
        this.raise_event_show_sidebar(false, 'mobile');
      }
    },
    selected(album_name) {
      return album_name === this.selected_album_name ? "selected" : "";
    },
    handleScroll: function(el) {
      console.log((el.srcElement.scrollTop));
      if((el.srcElement.scrollTop) >= 30) {
        this.shouldShowSemiTransparentNavBar = true;
      } else {
        this.shouldShowSemiTransparentNavBar = false;
      }
    },
    async getAlbumList() {
      this.album_list = await utils.get_json('meta');
      return this.album_list;
    },
    logout() {
      localStorage.removeItem('key');
      location.reload();
    }
  }
}
</script>

<style scoped>

</style>