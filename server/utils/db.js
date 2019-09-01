const mongoose = require('mongoose');

require('dotenv').config()
const dbUri = process.env.DB_URI

mongoose.Promise = global.Promise;

mongoose.set('debug', true);
mongoose.set('useCreateIndex', true);
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);

mongoose.connect(dbUri, { useNewUrlParser: true }).catch(function(reason) {
    console.log('Unable to connect to the mongodb instance. Error: ', reason);
});

mongoose.connection.on('connected', () => {
    console.log("Successfully connected to DB");
});

mongoose.connection.on('error', () => {
    console.log("Error on DB");
});

mongoose.connection.on('disconnected', () => {
    console.log("Disconnected from DB");
});