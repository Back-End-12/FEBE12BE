const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('./config/database');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const cors = require('cors');

const app = express();

//connection to database
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

// middleware
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json());

//import
const kegiatanRoutes = require('./routes/kegiatanRoutes')

// routes
app.use(authRoutes);
app.use(userRoutes);
app.use(kegiatanRoutes);


app.listen(process.env.PORT||5173, function () {
    console.log(`listen on port ${process.env.PORT || 5173}`);
});

