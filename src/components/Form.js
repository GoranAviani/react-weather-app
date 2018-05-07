import React, { Component } from "react";


class Form extends Component {
    render(){
        return(

            <form onSubmit ={this.props.getLocation}>
                <p>
                	<button>Get Weather</button>
                </p>
            </form>
            
        );
    }
}
export default Form;