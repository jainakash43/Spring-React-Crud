import React, { Component } from "react";

class Insert extends Component {
    constructor(props) {
        super(props);
        this.state = { names: [] }
    }
    handleSubmit(event) {
        
        let temp = this.state.names;
            temp.push(event.target.name.value);
        this.setState({
            names: temp
        });
            event.preventDefault()
            
            
        

    }
    deleteMethod(id) {
        let name = this.state.names;
        console.log(id);
        name.splice(id, 1);

        this.setState({ names: name });

    }
     
    render() {
        return (
            <div>
                <form className="form" onSubmit={this.handleSubmit.bind(this)} >
                <h3>Details</h3>
                    <input type="text" placeholder="name" name="name" /><br />
             
                <input type="submit" value="enter" className="btn-btn-info" />
                </form>
                <Child names={this.state.names} deleteMethod={this.deleteMethod.bind(this)} />
             
                </div>


        );
    }
}


class Child extends Component {

    
    render() {

        return (
            <div className="Display" >
                <table className="table" align="center" >
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th colSpan="2">Action</th>
                        </tr>
                    </thead>
                    <tbody>{

                        this.props.names.map((name, index) => {
                            return (
                                <tr key={index}  >
                                    <td>
                                        {name}
                                    </td>
                                    <td>
                                        <button onClick={() => { this.props.deleteMethod(index) }} >Delete</button>
                                    </td>
                                    <td>
                                        <button >Edit</button>
                                        </td>
                                </tr>


                            );
                        })
                    }
                    </tbody>
                </table>

            </div>

        );











    }


}




export default Insert;