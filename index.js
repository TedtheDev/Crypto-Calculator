const app = require('express')();
const path = require('path');

const port = process.env.PORT || 8888;

app.get('/', (req, res) => {
    res.send('hello world');
});

app.listen(port, (req, res) => {
    console.log(`Listening on port: ${port}` );
});