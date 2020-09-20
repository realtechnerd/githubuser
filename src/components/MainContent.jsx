import React, { Component } from 'react';
import Input from "./Input.jsx";
import "./style.css";
import Card from "./Card.jsx";

class MainContent extends Component {
    constructor() {
        super();
        this.state = {
            input: "",
            data: "",
            site: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.getInfo = this.getInfo.bind(this);
    };
    componentDidMount() {
        fetch(`https://api.github.com/users/realtechnerd`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                this.setState({
                    data: data, site: data.blog
                })
            })
    }
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
                this.setState({
                    data: data, site: data.blog
                })
            })
            if (this.state.input === "") {
                fetch(`https://api.github.com/users/realtechnerd`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    this.setState({
                        data: data, site: data.blog
                    })
                })
            }
            e.preventDefault();
    }
    render() { 
        return ( 
            <div className="container">
                <div className="MainContent">
                <Input test={this.getInfo} value={this.state.input} onChange={this.handleChange}/>
                <br/>
                <Card 
                    name={this.state.data.login}
                    url={this.state.data.html_url}
                    img={this.state.data.avatar_url} 
                    followers={this.state.data.followers}
                    following={this.state.data.following}
                    site={this.state.site}
                    input={this.state.input}
                    bio={this.state.data.bio}
                    repositories={this.state.data.public_repos}
                />
                </div>
            </div>
         );
    };
};
 
export default MainContent;