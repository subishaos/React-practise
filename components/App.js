import React from 'react'
// import HelloWorld from './HelloWorld'
import Checkbox from './Checkbox'
import DataPass from './DataPass'
export default class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <h1>This is a beginning App</h1>
        <DataPass />
        <Checkbox />
       </div>
    )
  }
}


