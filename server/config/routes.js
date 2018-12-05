console.log("inside of routes.js");

const Tasks = require("../controllers/tasks");
const Users = require("../controllers/users");

module.exports = function(app){
  app.get("/users", Users.getAll);
  app.get("/tasks", Tasks.getAll);
  app.post("/users", Users.create);
  app.post("/tasks/:id", Tasks.create);
  app.put("/tasks/:id", Tasks.update);
  app.delete("/tasks/:id", Tasks.delete);
}
