const express = require("express");
const pageRoutes = express.Router();
const users = require("../data/fakeUsers.json");
const UsersService = require("../services/users.services");
const AuthenticationService = require("../services/authentication.services")


pageRoutes.get("/", (req, res) => {
  
    res.render('index');
  });
  
  pageRoutes.post("/", (req, res) => {
      // Check for the hard-coded username & password
      const authentication = AuthenticationService.authenticate(req.body.username,req.body.password);

      if (authentication === true) {
       
        res.redirect("/list");
      } else {
        res.redirect("/");
      }
    });
  
    pageRoutes.get("/list", (req, res) => {
    res.render('list', { users: users.slice(0, 25) }); 
  });
  
  pageRoutes.get("/detail/:id", (req, res) => { 
    const user = UsersService.findById(req.params.id);
    // const id = req.params.id;
    //  const user = users.find((user) => user.id == id);
  
    res.render('detail', { user: user}); 
  });
  

  module.exports = pageRoutes;