const express = require("express");
const pageRoutes = require("./routes/pages.routes");
const apiRoutes = require("./routes/api.routes");

// SETUP
const app = express();
const PORT = 3000;
app.set('view engine', 'ejs')

// DATA
app.use(express.urlencoded({ extended: true }));


// ROUTE HANDLING
app.use(pageRoutes);
app.use(apiRoutes);

// START LISTENER

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});