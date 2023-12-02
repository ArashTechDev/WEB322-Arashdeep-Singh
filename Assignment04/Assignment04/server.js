const express = require("express");
const pageRoutes = require("./routes/page.routes");
const apiRoutes = require("./routes/api.routes");
const {connect, sync} = require("./database/db");

const app = express();
const port = 1500;

//SET THE VIEW ENGINE
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.use(express.json());

//Database stuff
 connect();
 sync();

// ROUTE HANDLING
app.use(pageRoutes);
app.use("/api", apiRoutes);


app.listen(port,()=>{
console.log(`Listening on port ${port}`);
});



// LISTEN FOR REQUESTS!!!!

