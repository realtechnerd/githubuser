import React from 'react';
import "./style.css";

class Input extends React.Component {
    state = {  }
    render() { 
        return ( 
            <div className="Card">
            <h4 id="titl">User Lookup</h4>
            <form onSubmit={this.props.test}>
                <input 
                    type="text"
                    name="input"
                    value={this.props.value} 
                    id="input"
                    onChange={this.props.onChange}
                    placeholder="Enter a city.."
                    autoComplete="off"
                />
            </form>
        </div>
         );
    }
}
 
export default Input;