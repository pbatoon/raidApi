const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

// Connect to database
mongoose.connect(process.env.DB_CONNECT);
const db = mongoose.connection;

// On error show error. When db connection is successful, display success message
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to database'));
app.use(express.json());

//Routes
const raidRouter = require('./routes/raids');
app.use('/raids', raidRouter);


// Start express server
app.use(express.json());
app.listen(3000, () => console.log('Server started'));