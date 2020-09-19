import React, { Component } from 'react';
import Input from "./Input.jsx";
import "./style.css";
import Card from "./Card.jsx";

class MainContent extends Component {
    constructor() {
        super();
        this.state = {
            input: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.getInfo = this.getInfo.bind(this);
    };
    handleChange(e) {
        const {name, value} = e.target;

        this.setState({
            [name]: value
        });
    };
    getInfo(e) {
        fetch(`https://api.github.com/users/${this.state.input}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
            .catch(
                alert("Uh-Oh.")
            );

            e.preventDefault();
    }
    render() { 
        return ( 
            <div className="container">
                <div className="MainContent">
                <Input test={this.getInfo} value={this.state.input} onChange={this.handleChange}/>
                        <br/>
                        <Card/>
                </div>
            </div>
         );
    };
};
 
export default MainContent;