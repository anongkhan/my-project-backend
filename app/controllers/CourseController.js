const CourseModel = require('../models/CourseModel');

const CourseController = {
  getAllCourses: (req, res) => {
    CourseModel.getAllCourses((err, results) => {
      if (err) {
        return res.status(500).json({ error: 'Failed to fetch courses' });
      }
      res.status(200).json(results);
    });
  },

  getCourseById: (req, res) => {
    const { id } = req.params;
    CourseModel.getCourseById(id, (err, result) => {
      if (err || result.length === 0) {
        return res.status(404).json({ error: 'Course not found' });
      }
      res.status(200).json(result[0]);
    });
  },

  createCourse: (req, res) => {
    const courseData = req.body;
    CourseModel.createCourse(courseData, (err, result) => {
      if (err) {
        return res.status(500).json({ error: 'Failed to create course' });
      }
      res.status(201).json({ message: 'Course created', id: result.insertId });
    });
  },

  updateCourse: (req, res) => {
    const { id } = req.params;
    const courseData = req.body;
    CourseModel.updateCourse(id, courseData, (err, result) => {
      if (err || result.affectedRows === 0) {
        return res.status(404).json({ error: 'Course not found or not updated' });
      }
      res.status(200).json({ message: 'Course updated' });
    });
  },

  deleteCourse: (req, res) => {
    const { id } = req.params;
    CourseModel.deleteCourse(id, (err, result) => {
      if (err || result.affectedRows === 0) {
        return res.status(404).json({ error: 'Course not found or not deleted' });
      }
      res.status(200).json({ message: 'Course deleted' });
    });
  }
};

module.exports = CourseController;
