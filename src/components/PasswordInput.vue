<template>
  <div class="pwdi">
    <div style="position: relative; height: 100%; width: 100%; margin: 0 auto">
      <div class="dialog" v-show="true || password_dialog_shown">
        <div class="title">
          加密相册
        </div>
        <div class="ctnt">
          <div v-if="!passwordErrorMsgShown"><p>{{ hint }}</p></div>
          <div v-else><p style="color: red">答案错误</p></div>
          <input ref="pi" type="text" placeholder="在此输入答案" v-model="passwordEntered" @keyup.enter="submitPassword()"/>
          <div style="padding-top: 25px; text-align: center">
            <button class="primary" style="width: 100px;" @click="submitPassword()" :disabled="!password_dialog_shown">确定</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import '../css/passwordinput.css';

const md5 = require('js-md5');

export default {
  name: "PasswordInput",
  data: () => ({
    passwordErrorMsgShown: false,
    passwordEntered: '',
    password_dialog_shown: true,
    showInput: true,
  }),
  methods: {
    async submitPassword() {
      if (!this.password_dialog_shown) return;
      if (this.passwordEntered === '') return this.$refs.pi.focus();
      this.password_dialog_shown = false;
      this.$emit('submit-password', md5(this.passwordEntered));
    },
    refresh() {
      this.passwordErrorMsgShown = false;
      this.passwordEntered = '';
      this.password_dialog_shown = true;
      this.showInput = true;
    },
    feedback(bResult) {
      if (!bResult) {
        this.password_dialog_shown = true;
        this.passwordEntered = '';
        this.passwordErrorMsgShown = true;
      }
    }
  },
  props: ['hint'],
  watch: {
    password_dialog_shown() {

    }
  },
  mounted() {
    this.$refs.pi.focus();
  }
}
</script>

<style scoped>

</style>