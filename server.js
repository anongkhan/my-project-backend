const express = require('express');
const bodyParser = require('body-parser');
const courseRoutes = require('./app/routers/CourseRoute');
const db = require('./dbconfig');  // No need to call db.connect here

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/api/courses', courseRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
