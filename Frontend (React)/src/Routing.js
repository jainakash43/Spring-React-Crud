import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginComponent from './Component/LoginComponent';
import HeaderComponent from './Component/HeaderComponent';
import LogoutComponent from "./Component/LogoutComponent";
import AuthenticatedRoute from "./Component/AuthenticatedRoute";
import TodoComponent from "./Component/TodoComponent";
import HomeComponent from "./Component/HomeComponent";
import EditComponent from "./Component/EditComponent";
class Routing extends Component {
    

    render() {

        return (
            <div className="TodoApp">
                <Router>
                    <>
                       
                        <Switch>
                            <Route path="/" exact component={LoginComponent} />
                            <Route path="/login" component={LoginComponent} />
                            <AuthenticatedRoute path="/welcome/:name" component={HomeComponent} />
                            <AuthenticatedRoute path="/logout" component={LogoutComponent} />
                            <AuthenticatedRoute path="/todos" exact component={TodoComponent} />
                            <AuthenticatedRoute path="/edit" exact component={EditComponent} />
                           
                        </Switch>
                        
                    </>
                </Router>
                {/*<LoginComponent/>
                <WelcomeComponent/>*/}
            </div>
            
            )



    }



}
export default Routing;