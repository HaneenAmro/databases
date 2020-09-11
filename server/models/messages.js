var db = require('../db');

module.exports = {
  getAll: function (callback) {

    var querySTR = 'SELECT messages.id, messages.msg, messages.roomname, users.username FROM messages LEFT OUTER JOIN users ON (messages.userid = users.id)';
    db.query(querySTR, (err, res) => {
      if (err) {
        console.log('err', err)
        callback(err)
      } else {
        console.log('messages: ', res)
        callback(res)
      }

    })
  }, // a function which produces all the messages
  create: function (params, callback) {
    var queryStr = 'INSERT INTO messages(userid, msg, roomname) VALUES ((SELECT id FROM users WHERE username = ? limit 1), ?, ?)'
    db.query(queryStr, params, (err, res) => {
      if (err) {
        console.log('err: ', err)
        callback(err)
      } else {
        console.log('msg inserted: ', params)
        callback(res);
      }
    })
  } // a function which can be used to insert a message into the database
};
