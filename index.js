const server = require("./server");

const PORT = 5000;

server.listen(PORT, () => {
  console.log(`API IS UP ON PORT ${PORT}`);
});
