"use strict";
/**
 * Type Task
 * @typedef {Object} Task
 * @property {number} [id] - Id of the Task.
 * @property {string} name - Name of the Task.
 * @property {boolean} done - Indicates whether Task is complete.
 */
/**
 * Memory Database Class
 */
class MemoryDatabase {
    /**
     * Create a Task Database
     */
    constructor() {
        /**
         * Internal storage
         * @private
         * @type {Object.<number,Task>}
         */
        this.db = {};
    }
    /**
     * Return value by id
     *
     * @param {number} id Task Id
     *
     * @return {Task} Return the specific Task
     */
    get(id) {
        return this.db[id];
    }
    /**
     * Return all tasks
     *
     * @returns {Array<Task>} Array of all Tasks
     */
    getAll() {
        return Object.values(this.db);
    }
    /**
     * Insert a new Task
     *
     * @param {Task} data Data to be inserted.
     * @returns {Task} returns a new task.
     */
    insert(data) {
        const id = Math.trunc(new Date().getTime() * Math.random());
        const newData = Object.assign({ id }, data);
        this.db[id] = newData;
        return newData;
    }
}
module.exports = MemoryDatabase;
//# sourceMappingURL=memory.js.map