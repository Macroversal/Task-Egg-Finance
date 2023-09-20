<template>
    <div class="expense-item">
      <!-- Display expense details -->
      <div class="expense-details">
        <div class="expense-name">{{ expense.name }}</div>
        <div class="expense-amount">$ {{ expense.amount }}</div>
        <div class="expense-date">{{ formattedDate }}</div>
      </div>
  
      <!-- Action buttons for editing and deleting -->
      <div class="expense-actions">
        <button @click="editExpense">Edit</button>
        <button @click="deleteExpense">Delete</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ExpenseItem',
    props: {
      expense: {
        type: Object,
        required: true,
      },
    },
    computed: {
      formattedDate() {
        // Format the date if available in the expense object
        if (this.expense.date) {
          const date = new Date(this.expense.date);
          return date.toLocaleDateString();
        } else {
          return 'No date';
        }
      },
    },
    methods: {
      editExpense() {
        // Implement logic to edit the expense
        // You can emit an event to notify a parent component to open the edit form
        this.$emit('edit', this.expense);
      },
      deleteExpense() {
        // Implement logic to delete the expense
        // You can emit an event to notify a parent component to delete this expense
        this.$emit('delete', this.expense);
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add styles for the ExpenseItem component */
  .expense-item {
    border: 1px solid #ccc;
    padding: 10px;
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
  }
  
  .expense-details {
    flex: 1;
  }
  
  .expense-name {
    font-weight: bold;
  }
  
  .expense-amount {
    color: #ff5733; /* Adjust color as needed */
  }
  
  .expense-date {
    font-size: 12px;
    color: #666;
  }
  
  .expense-actions button {
    background-color: #007bff; /* Adjust button styles as needed */
    color: #fff;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
    margin-left: 5px;
  }
  
  .expense-actions button:hover {
    background-color: #0056b3; /* Adjust hover color as needed */
  }
  </style>
  