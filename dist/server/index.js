"use strict";
const Hapi = require("hapi");
const tasks = require("./tasks");
/**
 * @typedef {import('../database/memory')} MemoryDatabase
 */
/**
 * Type ServerConfiguration
 * @typedef {Object} ServerConfiguration
 * @property {number} port - Server port.
 * @property {string} host - Server host.
 */
/**
 * Creates a new HTTP Server
 *
 * @param {ServerConfiguration} config
 * @param {import('../database/memory')} database
 *
 * @returns {Hapi.Server} Hapi server
 */
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
//# sourceMappingURL=index.js.map