// let count = 0;
setInterval(() => {
  // eslint-disable-next-line
  // console.log("worker thread: " + count);
  // count++;
}, 100);

self.addEventListener(
  "message",
  function(e) {
    // eslint-disable-next-line
    console.log("@@@");
    console.log(e);
    // self.postMessage(e.data);
  },
  false
);
