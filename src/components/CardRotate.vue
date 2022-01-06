<template>
  <div id="card">
    <div class="card-img">
      <div class="img"></div>
      <div class="img"></div>
    </div>
    <div class="card-body">
      <h1>春节快乐</h1>
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
html,
body {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  background-color: #fff;
}
body {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 229, 111, 0.5);
}

#card {
  height: 400px;
  width: 250px;
  background-color: #e74c3c;
  transform-style: preserve-3d;
  transform: perspective(1000px);
  transition: 1s;
}

#card:hover {
  margin-left: 250px;
}

#card:hover .card-img {
  transform: rotateY(-180deg);
}

#card .card-img {
  width: 100%;
  height: 100%;
  position: relative;
  transition: 0.5s;
  transform-origin: left;
  transform-style: preserve-3d;
  z-index: 101;
  box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.2);
}

#card .card-img .img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-position: center center;
  background-size: auto 120%;
}

#card .card-img .img:nth-child(1) {
  background-image: url('../assets/new_year.webp');
}

#card .card-img .img:nth-child(2) {
  background-image: url('../assets/2022.webp');
  transform: rotateY(180deg);
}

#card .card-body {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.2);
}

#card .card-body h1 {
  writing-mode: vertical-lr;
  font-family: '077-上首苍穹书法体';
  font-size: 80px;
  font-weight: 900;
  color: rgb(223, 195, 106);
}
</style>
