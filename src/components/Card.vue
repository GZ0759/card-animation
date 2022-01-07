<!-- 卡片内容 -->
<template>
  <div class="card">
    <div class="content">
      <van-row class="content-row" type="flex" justify="center">
        <van-col span="12">云看家乡贺卡</van-col>
      </van-row>
      <van-row class="content-row" type="flex" justify="center">
        <van-col span="18">
          <van-image src="https://img01.yzcdn.cn/vant/cat.jpeg">
            <template v-slot:error>加载失败</template>
          </van-image></van-col
        >
      </van-row>
      <div class="content-qr">
        <van-row class="content-row" type="flex" justify="end">
          <van-col span="12">
            <input type="submit" name="submit" value="二维码" />
          </van-col>
        </van-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {},
};
</script>
<style lang="less" scoped>
.card {
  text-align: center;
  .content-row {
    margin: 40px 0;
  }
}
</style>
