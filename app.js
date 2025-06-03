// Remove this line
// const N8N_WEBHOOK_URL = 'https://your-n8n-domain.com/webhook/devops-form';
const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
const port = process.env.PORT || 3000;
const N8N_WEBHOOK_URL = 'https://pra123.app.n8n.cloud/webhook-test/devops-form'; // replace with your actual webhook URL

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Home route with form
app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>DevOps Training Registration</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            background-color: #f8f9fa;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
          }
          form {
            background: white;
            padding: 2em;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
          }
          input, button {
            display: block;
            width: 100%;
            padding: 0.5em;
            margin-top: 1em;
          }
          button {
            background-color: #007bff;
            color: white;
            border: none;
          }
        </style>
      </head>
      <body>
        <form action="/submit" method="POST">
          <h2>DevOps Training Signup</h2>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <input type="date" name="joiningDate" required />
          <button type="submit">Register</button>
        </form>
      </body>
    </html>
  `);
});

// Handle form submission
app.post('/submit', async (req, res) => {
  const { name, email, joiningDate } = req.body;

  try {
    await axios.post(N8N_WEBHOOK_URL, {
      name,
      email,
      joiningDate
    });

    res.send(`
      <html>
        <body style="text-align: center; font-family: Arial; margin-top: 50px;">
          <h2>Thank you, ${name}!</h2>
          <p>We've received your registration for DevOps training starting on <strong>${joiningDate}</strong>.</p>
        </body>
      </html>
    `);
  } catch (error) {
    console.error("Error sending to n8n:", error.message);
    res.status(500).send("Something went wrong. Please try again later.");
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});