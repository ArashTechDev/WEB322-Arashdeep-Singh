const { promiseImpl } = require("ejs");
const products = require("../data/fakeProducts.json");

class ProductsService{

    static findAll(){

        return products;
    }

   static findById(id){
       const product = products.find((product) =>{

            return product.id === parseInt(id);
        });

       return product;

    }

    static delete(id) {
        const index = products.findIndex(product => product.id === parseInt(id));
        if (index > -1) {
            products.splice(index, 1);
            
        }

        
    }

    static add(newProduct) {
  
        const existingProduct = products.find(product => product.id === parseInt(newProduct.id));
        if (existingProduct) {
            throw new Error('Product with this ID already exists');
        }    
        products.push(newProduct);
    
        return newProduct;
    }


}

module.exports = ProductsService;


