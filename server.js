const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Serve static files (HTML, CSS, JS, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Serve the Ultraviolet-related files in the 'uv' folder
app.use('/uv', express.static(path.join(__dirname, 'uv')));

// Route to handle the proxy logic (if needed)
app.get('/proxy', (req, res) => {
  // Here you can add custom proxy logic, or you can integrate the logic into the client-side.
  // You can also call Ultraviolet-related methods here if needed.
  res.send('Proxy setup is running');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
