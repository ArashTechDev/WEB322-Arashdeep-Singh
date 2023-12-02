const Sequelize = require('sequelize');
require('dotenv').config();

let PGHST= process.env.PGHOST;
let PGDATABASE = process.env.PGDATABASE;
let PGUSER=process.env.PGUSER;
let PGPASSWORD=process.env.PGPASSWORD;



// set up sequelize to point to our postgres database
const sequelize = new Sequelize(PGDATABASE, PGUSER, PGPASSWORD, {
  host: PGHST,
  dialect: 'postgres',
  port: 5432,
  dialectOptions: {
    ssl: { rejectUnauthorized: false },
  },
});


const User = sequelize.define('users', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

  firstname: Sequelize.STRING,
  lastname: Sequelize.TEXT,
  email: Sequelize.TEXT,
  age: Sequelize.INTEGER

},  
    {
        createdAt: false, 
        updatedAt: false, 
    }  
);


const Product = sequelize.define('products', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
},
  name: Sequelize.STRING,   
  
  isbn: Sequelize.TEXT,
  price: Sequelize.DOUBLE,
  description: Sequelize.TEXT,
  company: Sequelize.TEXT,
},  
    {
        createdAt: false,
        updatedAt: false, 
    }
  
);

const Order = sequelize.define('orders', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  quantity:  Sequelize.INTEGER,
   
  status: {
    type: Sequelize.STRING,
    defaultValue: 'Pending', 
    validate: {
      notEmpty: true
    }
  }
},

{
  createdAt: false,
  updatedAt: false,
});

sequelize.sync().then(() => {
});


async function connect(){
    try{
        await sequelize.authenticate();
        console.log("Connection has been established successfully.");

    }catch(err){
        console.log("Unable to connect to database",err);
    }
}

async function sync(){
    await sequelize.sync({alter: true});
    
}

module.exports = {
    connect,
    sync,
    models: {
        User,
        Product,
        Order
    }
};



