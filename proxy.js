document.getElementById('submit-btn').addEventListener('click', async () => {
  const pin = document.getElementById('pin').value;
  const url = document.getElementById('url').value;

  // Check if the PIN is correct
  if (pin !== '1234') {
    document.getElementById('error-message').style.display = 'block';
    return;
  }

  document.getElementById('error-message').style.display = 'none';
  
  // Make sure a URL was provided
  if (!url) {
    alert("Please input a URL.");
    return;
  }

  // Load Ultraviolet (assuming the bundle is a self-contained proxy script)
  const script = document.createElement('script');
  script.src = '/uv/uv.bundle.js';  // Path to the Ultraviolet bundle
  script.onload = () => {
    // Initialize Ultraviolet proxy functionality after loading the bundle
    try {
      // Call the Ultraviolet proxy method (adjust based on actual API)
      const response = UltravioletProxy.getProxyContent(url);  // Replace with actual method
  
      // Display the proxied content
      document.getElementById('proxy-content').innerHTML = response;
    } catch (error) {
      document.getElementById('proxy-content').innerHTML = 'An error occurred while fetching the page.';
    }
  };
  document.body.appendChild(script);
});
