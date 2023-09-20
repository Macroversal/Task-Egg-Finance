const express = require('express');
const router = express.Router();
const budgetsController = require('./budgetscontroller'); // Import your budgets controller

// Route to create a new budget
router.post('/budgets', (req, res) => {
  try {
    const newBudget = budgetsController.createBudget(req.body);
    res.status(201).json(newBudget);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Route to update an existing budget
router.put('/budgets/:id', (req, res) => {
  try {
    const updatedBudget = budgetsController.updateBudget(req.body);
    res.status(200).json(updatedBudget);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

// Route to fetch all budgets
router.get('/budgets', (req, res) => {
  const allBudgets = budgetsController.getAllBudgets();
  res.status(200).json(allBudgets);
});

// Route to fetch a specific budget by ID
router.get('/budgets/:id', (req, res) => {
  try {
    const budgetId = req.params.id;
    const budget = budgetsController.getBudgetById(budgetId);
    res.status(200).json(budget);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

// Route to delete a budget by ID
router.delete('/budgets/:id', (req, res) => {
  try {
    const budgetId = req.params.id;
    budgetsController.deleteBudget(budgetId);
    res.status(204).end();
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

module.exports = router;
