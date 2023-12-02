const express = require("express");

apiUserRoutes = express.Router();

const UsersService = require("../../services/users.service.js");


apiUserRoutes.get("/", async (req, res) => {
    const users = await UsersService.find()
    res.json(users);
  });
  
  apiUserRoutes.get("/:id", async (req, res) => {
    const id = parseInt(req.params.id);
    const user = await UsersService.findById(id);
    res.json(user);
  });
  
  apiUserRoutes.post("/", async  (req,res) =>{
    const user =  await UsersService.create(req.body);
    res.json({user});
  
  });
  
  apiUserRoutes.delete("/:id", async (req, res) => {
   
      const id = parseInt(req.params.id);
      
      const deleted = await UsersService.delete(id);
      if (deleted) {
        return res.json({ message: `User ${id} was deleted successfully` });
      } 
      else {
        return res.json({ message: `User ${id} was not found.` });
      }
  });


  module.exports = apiUserRoutes;