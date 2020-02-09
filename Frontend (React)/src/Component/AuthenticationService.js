import axios from 'axios';

export const USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser';

class AuthenticationService {

    isUserLoggedIn() {
        let user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME)
        if (user === null) return false
        return true
    }
    
    

    executeBasicJWTApplicationService(username, password) {

        return axios.post(`http://localhost:8080/authenticate`, {
            username,
            password
        })
    }

    registerSuccessfulLoginforJWT(username, token) {

        sessionStorage.setItem(USER_NAME_SESSION_ATTRIBUTE_NAME, username)
        

        axios.interceptors.request.use(
            config => {

                if (this.isUserLoggedIn()) {
                    config.headers['Authorization'] = this.createJWTToken(token);

                    // config.headers['Content-Type'] = 'applicati
                    return config;
                }},
            error => {
                Promise.reject(error)
            });
   
    }

    createJWTToken(token) {
        return 'Bearer ' + token
    }

   

    logout() {

        sessionStorage.removeItem(USER_NAME_SESSION_ATTRIBUTE_NAME);
    }

}
export default new AuthenticationService();