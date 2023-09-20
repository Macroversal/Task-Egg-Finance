<template>
  <div class="financial-summary">
    <h2>Financial Summary</h2>

    <div class="summary-item">
      <div class="item-label">Total Expenses:</div>
      <div class="item-value">$ {{ totalExpenses }}</div>
    </div>

    <!-- Add more summary items as needed (e.g., income, budget details) -->

  </div>
</template>

<script>
export default {
  name: 'FinancialSummary',
  props: {
    // You can define props to receive data for summary calculations
    expenses: {
      type: Array,
      default: () => [],
    },
    // Add more props for income and budget data if needed
  },
  computed: {
    totalExpenses() {
      // Calculate the total expenses based on the provided expense data
      return this.expenses.reduce((total, expense) => total + expense.amount, 0);
    },
    // Implement computed properties for other summary items (e.g., income, budget details) if needed
  },
};
</script>

<style scoped>
/* Add styles for the FinancialSummary component */
.financial-summary {
  background-color: #fff;
  padding: 20px;
  border: 1px solid #ccc;
  max-width: 400px;
  margin: 0 auto;
}

h2 {
  text-align: center;
}

.summary-item {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}

.item-label {
  font-weight: bold;
}

.item-value {
  color: #007bff; /* Adjust color as needed */
}
</style>
