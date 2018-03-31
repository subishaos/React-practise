import React from 'react'
export default class Form extends React.Component {

  constructor(){
    super()
    this.state = {
      name: '',
      email: '',
      password: '',
      select_tag: ''
    }
  }


  updateState(event){
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit(event){
    event.preventDefault()
    console.log('submitted')
    console.log(this.state)
  }

  render(){
    return (
      <div>
        <h3>Create Comment</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <label>
            Name:
            <input name="name" value={this.state.name} onChange={this.updateState.bind(this)}/>
          </label>
          <br/>
          <label>
            Email:
            <input name="email" value={this.state.email} onChange={this.updateState.bind(this)}/>
          </label>
          <br/>
          <select name= 'select_tag' onChange={this.updateState.bind(this)}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option selected value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
