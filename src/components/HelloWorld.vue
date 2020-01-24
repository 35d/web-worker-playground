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
    if (window.Worker) {
      // eslint-disable-next-line
      console.log("=== Worker 使用可能 ===");
      new Worker(require("./worker.js"), { name: "Worker Thread" });
    }

    let count = 0;
    setInterval(() => {
      // eslint-disable-next-line
      console.log("main thread: " + count);
      count++;
    }, 100);

    // new Main(HeavyRendering2D);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
