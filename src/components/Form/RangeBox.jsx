import React, { Component } from 'react';
import InputRange from 'react-input-range';

class RangeBox extends React.Component {
state = { value:'', value1: 28, value2: 185, value3: 12};
  constructor(props) {
    super(props);
    this.state = { value:'', value1: 28, value2: 185, value3: 12};
  }
  changeAvatar = (name, value) => {
     this.props.changeAvatar(name, value);
}
  render() {
    return (
           <div className={`range-block ${this.props.classN}`}>
           <label for={this.props.id2}> {this.props.label} </label>
           <span class='number-range-outer'>
           <span class='number-range'></span>
           </span>
   <InputRange
        maxValue={this.props.max}
        name={this.props.id2}
        minValue={this.props.min}
        id={this.props.id2} 
        defaultValue={this.props.defaultvalue}
        className='range-form'
        value={this.state[this.props.valuedef]}
        onChange={value => this.setState({ [this.props.valuedef]: value })}
        onChangeComplete={this.changeAvatar(this.props.id2, this.state[this.props.valuedef])} />

             </div>
    )
  }
}

export default RangeBox;