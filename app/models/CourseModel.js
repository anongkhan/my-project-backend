const db = require('../../dbconfig');

const Course = {
  getAllCourses: (callback) => {
    const query = 'SELECT * FROM Courses';
    db.query(query, callback);
  },

  getCourseById: (id, callback) => {
    const query = 'SELECT * FROM Courses WHERE id = ?';
    db.query(query, [id], callback);
  },

  createCourse: (courseData, callback) => {
    const query = 'INSERT INTO Courses (course_name, instructor, credits, start_date) VALUES (?, ?, ?, ?)';
    
    db.query(query, [courseData.course_name, courseData.instructor, courseData.credits, courseData.start_date], (err, result) => {
      if (err) {
        return callback(err, null);
      }

      // Retrieve the newly inserted record using the inserted ID
      const newCourseId = result.insertId;
      db.query('SELECT * FROM Courses WHERE id = ?', [newCourseId], (err, newCourse) => {
        if (err) {
          return callback(err, null);
        }
        callback(null, newCourse[0]); // Return the newly created course details
      });
    });
  },

  updateCourse: (id, courseData, callback) => {
    const query = 'UPDATE Courses SET course_name = ?, instructor = ?, credits = ?, start_date = ? WHERE id = ?';
    
    db.query(query, [courseData.course_name, courseData.instructor, courseData.credits, courseData.start_date, id], (err, result) => {
      if (err) {
        return callback(err, null);
      }

      // Retrieve the updated record
      db.query('SELECT * FROM Courses WHERE id = ?', [id], (err, updatedCourse) => {
        if (err) {
          return callback(err, null);
        }
        callback(null, updatedCourse[0]); // Return the updated course details
      });
    });
  },

  deleteCourse: (id, callback) => {
    const query = 'DELETE FROM Courses WHERE id = ?';
    db.query(query, [id], callback);
  }
};

module.exports = Course;
