const express = require('express');
const cors = require('cors');
const connectDB = require('./config/dbconnection')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000;
const {generateURL, redirect} = require('./urlController');

connectDB()

const app = express();

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false}))

app.post('/generateUrl', generateURL);
app.get('/:id', redirect);

app.listen(port, () => console.log(`Server started at port number: ${port}`));

