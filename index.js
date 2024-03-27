const express = require('express');
const app = express();
const PORT = 8080;

app.get('/api/health', (req, res) => {
    res.send("✅OKAY✅")
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
});