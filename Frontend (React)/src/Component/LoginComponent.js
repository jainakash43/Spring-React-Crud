import React, { Component } from "react";
import AuthenticationService from "./AuthenticationService.js";
import HeaderComponent from "./HeaderComponent";
import "../Styles/Login.css";

 class LoginComponent extends Component {
     constructor(props) {
         super(props);

         this.state = {
             username: '',
             password: '',
             hasLoginFailed: false,
             showSuccessMessage: false
         }
         this.handleChange = this.handleChange.bind(this);
         this.loginClicked = this.loginClicked.bind(this);
         
     }
     handleChange(event) {
         //console.log(this.state);
         this.setState(
             {
                 [event.target.name]
                     : event.target.value

             });
     }


     loginClicked() {

         AuthenticationService.executeBasicJWTApplicationService(this.state.username, this.state.password)
             .then((response) => {

                 console.log(response);
                 AuthenticationService.registerSuccessfulLoginforJWT(this.state.username, response.data.token);
                 
                 this.props.history.push(`/welcome/${this.state.username}`);

             })
             .catch(() => {

                 this.setState({ hasLoginFailed: true, showSuccessMessage: false })

             })
     }
     
     render() {
        
         return (

             <div >
                 <HeaderComponent />
                 <h1 style={{
                     "textAlign": "center"
                 }}>Login</h1>
                 {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
                 {this.state.showSuccessMessage && <div>Login Sucessful</div>}

                 <div className="main">
                     <label for="uname"><b>Username</b></label>
                     <input type="text" placeholder="Enter Username" name="username" value={this.state.username} onChange={this.handleChange} required />

                     <label for="psw"><b>Password</b></label>
                     <input type="password" placeholder="Enter Password" name="password" value={this.state.password} onChange={this.handleChange} required />

                     <button className="btn btn-success" onClick={this.loginClicked}>Login</button>
                             
                     </div>
             </div>
             );
     }


}
export default LoginComponent;
