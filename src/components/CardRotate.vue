<template>
  <div id="card">
    <div class="card-img">
      <div class="img"></div>
      <div class="img"></div>
    </div>
    <div class="card-body">
      <Card />
    </div>
  </div>
</template>

<script>
export default {
  name: 'card-rotate',
  methods: {
    reload() {
      window.location.reload();
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

#card {
  height: 480px;
  width: 300px;
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
</style>
