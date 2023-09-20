const express = require('express');
const app = express();
const budgetsApiRouter = require('./budgetsapi');

// Mount the budgets API router on '/api'
app.use('/api', budgetsApiRouter);

// Start your Express server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
