var models = require('../models');

module.exports = {
  get: function (req, res) {

    models.users.getAll((err , result) => {
      if (err ) {
        console.log('err : ' , err);
      } else {
        res.json(result);
      }
    })

  },
  post: function (req, res) {
      var params = [ req.body.username];
    models.users.create( params , (err , result ) =>{
      if (err) {
        console.log('err:' , err) ;
      } else {
        res.sendStatus(201);
      }
    })

  }
};
