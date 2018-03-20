import React from 'react'
import {Link} from 'react-router'

export default class Layout extends React.Component {
  render() {
    let children = this.props.children;
    return (
      <div>
          <Link to="comments" activeClassName="active">comment</Link>
          <br></br>
          <Link to="List">List</Link>
          {children}
       </div>
    )
  }
}


