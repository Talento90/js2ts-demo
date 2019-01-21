"use strict";
const TasksController = require("./controller");
/**
 * @typedef {import('../../database/memory')} MemoryDatabase
 * @typedef {import('hapi').Server} Hapi.Server
 */
/**
 *
 * @param {Hapi.Server} server
 * @param {MemoryDatabase} database
 */
function register(server, database) {
    const controller = new TasksController(database);
    server.bind(controller);
    server.route({
        method: "GET",
        path: "/api/tasks",
        handler: controller.getAll
    });
    server.route({
        method: "GET",
        path: "/api/tasks/{id}",
        handler: controller.get
    });
    server.route({
        method: "POST",
        path: "/api/tasks",
        handler: controller.insert
    });
}
module.exports.register = register;
//# sourceMappingURL=index.js.map