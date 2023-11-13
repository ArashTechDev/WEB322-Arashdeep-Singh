const express = require("express");
const apiRoutes = express.Router();
const UsersService = require("../services/users.services");
const ProductsService = require("../services/products.services");
const AuthenticationService = require("../services/authentication.services")


//LOGIN 

apiRoutes.get("/api/login", (req,res) => {
    res.render('api');
})

apiRoutes.post("/api/login", (req, res) => {
    const authentication = AuthenticationService.authenticateAPI(req.body.username,req.body.password);

    if (authentication === true ) 

     {
        res.json({ isAuthenticated: true });
    } 
    else {
        res.status(401).json({ isAuthenticated: false });
    }
});



// FAKE_USERS



apiRoutes.get("/api/users", (req, res) => {
    res.json(UsersService.findAll());
  });
  

  apiRoutes.get("/api/users/:id", (req, res) => { 
  
    const id = req.params.id;
    //  const user = users.find((user) => user.id == id);
    const user = UsersService.findById(id);
  
    res.json(user);
  });

  // DELETE 
apiRoutes.delete("/api/users/:id", (req, res) => {
    const id = req.params.id;
    UsersService.delete(id);
    res.json({ success: true, message: `User with ID ${id} deleted.` });
});


// POST a new user
apiRoutes.post("/api/users", (req, res) => {
    const newUser = req.body;
    const addedUser = UsersService.add(neUser);
    res.json(newUser);
});
  


  // FAKE_PRODUCTS
 
apiRoutes.get("/api/products", (req, res) => {
    res.json(ProductsService.findAll());
});


apiRoutes.get("/api/products/:id", (req, res) => {
    const id = req.params.id;
    const product = ProductsService.findById(id);
    res.json(product);
});

// delete product
apiRoutes.delete("/api/products/:id", (req, res) => {
    const id = req.params.id;
    ProductsService.delete(id);
    res.json({ success: true, message: `Product with ID ${id} deleted.` });
});

// add new product 
apiRoutes.post("/api/products", (req, res) => {
    const newProduct = req.body;
    const addedProduct = ProductsService.add(newProduct);
    res.json(addedProduct);
});



  module.exports = apiRoutes;