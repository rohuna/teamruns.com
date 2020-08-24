const functions = require('firebase-functions');
const express = require('express');
const app = express();

app.get('/hello', (req, res) => res.send('Hello World!'));

exports.app = functions.https.onRequest(app);
