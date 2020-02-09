import React, { Component } from "react";
import HeaderComponent from './HeaderComponent';
import TodoComponent from './TodoComponent';
import axios from 'axios';


class EditComponent extends Component {

    constructor(props) {
        super(props);
        this.state = { name: this.props.name, id:this.props.id,course:this.props.course  };
        
        
    }
    handleChange(event) {

        this.setState(
            {
                [event.target.name]
                    : event.target.value
            }

        )
    }
    handleEdit(id) {
        let user = id;
        axios.put(`http://localhost:8080/id/?id=${user}`, {

            name: this.state.name,
            course: this.state.course
        })
            .then((response) => {
                this.setState({name:"",id:"",course:""})
            })
            .catch(
                () => { console.log("error") }
            );

    }

  

    render() {


        return (
            <div className="main">
                <label for="ID"><b>ID</b></label>
                <input type="text" name="id"  placeholder={this.state.id} readOnly />

                <label for="Name"><b>Name</b></label>
                <input type="text" name="name" placeholder={this.state.name} onChange={(event) => { this.handleChange(event) }} required/>

                <label for="Course"><b>Course</b></label>
                <input type="text" name="course" placeholder={this.state.course} onChange={(event) => { this.handleChange(event) }} required/>

                

                <button className="btn btn-success" onClick={() => { this.handleEdit(this.state.id) }}>Edit</button>
                
               
            </div>
            );

   }
}
export default EditComponent;