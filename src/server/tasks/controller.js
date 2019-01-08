class TasksController {
  constructor(db) {
    this.db = db;
  }

  getAll(request, reply) {
    const tasks = this.db.getAll();

    reply(tasks);
  }

  get(request, reply) {
    const { id } = request.params;
    const task = this.db.get(id);

    reply(task);
  }

  insert(request, reply) {
    const task = request.body;

    this.db.insert(task);

    reply(task);
  }
}

module.exports = TasksController;
