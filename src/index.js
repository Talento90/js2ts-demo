const MemoryDatabase = require("./database/memory");
const { createServer } = require("./server");

const serverConfigs = {
  port: 3000,
  host: "localhost"
};

const db = new MemoryDatabase();

db.insert({ name: "Homework", done: false });
db.insert({ name: "Clean house", done: false });
db.insert({ name: "Play Games", done: true });

const server = createServer(serverConfigs, db);

server.start(err => {
  if (err) {
    console.error(err);
  } else {
    console.log("Server runnning", serverConfigs);
  }
});
