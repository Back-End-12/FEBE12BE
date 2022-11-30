//Set up mongoose connection
const mongoose = require('mongoose');
// const mongoDB = 'mongodb://localhost:8080/Project-2-BE12';
const mongoDB = process.env.MONGO_URL;
mongoose.connect(mongoDB);
// mongoose.Promise = global.Promise;
module.exports = mongoose;
