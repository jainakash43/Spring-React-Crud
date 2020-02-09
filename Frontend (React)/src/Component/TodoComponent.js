import React, { Component } from "react";
import axios from "axios";
import HeaderComponent from "./HeaderComponent";
import "../App.css";
import EditComponent from "./EditComponent";
class TodoComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            todo: [], edit: false, temp: { "id": "", "name": "", "course": "" }
        }
    }
    componentDidMount() {

        axios.get(`http://localhost:8080/all`)
            .then((response) => {
                let arr = [];
                arr = response.data.map((item) => { return item });
                this.setState({ todo: arr })
            })
    }

    deleteMethod(id) {
        let user = id;
        console.log(user);
        axios.delete(`http://localhost:8080/id/?id=${user}`)
            .then((response) => {
                console.log(response);
            })
            .then((response) => {
                let arr = [];
                arr = this.state.todo.filter((item) => { return item.id != user });
                this.setState({ todo: arr });
            })
    }

    editMethod(id,name,course) {
            this.setState({ edit: !this.state.edit, temp: { "id": id, "name": name, "course": course } })
    }
   
  

    render() {

        let element = this.state.todo.map((item) => {

            return <li keys={item.id}>{item.name}</li>;

        });
          
        return (

            <div>
                <HeaderComponent />
                {!this.state.edit && <div className="Display" >

                    <table className="table" align="center"  >
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Course</th>
                                <th colSpan="2">Action</th>
                            </tr>
                        </thead>
                        <tbody>{

                            this.state.todo.map((item) => {
                                return (
                                    <tr key={item.id}  >
                                        <td>
                                            {item.id}
                                        </td>
                                        <td>
                                            {item.name}
                                        </td>
                                        <td>
                                            {item.course}
                                        </td>
                                        <td>
                                            <button onClick={() => { this.deleteMethod(item.id) }} >Delete</button>
                                        </td>
                                        <td>
                                            <button onClick={() => { this.editMethod(item.id,item.name,item.course) }}>Edit</button>
                                        </td>
                                    </tr>


                                );
                            })
                        }
                        </tbody>
                    </table>

                </div>
                }
                {this.state.edit && <EditComponent {...this.state.temp} />

                }


          </div>
        );
            
            
            


    }
}
export default  TodoComponent;