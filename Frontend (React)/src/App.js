import React, { Component } from 'react';
import Insert from './Insert';
import './App.css';


class App extends Component {

    /*state = {
        isdefault: true,
        data:null
    };
    students = [{ id: 1, name: "Akash" }, { id: 2, name: "Ashish" }];
    items = [];
    toggleState = () => {
        this.setState({ isdefault: !this.state.isdefault })
    };*/
    state = {
        info: []
    }

    componentDidMount() {
        fetch('http://localhost:8080/akash/all')
        .then((response) => response.json())
         .then((response) => {
                this.setState({ info: response })
          })
         .catch(console.log);

       
        

    }
    render() {
       
        
       
        return (
            
            <div>
                <Insert />
                </div>


            
               
                );
                
    }

}

export default App;
