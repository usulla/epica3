import React, { Component } from 'react';
import { Input } from 'reactstrap';
import Select from 'react-select';

class SelectBox1 extends React.Component {
 constructor(props) {
        super(props);

        this.state = {
    
        }
 }
 state = { 
    	email: ''
 };	
/*  handleFNameChange(event){
    this.setState({email: event.target.value});
    window.arrForm = {};
    window.arrForm[event.target.name] = event.target.value;
} */
  changeAvatar = (event) => {
    this.props.changeAvatar(event.target.name, event.target.value);
};

  onChange = (e) => {
    this.setState({
      value: e.target.value
    });
    this.props.changeAvatar(e.target.name, e.target.value);
  }

  render() {
    return (
       <div className="select">
        <Input
            type="select"
            name={this.props.name}
            required
            defaultValue=''
            value={this.state.email}
            onChange={this.onChange.bind(this)}
            className="form-control"
          >
         <option value='' disabled>{this.props.disabled_option}</option>
          {this.props.options.map((item, index) => 
        <option key={index} value={index}>{item}</option>
           )
          }
        </Input>
        </div>
    )
  }
}

export default SelectBox1;