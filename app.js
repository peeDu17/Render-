const express = require('express');
const app = express();
const port = 3000;

// Route for the home page
app.get('/', (req, res) => {
  res.send('Hello DevOps World');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});