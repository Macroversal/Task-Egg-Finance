const express = require('express');
const router = express.Router();

// Sample data (you can replace this with database operations)
const expenses = [
  { id: 1, name: 'Rent', amount: 1000 },
  { id: 2, name: 'Groceries', amount: 200 },
  // Add more expense objects as needed
];

// Get all expenses
router.get('/', (req, res) => {
  res.json(expenses);
});

// Get a specific expense by ID
router.get('/:id', (req, res) => {
  const expenseId = parseInt(req.params.id);
  const expense = expenses.find((e) => e.id === expenseId);

  if (!expense) {
    return res.status(404).json({ error: 'Expense not found' });
  }

  res.json(expense);
});

// Create a new expense
router.post('/', (req, res) => {
  const { name, amount } = req.body;
  const newExpense = { id: expenses.length + 1, name, amount };
  expenses.push(newExpense);
  res.status(201).json(newExpense);
});

// Update an existing expense by ID
router.put('/:id', (req, res) => {
  const expenseId = parseInt(req.params.id);
  const { name, amount } = req.body;
  const expenseIndex = expenses.findIndex((e) => e.id === expenseId);

  if (expenseIndex === -1) {
    return res.status(404).json({ error: 'Expense not found' });
  }

  expenses[expenseIndex] = { id: expenseId, name, amount };
  res.json(expenses[expenseIndex]);
});

// Delete an expense by ID
router.delete('/:id', (req, res) => {
  const expenseId = parseInt(req.params.id);
  const expenseIndex = expenses.findIndex((e) => e.id === expenseId);

  if (expenseIndex === -1) {
    return res.status(404).json({ error: 'Expense not found' });
  }

  expenses.splice(expenseIndex, 1);
  res.status(204).send();
});

module.exports = router;
