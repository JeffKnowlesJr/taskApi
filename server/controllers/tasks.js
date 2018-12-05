console.log("inside of tasks.js");

const mongoose = require("mongoose");
const Task = mongoose.model("Task");
const User = mongoose.model("User");

class Tasks {
  create(req, res){
    let task = new Task(req.body);
    task.save(function(err){
      if(err){
        res.json({"status": "not ok", "errors": err});
      }else{
        User.findOneAndUpdate({_id: req.params.id}, {$push: {tasks: task}}, function(err, data){
          if(err){
            res.json({"status": "not ok", "errors": err});
          }else{
            res.json({"status": "ok", "data": data});
          }
        });
      }
    });
  }
  getAll(req, res){
    Task.find({}, function(err, tasks){
      if(err){
        res.json({"status": "not ok", "errors": err});
      }else{
        res.json({"status": "ok", "tasks": tasks});
      }
    });
  }
  update(req, res) {
    Task.findOneAndUpdate({_id: req.params.id}, {$set: {name: req.body.name}}, function(err, data){
      if(err){
        res.json({"status": "not ok", "errors": err});
      }else{
        res.json({"status": "ok", "data": data});
      }
    });
  }
  delete(req, res) {
    Task.findByIdAndRemove({_id: req.params.id}, function(err, data){
      if(err){
        res.json({"status": "not ok", "errors": err});
      }else{
        res.json({"status": "ok", "data": data});
      }
    });
  }
}
module.exports = new Tasks();
