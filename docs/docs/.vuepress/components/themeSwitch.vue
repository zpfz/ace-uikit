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
      currentIndex: 0
    };
  },
  mounted() {
    // document.getElementsByTagName('html')[0].dataset.theme = 'dark';
  },
  methods: {
    themeSwitch(index) {
      this.currentIndex = index;
      switch (index) {
        case 0:
          document.getElementsByTagName('html')[0].dataset.theme = 'dark';
          break;
        case 1:
          document.getElementsByTagName('html')[0].dataset.theme = 'gray-dark';
          break;
        case 2:
          document.getElementsByTagName('html')[0].dataset.theme = 'medium-gray';
          break;
        case 3:
          document.getElementsByTagName('html')[0].dataset.theme = 'light';
          break;
      }
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
