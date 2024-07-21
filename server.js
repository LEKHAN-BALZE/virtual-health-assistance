const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// CORS Middleware for development
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.post('/chat', (req, res) => {
    try {
        const userMessage = req.body.message;
        if (!userMessage) {
            return res.status(400).json({ response: 'No message provided' });
        }
        // Simple response logic
        const botResponse = `You said: ${userMessage}`;
        res.json({ response: botResponse });
    } catch (error) {
        console.error('Server Error:', error);
        res.status(500).json({ response: 'An internal server error occurred' });
    }
});

app.listen(port, () => {
    console.log(`Chatbot server running at http://localhost:${port}`);
});
