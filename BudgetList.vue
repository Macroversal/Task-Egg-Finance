<template>
    <div class="budget-list">
      <h2>Budget List</h2>
  
      <!-- Button to add a new budget -->
      <button @click="addNewBudget">Add New Budget</button>
  
      <!-- Display the list of budgets -->
      <ul>
        <li v-for="budget in budgets" :key="budget.id">
          <!-- Display budget details -->
          <div class="budget-details">
            <div class="budget-name">{{ budget.name }}</div>
            <div class="budget-amount">$ {{ budget.amount }}</div>
            <div class="budget-date">{{ formattedDate(budget.date) }}</div>
          </div>
  
          <!-- Action buttons for editing and deleting -->
          <div class="budget-actions">
            <button @click="editBudget(budget)">Edit</button>
            <button @click="deleteBudget(budget.id)">Delete</button>
          </div>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: 'BudgetList',
    props: {
      budgets: {
        type: Array,
        default: () => [],
      },
    },
    methods: {
      addNewBudget() {
        // Implement logic to add a new budget
        // You can emit an event to notify a parent component to open the add budget form
        this.$emit('add-budget');
      },
      editBudget(budget) {
        // Implement logic to edit a budget
        // You can emit an event to notify a parent component to open the edit budget form with the selected budget data
        this.$emit('edit-budget', budget);
      },
      deleteBudget(budgetId) {
        // Implement logic to delete a budget
        // You can emit an event to notify a parent component to delete the budget with the specified ID
        this.$emit('delete-budget', budgetId);
      },
      formattedDate(date) {
        // Format the date if available
        if (date) {
          return new Date(date).toLocaleDateString();
        } else {
          return 'No date';
        }
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add styles for the BudgetList component */
  .budget-list {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
  }
  
  h2 {
    text-align: center;
  }
  
  button {
    background-color: #007bff; /* Adjust button styles as needed */
    color: #fff;
    border: none;
    padding: 10px 20px;
    margin-bottom: 10px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #0056b3; /* Adjust hover color as needed */
  }
  
  ul {
    list-style: none;
    padding: 0;
  }
  
  li {
    border: 1px solid #ccc;
    padding: 10px;
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
  }
  
  .budget-details {
    flex: 1;
  }
  
  .budget-name {
    font-weight: bold;
  }
  
  .budget-amount {
    color: #ff5733; /* Adjust color as needed */
  }
  
  .budget-date {
    font-size: 12px;
    color: #666;
  }
  
  .budget-actions button {
    background-color: #007bff; /* Adjust button styles as needed */
    color: #fff;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
    margin-left: 5px;
  }
  
  .budget-actions button:hover {
    background-color: #0056b3; /* Adjust hover color as needed */
  }
  </style>
  