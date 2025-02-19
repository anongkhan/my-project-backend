const express = require('express');
const CourseController = require('../controllers/CourseController');

const router = express.Router();

// Define routes for course operations
router.get('/', CourseController.getAllCourses);
router.get('/:id', CourseController.getCourseById);
router.post('/', CourseController.createCourse);
router.put('/:id', CourseController.updateCourse);
router.delete('/:id', CourseController.deleteCourse);

module.exports = router;
