<template>
  <div class="theme-switch">
    <div
      v-for="(theme, index) in classes"
      :key="index"
      :class="[theme.className, currentIndex == index ? 'actived' : '']"
      @click="themeSwitch(index)"
    ></div>
  </div>
</template>

<script>
export default {
  name: 'themeSwitch',
  data() {
    return {
      classes: [
        { className: 'theme-switch--dark' },
        { className: 'theme-switch--gray-dark' },
        { className: 'theme-switch--medium-gray' },
        { className: 'theme-switch--light' }
      ],
      currentIndex: 0,
      documentDom: null
    };
  },
  mounted() {
    this.addSheetFile('https://unpkg.com/ace-uikit/dist/ace.dark.css');
  },
  methods: {
    themeSwitch(index) {
      this.currentIndex = index;
      switch (index) {
        case 0:
          this.addSheetFile('https://unpkg.com/ace-uikit/dist/ace.dark.css');
          break;
        case 1:
          this.addSheetFile('https://unpkg.com/ace-uikit/dist/ace.gray.dark.css');
          break;
        case 2:
          this.addSheetFile('https://unpkg.com/ace-uikit/dist/ace.medium.gray.css');
          break;
        case 3:
          this.addSheetFile('https://unpkg.com/ace-uikit/dist/ace.light.css');
          break;
      }
    },
    addSheetFile(path){
      var fileref=document.createElement("link");
      fileref.rel="stylesheet";
      fileref.type="text/css";
      fileref.href= path;
      var headobj=document.getElementsByTagName('head')[0];
      headobj.appendChild(fileref);
    }
  }
};
</script>
<style lang="less" scoped>
.theme-switch {
  position: fixed;
  top: 270px;
  right: 40px;

  &--dark,
  &--gray-dark,
  &--medium-gray,
  &--light {
    width: 1.875rem;
    height: 1.875rem;
    margin: 3px;
    border: 3px solid #000;

    &.actived {
      border: 3px solid #23befa;
    }
  }
  &--dark {
    background-color: #323232;
  }
  &--gray-dark {
    background-color: #535353;
  }
  &--medium-gray {
    background-color: #b8b8b8;
  }
  &--light {
    background-color: #f0f0f0;
  }
}
</style>
