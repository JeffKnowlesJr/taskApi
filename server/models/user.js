console.log("inside of user.js");

const mongoose = require("mongoose");
const TaskSchema = require("./task.js");

const UserSchema = new mongoose.Schema({
  name: {type: String, required: [true, "User must have a name"]},
  tasks: [TaskSchema]
});

mongoose.model('User', UserSchema);
