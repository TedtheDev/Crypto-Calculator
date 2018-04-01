const express = require('express');
const app = express();
const path = require('path');

const port = process.env.PORT || 8888;

app.use('/build', express.static('build'));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.get('*', (req, res) => {
    res.redirect('/')
})


app.listen(port, (req, res) => {
    console.log(`Listening on port: ${port}` );
});