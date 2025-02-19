const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root', // Replace with your DB username
  password: '', // Replace with your DB password
  database: 'course_management'
});

db.on('error', (err) => {
  console.error('Database connection error:', err);
});

module.exports = db;
