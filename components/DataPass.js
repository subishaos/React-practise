import React from 'react'
import HelloWorld from './HelloWorld'
// import Checkbox from './Checkbox'
// import DataPassing from './DataPass'
export default class DataPass extends React.Component {

  constructor(){
    super()
    this.state = {title: 'Default title'}
  }

  changeTitle(title){
    this.setState({title: title})
  }

  render() {
    return (
      <div className='App'>
        <h1>{this.state.title}</h1>
        <HelloWorld changeTitle = {this.changeTitle.bind(this)} />
       </div>
    )
  }
}


