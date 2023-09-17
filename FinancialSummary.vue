<template>
    <div class="financial-summary">
      <h2>Financial Summary</h2>
  
      <!-- Display income, expenses, and total balance -->
      <div class="summary-item">
        <strong>Income:</strong> ${{ income }}
      </div>
      <div class="summary-item">
        <strong>Expenses:</strong> ${{ expenses }}
      </div>
      <div class="summary-item">
        <strong>Total Balance:</strong> ${{ totalBalance }}
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'FinancialSummary',
    props: {
      income: {
        type: Number,
        required: true,
      },
      expenses: {
        type: Number,
        required: true,
      },
    },
    computed: {
      totalBalance() {
        return this.income - this.expenses;
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add styles for the FinancialSummary component */
  </style>
  