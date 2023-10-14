const express = require("express");

// SETUP
const app = express();
const PORT = 8080;
app.set('view engine', 'ejs')

// DATA
app.use(express.urlencoded({ extended: true }));
const users = require("./data/fakeUsers.json");

// ROUTES
app.get("/", (req, res) => {
  res.render('index');
});

app.post("/", (req, res) => {
    // Check for the hard-coded username & password
    if (req.body.username === "admin" && req.body.password === "admin123") {
      res.redirect("/list");
    } else {
      res.redirect("/");
    }
  });

app.get("/list", (req, res) => {
  res.render('list', { users: users.slice(0, 25) }); 
});

app.get("/detail/:id", (req, res) => { 

  const id = req.params.id;
   const user = users.find((user) => user.id == id);

  res.render('detail', { user: user}); 

});
// START LISTENER

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});