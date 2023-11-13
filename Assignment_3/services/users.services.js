const users = require("../data/fakeUsers.json");

class UsersService{

    static findAll(){

        return users;
    }

   static findById(id){
       const user = users.find((user) =>{

            return user.id === parseInt(id);
        });

       return user;

    }

    static delete(id) {
        const index = users.findIndex(user => user.id === parseInt(id));
        if (index > -1) {
            users.splice(index, 1);
            
        }

        
    }

    static add(newUser) {
  
        const existingUser = users.find(user => user.id === parseInt(newUser.id));
        if (existingUser) {
            throw new Error('User with this ID already exists');
        }    
        users.push(newUser);
    
        return newUser;
    }

   


}

module.exports = UsersService;


