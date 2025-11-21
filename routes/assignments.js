// routes/assignments.js
const express = require('express');
const router = express.Router();
const Assignment = require('../models/Assignment');

// GET /assignments - list all assignments
router.get('/', async (req, res) => {
  try {
    const assignments = await Assignment.find().sort({ dueDate: 1 });
    res.render('assignments/list', { title: 'Dashboard', assignments });
  } catch (err) {
    console.error('Error fetching assignments:', err);
    res.send('Error fetching assignments');
  }
});

// GET /assignments/add - show form to add new assignment
router.get('/add', (req, res) => {
  res.render('assignments/add', { title: 'Add Task' });
});

// POST /assignments/add - create a new assignment
router.post('/add', async (req, res) => {
  try {
    const assignment = new Assignment({
      courseName: req.body.courseName,
      title: req.body.title,
      description: req.body.description,
      dueDate: req.body.dueDate,
      status: req.body.status,
      priority: req.body.priority,
      // make sure we actually store a NUMBER
      weightage: req.body.weightage ? Number(req.body.weightage) : 0
    });

    await assignment.save();
    res.redirect('/assignments');
  } catch (err) {
    console.error('Error creating assignment:', err);
    res.send('Error creating assignment');
  }
});

// GET /assignments/edit/:id - show edit form
router.get('/edit/:id', async (req, res) => {
  try {
    const assignment = await Assignment.findById(req.params.id);
    if (!assignment) {
      return res.send('Assignment not found');
    }

    res.render('assignments/edit', {
      title: 'Edit Task',
      assignment
    });
  } catch (err) {
    console.error('Error loading assignment:', err);
    res.send('Error loading assignment');
  }
});

// POST /assignments/edit/:id - update assignment
router.post('/edit/:id', async (req, res) => {
  try {
    await Assignment.findByIdAndUpdate(req.params.id, {
      courseName: req.body.courseName,
      title: req.body.title,
      description: req.body.description,
      dueDate: req.body.dueDate,
      status: req.body.status,
      priority: req.body.priority,
      weightage: req.body.weightage ? Number(req.body.weightage) : 0
    });

    res.redirect('/assignments');
  } catch (err) {
    console.error('Error updating assignment:', err);
    res.send('Error updating assignment');
  }
});

// GET /assignments/delete/:id - show delete confirmation
router.get('/delete/:id', async (req, res) => {
  try {
    const assignment = await Assignment.findById(req.params.id);
    if (!assignment) {
      return res.send('Assignment not found');
    }

    res.render('assignments/delete', {
      title: 'Delete Task',
      assignment
    });
  } catch (err) {
    console.error('Error loading delete page:', err);
    res.send('Error loading delete page');
  }
});

// POST /assignments/delete/:id - actually delete
router.post('/delete/:id', async (req, res) => {
  try {
    await Assignment.findByIdAndDelete(req.params.id);
    res.redirect('/assignments');
  } catch (err) {
    console.error('Error deleting assignment:', err);
    res.send('Error deleting assignment');
  }
});

module.exports = router;
