<template>
  <div>
    <p>テスト</p>
  </div>
</template>

<script>
// import { Main } from "../common/js/main";
// import { HeavyRendering2D } from "../js/heavyrendering2d";

export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  mounted() {
    // eslint-disable-next-line
    // new Main(HeavyRendering2D);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../common/css/style.css";
@import "../common/css/btn.css";

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
