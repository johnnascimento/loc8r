var gracefulShutDown,
    readLine = require('readline'),
    mongoose = require('mongoose'),
    dbURI = 'mongodb://localhost/Loc8r';

// The following way works fine if we're talking about a single DB
mongoose.connect(dbURI, { 
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// The following approach should be used instead if the idea is to use more than one DB
// Obviously we'll need to substitute the entries where we used mongoose.connection
// For the new var created bellow
// Ex: logDB.on('connected', .....)
// var logDB = mongoose.createConnection(dbURI, { 
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })

// Logging messages from mongoose connection object
mongoose.connection.on('connected', function() {
    console.log('Mongoose connected to ' + dbURI);
    console.log('Process.platform ' + process.platform);
});

mongoose.connection.on('error', function(err) {
    console.log('Mongoose connection error' + err);
});

mongoose.connection.on('disconnected', function() {
    console.log('Mongoose disconnected');
});

gracefulShutDown = function(msg, callback) {
    mongoose.connection.close(function() {
        console.log('Mongoose disconnected throught ' + msg);

        callback();
    });
}

// SIGUSR2 is and Event used by nodemon when restarts its process 
process.once('SIGUSR2', function() {
    gracefulShutDown('nodemon restart JOHN', function() {
        process.kill(process.pid, 'SIGUSR2');
    });
});

// For windows OS we need to use an event simulator for SIGINT to work
if(process.platform === 'win32') {
    var rl = readLine.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.on('SIGINT', function() {
        process.emit('SIGINT');
    });
}

// Listen for SIGINT emitted on application termination (Works only on Unix-based system such as Linux and Mac OS X)
process.on('SIGINT', function() {
    gracefulShutDown('app termination', function() {
        process.exit(0);
    });
});

// Listen for SIGTERM emitted when HEROKU shuts down process
process.on('SIGTERM', function() {
    gracefulShutDown('Heroku app shutdown', function() {
        process.exit(0);
    });
});

// Requiring 'Location.js' file inside this one
require('./locations');