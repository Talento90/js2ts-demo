const Hapi = require('hapi');

/**
 * @typedef {import('../../database/memory')} MemoryDatabase
 */

 /**
  * Task Controller Class
  */
class TasksController {
  /**
   * Creates a new TaskController
   * @param {MemoryDatabase} db Database
   */
  constructor(db) {
    this.db = db;
  }

  /**
   * Get all Tasks.
   * 
   * @param {Hapi.Request} _request 
   * @param {Hapi.Base_Reply} reply 
   * 
   */
  getAll(_request, reply) {
    const tasks = this.db.getAll();

    reply(tasks);
  }

  /**
   * Get a single task by id.
   * 
   * @param {Hapi.Request} request 
   * @param {Hapi.Base_Reply} reply 
   * 
   */
  get(request, reply) {
    const id = parseInt(request.params.id, 10);
    const task = this.db.get(id);

    reply(task);
  }

  /**
   * Get a single task by id.
   * 
   * @param {Hapi.Request} request 
   * @param {Hapi.Base_Reply} reply 
   * 
   */
  insert(request, reply) {
    const task = request.payload;
    const newTask = this.db.insert(task);

    reply(newTask);
  }
}

module.exports = TasksController;
