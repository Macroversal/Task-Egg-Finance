<template>
    <nav class="top-navbar">
      <div class="container">
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/expenses">Expense Tracking</router-link></li>
          <li><router-link to="/budget">Budget Management</router-link></li>
          <li><router-link to="/reports">Reports</router-link></li>
          <li><router-link to="/profile">User Profile</router-link></li>
          <li><router-link to="/settings">Settings</router-link></li>
        </ul>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'TopNavbar',
  };
  </script>
  
  <style scoped>
  /* Add styles for the top navigation bar */
  .top-navbar {
    background-color: #333;
    color: #fff;
    padding: 10px 0;
  }
  
  .top-navbar ul {
    list-style: none;
    padding: 0;
    display: flex;
  }
  
  .top-navbar li {
    margin-right: 20px;
  }
  
  .top-navbar a {
    text-decoration: none;
    color: #fff;
    font-weight: bold;
  }
  
  .top-navbar a:hover {
    text-decoration: underline;
  }
  </style>
  