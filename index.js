// required dependencies
const express = require('express');
const app = express();
const PORT = 8080;

// middleware to parse the JSON body
app.use(express.json());

// GET - /api/health - check if server is up
app.get('/api/health', (req, res) => {
    res.send("✅OKAY✅")
});

// serve static files(html, css, js, etc.)
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

// POST - /api/login - login a user
app.post('/api/login', (req, res) => {
    console.log(req.body);
    res.json({
        message: "User is now logged in"
    });
});

// running server
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
});