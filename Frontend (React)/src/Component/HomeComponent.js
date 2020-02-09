import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import HeaderComponent from './HeaderComponent';
import "../Styles/Home.css";
import axios from 'axios';
import  home  from "../Images/home.jpg"

class HomeComponent extends Component {


    constructor(props) {
        super(props);
        this.state = {
            Name: "",
            CourseName:""
        };
        
    }

    handleChange(event) {
       
        this.setState(
            {
                [event.target.name]
                    : event.target.value

            });
    }

    handleSave(event) {

        axios.post(`http://localhost:8080/save`,{
            name: this.state.Name,
            course: this.state.CourseName
        })
            .then((response) => {
                
                this.setState({ Name: "", CourseName: "" });
                
            })
            .catch(() => {
                console.log("error");
            })

    }





    
    render() {

        return (

            <div className="Main" >
                <HeaderComponent />
                
                  <div className="Home">
                   
                    {/* <label for="psw"><b>Name</b></label> */}
                    <input type="text" placeholder="Enter Name" name="Name" value={this.state.Name} onChange={(event) => { this.handleChange(event) }} required />

                    { /* // <label for="course"><b>Course</b></label> */}
                    <input type="text" placeholder="Enter Course Name" name="CourseName" value={this.state.CourseName} onChange={(event) => { this.handleChange(event) }} required />
                    <button className="btn btn-success" onClick={ (event) => { this.handleSave(event) } }>Save</button>
                    
                 
                 </div>      
    
         
             
        
            </div>
            
            );




    }
}
 export default HomeComponent;