const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3001;

app.get('/', (req, res) => {
    res.send('Server is running. Use /news to get the news data.');
});

app.get('/news', (req, res) => {
    const filePath = path.join(__dirname, 'newsData.json');
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading news data:', err);
            res.status(500).send('Error reading news data');
            return;
        }
        res.json(JSON.parse(data));
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
