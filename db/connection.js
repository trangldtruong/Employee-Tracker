const mysql = require('mysql2');

const db = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      password: 'Sophia1997!',
      database: 'employees_db'
    },
    console.log(`Connected to the Employees Tracker database`));
    db.connect(err => {
      if (err) throw err
    });

    module.exports = db;