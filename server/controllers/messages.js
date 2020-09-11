var models = require('../models');


module.exports = {
  get: function (req, res) {
    models.messages.getAll((err, result) => {
        res.json(result)

    });

  },
  // a function which handles a get request for all messages
  post: function (req, res) {
    // models.messages.create(req , res)
    var newMessage = [ req.body[msg], req.body[roomname] , req.body[username]  ];

    models.messages.create(newMessage, (err , results)=> {
      if (err) {
        console.log('err:' ,err)
      } else {
        res.sendStatus(201);
      }
    })


  }// a function which handles posting a message to the database
};
