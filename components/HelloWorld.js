import React from 'react'
export default class HelloWorld extends React.Component {

  getInput(event){
    var title = event.target.value
    this.props.changeTitle(title)
  }
  render() {
    return (
      <div className='hello-world'>
        <input type='text' onChange = {this.getInput.bind(this)}/>
      </div>
    )
  }
}

