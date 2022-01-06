<template>
  <div id="app">
    <div class="right">
      <van-sidebar v-model="activeKey">
        <van-sidebar-item title="卡片上滑" />
        <van-sidebar-item title="卡片旋转" />
        <van-sidebar-item title="卡片翻页" />
      </van-sidebar>
    </div>
    <component v-bind:is="currentComp"></component>
  </div>
</template>

<script>
import CardInUp from './components/CardInUp.vue';
import CardRotate from './components/CardRotate.vue';
import CardPage from './components/CardPage.vue';

export default {
  name: 'App',
  components: {
    CardInUp,
    CardRotate,
    CardPage,
  },
  computed: {
    currentComp() {
      const { activeKey } = this;
      return ['CardInUp', 'CardRotate', 'CardPage'][activeKey];
    },
  },
  data() {
    return { activeKey: 0 };
  },
};
</script>

<style lang="less">
#app {
  margin-top: 80px;
  margin-left: 100px;
  position: relative;
  .right {
    position: absolute;
    right: 0;
  }
}
</style>
