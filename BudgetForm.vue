<template>
    <form @submit.prevent="submitBudget" class="budget-form">
      <h2>{{ isEditing ? 'Edit Budget' : 'Add Budget' }}</h2>
  
      <div class="form-group">
        <label for="name">Budget Name:</label>
        <input
          type="text"
          id="name"
          v-model="budget.name"
          required
          placeholder="Enter budget name"
        />
      </div>
  
      <div class="form-group">
        <label for="amount">Budget Amount:</label>
        <input
          type="number"
          id="amount"
          v-model="budget.amount"
          required
          placeholder="Enter budget amount"
        />
      </div>
  
      <div class="form-group">
        <label for="date">Budget Date:</label>
        <input
          type="date"
          id="date"
          v-model="budget.date"
          placeholder="Select budget date"
        />
      </div>
  
      <div class="form-actions">
        <button type="submit">{{ isEditing ? 'Save' : 'Add' }} Budget</button>
        <button type="button" @click="cancelBudget">Cancel</button>
      </div>
    </form>
  </template>
  
  <script>
  export default {
    name: 'BudgetForm',
    props: {
      budget: {
        type: Object,
        required: true,
      },
      isEditing: {
        type: Boolean,
        default: false,
      },
    },
    methods: {
      submitBudget() {
        // Implement logic to submit the budget data
        // You can emit an event to notify a parent component to handle the submission
        this.$emit('submit-budget', this.budget);
      },
      cancelBudget() {
        // Implement logic to cancel or reset the form
        // You can emit an event to notify a parent component to cancel the edit or reset the form
        this.$emit('cancel-budget');
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add styles for the BudgetForm component */
  .budget-form {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    background-color: #fff;
  }
  
  h2 {
    text-align: center;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  label {
    font-weight: bold;
    display: block;
  }
  
  input[type="text"],
  input[type="number"],
  input[type="date"] {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  .form-actions {
    display: flex;
    justify-content: space-between;
  }
  
  button {
    background-color: #007bff; /* Adjust button styles as needed */
    color: #fff;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #0056b3; /* Adjust hover color as needed */
  }
  </style>
  