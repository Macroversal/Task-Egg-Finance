<template>
    <div class="budget-item">
      <!-- Display budget details -->
      <div class="budget-details">
        <div class="budget-name">{{ budget.name }}</div>
        <div class="budget-amount">$ {{ budget.amount }}</div>
        <div class="budget-date">{{ formattedDate(budget.date) }}</div>
      </div>
  
      <!-- Action buttons for editing and deleting -->
      <div class="budget-actions">
        <button @click="editBudget">Edit</button>
        <button @click="deleteBudget">Delete</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'BudgetItem',
    props: {
      budget: {
        type: Object,
        required: true,
      },
    },
    methods: {
      editBudget() {
        // Implement logic to edit the budget
        // You can emit an event to notify a parent component to open the edit form with this budget's data
        this.$emit('edit-budget', this.budget);
      },
      deleteBudget() {
        // Implement logic to delete the budget
        // You can emit an event to notify a parent component to delete this budget
        this.$emit('delete-budget', this.budget);
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
  /* Add styles for the BudgetItem component */
  .budget-item {
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
  