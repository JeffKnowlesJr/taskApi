const express = require("express"),
           bp = require("body-parser"),
          app = express(),
      db_name = "taskshop",
         port = 8888;

app.use(bp.json());

require("./server/config/mongoose")(db_name);
require("./server/config/routes")(app);

app.listen(port, function() {
    console.log();
});
