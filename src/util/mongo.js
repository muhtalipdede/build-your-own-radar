const mongoose = require('mongoose');

const Mongo = function (dbUrl) {
    var self = {};

    (function () {
      connect();
    })();

    function connect() {
      mongoose.Promise = global.Promise;
      mongoose.connect(dbUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      }).then(() => {
        console.log("Successfully connected to the database");
      }).catch(err => {
        console.log('Could not connect to the database. Exiting now...', err);
        process.exit();
      });
    }

    return self;
};

module.exports = Mongo;
