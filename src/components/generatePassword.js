import React, { Component } from "react";
import '../gen-password.css'
import {CopyToClipboard} from 'react-copy-to-clipboard';


class GeneratedPassword extends Component{
    constructor(props){
        super(props)
        this.state = {password:''}
    }
    componentDidMount(){
        this.setState({password:this.props.genPassword})
    }
    render(){
        return(
            <div className="card">
                <div className="password">
                    <h3>{this.state.password}</h3>
                </div>
                <CopyToClipboard text={this.state.password}>
                    <button>copy</button>
                </CopyToClipboard>
            </div>
        )
    }
}

export default GeneratedPassword;