class MemoryDatabase {
  constructor() {
    this.db = {};
  }

  get(id) {
    return this.db[id];
  }

  getAll() {
    return Object.values(this.db);
  }

  insert(data) {
    const id = parseInt(new Date().getTime() * Math.random(), 10);

    const newData = {
      id,
      ...data
    };

    this.db[id] = newData;

    return newData;
  }
}

module.exports = MemoryDatabase;
