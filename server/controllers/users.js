console.log("inside of users.js");

const mongoose = require("mongoose");
const User = mongoose.model("User");

class Users {
  getAll(req, res){
    User.find({}, function(err, users){
      if(err){
        res.json({"status": "not ok", "errors": err});
      }else{
        res.json({"status": "ok", "users": users});
      }
    });
  }
  create(req, res){
    let user = new User(req.body);
    user.save(function(err){
      if(err){
        res.json({"status": "not ok", "errors": err});
      }else{
        res.json({"status": "ok"});
      }
    });
  }
}

module.exports = new Users();
