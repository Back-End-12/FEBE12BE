const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('./config/database');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const kegiatanRoutes = require('./routes/kegiatanRoutes');
const cors = require('cors');

const app = express();

//connection to database
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

// middleware
app.use(cors);
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

//import

// routes

app.use(authRoutes);
app.use(kegiatanRoutes);
app.use(userRoutes);

app.listen(process.env.PORT||5173, function () {
    console.log(`listen on port ${process.env.PORT || 5173}`);
});

