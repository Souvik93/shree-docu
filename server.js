//Written By Souvik Das 07/02/18
const express = require('express');
const path = require('path');
const http = require('http');


const app = express();


app.use(express.static(path.join(__dirname, '')));




//Default Api
app.get('/', (req, res) => {
    console.log("Hi There!!!!!")
    // res.sendFile(path.join(__dirname, 'dist/index.html'));
    // res.send({"Status": "Failed.. Unable to classify VINss"});
    res.sendFile(path.join(__dirname, '/logIn.html'));
});






//Get port from environment and store in Express.
const port = process.env.PORT || '3009';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API is running on localhost:${port}`));

