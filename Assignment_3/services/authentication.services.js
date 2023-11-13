class AuthenticationService{

    static authenticate(username,password){
        let isAuthenticated = true;

        if (username == "username" && password == "password")
        {
            isAuthenticated = true;
        }
       else {
             isAuthenticated = false;
       }
        
       return isAuthenticated;

    }

    static authenticateAPI(firstName,password){
        let isAuthenticated = true;

        if (firstName == "Mossie" && password == "password")
        {
            isAuthenticated = true;
        }
       else {
             isAuthenticated = false;
       }
        
       return isAuthenticated;
    }

    
}

module.exports = AuthenticationService;