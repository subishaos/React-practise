import React from 'react'
export default class Checkbox extends React.Component {

  constructor() {
    super()
    this.state =  {checked: true}
    // this.handleCheck = this.handleCheck.bind(this)
  }

  handleCheck(event){
    this.setState({checked: event.target.checked});
  }

  render() {
    var msg;
    if(this.state.checked){
      msg = 'checked'
    }else{
      msg = 'Unchecked'
    }
    return (
      <div>
        <input type='checkbox' onChange={this.handleCheck.bind(this)}  defaultChecked= '{this.state.checked}'/>
        <p>NOw checkbox is {msg}</p>
      </div>
    )
  }
}
