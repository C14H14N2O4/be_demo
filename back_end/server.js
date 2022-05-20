const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Listening on port ${port}`));

app.get('/', (req, res) => {
    res.send({express: "Connected"})
});

app.post('/', (req, res) => {
    res.send('Got a POST request');
});

app.put('/', (req, res) => {
    res.send('Got a PUT request');
});

app.delete('/', (req, res) => {
    res.send('Got a DELETE request');
});