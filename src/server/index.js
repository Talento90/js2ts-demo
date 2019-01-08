const Hapi = require("hapi");
const tasks = require("./tasks");

function createServer(config, database) {
  const server = new Hapi.Server();

  server.connection({
    host: config.host,
    port: config.port
  });

  tasks.register(server, database);

  return server;
}

module.exports = {
  createServer
};
