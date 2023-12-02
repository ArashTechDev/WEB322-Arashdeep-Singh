

const express = require("express");
apiRoutes = express.Router();

const apiUserRoutes = require("./api/api.users.routes");
const apiProductRoutes = require("./api/api.products.routes");
const apiOrderRoutes = require("./api/api.orders.routes");

apiRoutes.use("/users",apiUserRoutes);
apiRoutes.use("/products",apiProductRoutes);
apiRoutes.use("/orders",apiOrderRoutes);



module.exports = apiRoutes;
