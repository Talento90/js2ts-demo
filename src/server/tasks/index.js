const TasksController = require("./controller");

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
