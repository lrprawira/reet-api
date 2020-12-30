const sqlite3 = require('sqlite3');

module.exports = new sqlite3.Database('./reet.sqlite', err => {
        err && console.error(err.message);
});