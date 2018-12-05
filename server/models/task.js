console.log("inside of task.js");

const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  name: {type: String, required: [true, "Task must have a name"]},
});

mongoose.model('Task', TaskSchema);

module.exports = TaskSchema;
