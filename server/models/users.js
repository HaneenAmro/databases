var db = require('../db');

module.exports = {
  getAll: function (callback) {
    var queryStr = 'SELECT * FROM users';
    db.query(queryStr , (err, result) => {
      if (err) {
        callback(err);
      } else {
        callback(result);
      }
    })


  },
  create: function (params , callback) {

    var queryStr = 'INSERT INTO users (username) VALUES (?)';

  db.query(queryStr , params, (err , result) => {
    if (err) {
      callback(err);
    } else {
      callback(result);
    }
  })
  }
};
