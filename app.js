const express = require('express');
const app = express();
const port = 3000;

// Route for the home page
app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Hello DevOps</title>
        <style>
          body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            background-color: #f0f0f0;
            overflow: hidden; /* To prevent scrollbars from marquee */
          }
          .moving-text {
            font-size: 4em; /* Larger text */
            font-weight: bold;
            color: #333;
            animation: moveText 10s linear infinite alternate; /* Animation */
          }

          @keyframes moveText {
            0% { transform: translateX(-30px); }
            100% { transform: translateX(30px); }
          }
        </style>
      </head>
      <body>
        <div class="moving-text">Hello DevOps World</div>
      </body>
    </html>
  `);
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});