<template>
    <form @submit.prevent="submitExpense" class="expense-form">
      <h2>{{ isEditing ? 'Edit Expense' : 'Add Expense' }}</h2>
  
      <div class="form-group">
        <label for="name">Expense Name:</label>
        <input
          type="text"
          id="name"
          v-model="expense.name"
          required
          placeholder="Enter expense name"
        />
      </div>
  
      <div class="form-group">
        <label for="amount">Expense Amount:</label>
        <input
          type="number"
          id="amount"
          v-model="expense.amount"
          required
          placeholder="Enter expense amount"
        />
      </div>
  
      <div class="form-group">
        <label for="date">Expense Date:</label>
        <input
          type="date"
          id="date"
          v-model="expense.date"
          placeholder="Select expense date"
        />
      </div>
  
      <div class="form-actions">
        <button type="submit">{{ isEditing ? 'Save' : 'Add' }} Expense</button>
        <button type="button" @click="cancelExpense">Cancel</button>
      </div>
    </form>
  </template>
  
  <script>
  export default {
    name: 'ExpenseForm',
    props: {
      expense: {
        type: Object,
        required: true,
      },
      isEditing: {
        type: Boolean,
        default: false,
      },
    },
    methods: {
      submitExpense() {
        // Implement logic to submit the expense data
        // You can emit an event to notify a parent component to handle the submission
        this.$emit('submit', this.expense);
      },
      cancelExpense() {
        // Implement logic to cancel or reset the form
        // You can emit an event to notify a parent component to cancel the edit or reset the form
        this.$emit('cancel');
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add styles for the ExpenseForm component */
  .expense-form {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    background-color: #fff;
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
  