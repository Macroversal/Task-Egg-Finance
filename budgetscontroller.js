// Sample array to store budget data (you can replace this with a database)
let budgets = [];

// Function to create a new budget
function createBudget(newBudget) {
  // Generate a unique ID (you can use a library like uuid for more reliable IDs)
  const budgetId = Date.now().toString();
  newBudget.id = budgetId;
  
  // Push the new budget to the budgets array
  budgets.push(newBudget);

  return newBudget;
}

// Function to update an existing budget
function updateBudget(updatedBudget) {
  const index = budgets.findIndex(budget => budget.id === updatedBudget.id);

  if (index !== -1) {
    // Replace the existing budget with the updated one
    budgets[index] = updatedBudget;
    return updatedBudget;
  } else {
    throw new Error("Budget not found");
  }
}

// Function to fetch all budgets
function getAllBudgets() {
  return budgets;
}

// Function to fetch a specific budget by ID
function getBudgetById(budgetId) {
  const budget = budgets.find(b => b.id === budgetId);

  if (budget) {
    return budget;
  } else {
    throw new Error("Budget not found");
  }
}

// Function to delete a budget by ID
function deleteBudget(budgetId) {
  const index = budgets.findIndex(budget => budget.id === budgetId);

  if (index !== -1) {
    // Remove the budget from the array
    budgets.splice(index, 1);
  } else {
    throw new Error("Budget not found");
  }
}

module.exports = {
  createBudget,
  updateBudget,
  getAllBudgets,
  getBudgetById,
  deleteBudget,
};
