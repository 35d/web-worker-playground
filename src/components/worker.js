let count = 0;
setInterval(() => {
  // eslint-disable-next-line
  console.log("worker thread: " + count);
  count++;
}, 100);
