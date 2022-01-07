<!-- 书本翻页 -->
<template>
  <div class="shu">
    <div class="feng"></div>
    <div class="wen">
      <!-- <Card /> -->
      <h3 style="padding-top: 50px; padding-left: 40px">云看家乡贺卡——山东青岛五四广场</h3>
      <p style="padding-top: 20px; padding-left: 40px; padding-right: 15px">
        山东青岛五四广场 五四广场，因五四运动而得名，位于山东省青岛市市南区东海西路，与青岛市人民政府办公大楼相对，南临浮山湾。始建于1996年，是一处集草坪、喷泉、雕塑于一体的现代化风格广场，为青岛市地标建筑之一。
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>
<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.shu {
  position: relative;
  width: 375px;
  height: 500px;
  background-color: rgba(255, 255, 255, 0.774);
  transform-style: preserve-3d;
  box-shadow: 300px 0px 30px rgb(0, 0, 0, 0.6) inset;
  transition: 1s cubic-bezier(0.79, 0.34, 0.47, 0.92);
}
.shu::after {
  content: '';
  position: absolute;
  height: 3px;
  width: 378px;
  left: 0px;
  bottom: -3px;
  /*  background-color: rgb(100, 96, 96); */
  background-image: linear-gradient(
    to right,
    rgb(71, 68, 68),
    rgba(124, 120, 120, 0.3)
  );
  border-bottom-left-radius: 5px;
}
.shu::before {
  content: '';
  position: absolute;
  width: 3px;
  height: 100%;
  right: -3px;
  top: 0px;
  background-color: rgb(112, 108, 108);
  background-image: linear-gradient(
    to top,
    rgb(114, 111, 111),
    rgba(90, 87, 87, 0.5)
  );
  border-top-right-radius: 3px;
}

.shu:hover {
  box-shadow: 30px 0px 30px rgb(0, 0, 0, 0.6) inset;
  transform: rotate(-5deg);
}
.feng {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 2;
  background-image: url('../assets/new_year.webp');
  background-size: 100%;
  transform-origin: left;
  transition: 1s cubic-bezier(0.79, 0.34, 0.47, 0.92);
  border-top-left-radius: 2px;
  border-bottom-left-radius: 2px;
}
.shu:hover .feng {
  transform: rotateY(-140deg);
}

.wen {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  font-family: 'fangsong';
  text-align: left;
}
</style>
