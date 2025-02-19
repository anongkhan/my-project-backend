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
    db.query(query, [courseData.course_name, courseData.instructor, courseData.credits, courseData.start_date], callback);
  },

  updateCourse: (id, courseData, callback) => {
    const query = 'UPDATE Courses SET course_name = ?, instructor = ?, credits = ?, start_date = ? WHERE id = ?';
    db.query(query, [courseData.course_name, courseData.instructor, courseData.credits, courseData.start_date, id], callback);
  },

  deleteCourse: (id, callback) => {
    const query = 'DELETE FROM Courses WHERE id = ?';
    db.query(query, [id], callback);
  }
};

module.exports = Course;
