<template>
  <div class="hello">
    <div class="wrap">
      <div class="content" @click="reload">
        <van-row class="content-row" type="flex" justify="center">
          <van-col span="12">这是一张贺卡</van-col>
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
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  methods: {
    reload() {
      window.location.reload();
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.hello {
  width: 540px;
  margin-left: 60px;
  margin-top: 80px;
  // transform: scale(.7);
  .wrap {
    overflow: hidden;
    height: 447px;
    position: relative;
    top: 0px;
    transition: all 1s ease-in-out 0.3s;
  }
  .wrap:before {
    content: '';
    position: absolute;
    bottom: 128px;
    left: 0px;
    background: url('../assets/before.png');
    width: 530px;
    height: 317px;
  }
  .wrap:after {
    content: '';
    position: absolute;
    bottom: 0px;
    left: 0;
    background: url('../assets/after.png');
    width: 530px;
    height: 259px;
  }
  .wrap.hide:after,
  .wrap.hide:before {
    display: none;
  }
  .content {
    background: url('../assets/letter_bg.png');
    position: relative;
    top: 200px;
    overflow: hidden;
    height: 200px;
    width: 400px;
    margin: 0px auto;
    padding: 20px;
    border: 1px solid white;
    border-right: 3px;
    transition: all 1s ease-in-out 0.3s;
    text-align: center;
    .content-row {
      margin: 40px 0;
    }
    .content-qr {
      font-size: 24px;
      color: gray;
      opacity: 0;
      background: none;
      cursor: pointer;
      border-radius: 3px;
      transition: opacity 0.7s ease-in-out 0s;
    }
  }
  .wrap:hover {
    height: 777px;
    top: -200px;
    .content {
      height: 530px;
    }
    .content-qr.content-qr {
      z-index: 999;
      opacity: 1;
      transition: opacity 0.5s ease-in-out 1.3s;
    }
  }
}
</style>
