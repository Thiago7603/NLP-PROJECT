const express = require('express');
const app = express();
const port = 3000; // You can choose any available port

app.use(express.json()); // Enable JSON body parsing

// Define a route to handle incoming messages from the frontend
app.post('/message', (req, res) => {
    const userMessage = req.body.message; // Get the user's message
    console.log("Mensaje recibido:", userMessage);


    // Process the user's message (e.g., using your NLP model)
    
    // ... your NLP processing code here ...

    // Send a response back to the frontend
    const botResponse = 'Hello from the backend!'; // Replace with your bot's response
    res.json({ message: botResponse });
});

// Start the server
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
