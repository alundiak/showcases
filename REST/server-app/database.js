const sqlite3 = require('sqlite3').verbose();

class Database {
  static async connect() {
    const db = new sqlite3.Database(':memory:');
    return db;
  }

  static async createOrder(db, order) {
    return new Promise((resolve, reject) => {
      db.run('INSERT INTO orders (item) VALUES (?)', [order.item], function (err) {
        if (err) {
          reject(err);
        } else {
          resolve(this.lastID);
        }
      });
    });
  }

  static async getOrders(db) {
    return new Promise((resolve, reject) => {
      db.all('SELECT * FROM orders', (err, rows) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows);
        }
      });
    });
  }
}

module.exports = Database;
