// api/index.js
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const pool = require('../config/db'); // Pastikan path relatif sesuai
const userRoute = require('../routes/userRoute');
const dataRoute = require('../routes/dataRoute');
const formRoute = require('../routes/formRoute');
const helperRoute = require('../routes/helperRoute');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to the Sawah Digital Apps');
});

app.use('/user', userRoute);
app.use('/data', dataRoute);
app.use('/form', formRoute);
app.use('/helper', helperRoute);

// Ekspor handler serverless function untuk Vercel
module.exports = app;