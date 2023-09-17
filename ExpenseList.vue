<template>
    <div>
      <!-- Other components and content -->
  
      <!-- Include the ExpenseList component with the expenses prop -->
      <expense-list :expenses="expenseData"></expense-list>
    </div>
  </template>
  
  <script>
  import ExpenseList from '@/components/ExpenseList.vue'; // Adjust the import path
  
  export default {
    components: {
      ExpenseList,
    },
    data() {
      return {
        expenseData: [
          { id: 1, name: 'Rent', amount: 1000 },
          { id: 2, name: 'Groceries', amount: 200 },
          // Add more expense objects as needed
        ],
      };
    },
  };
  </script>
  