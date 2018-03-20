import React from 'react'
import Comment from './Comment'

export default class Comments extends React.Component {
  render() {
      const Comments = [
        <Comment key={1} title = {'Title 1'}/>,
        <Comment key={2} title = {'Title 2'}/>,
        <Comment key={3} title = {'Title 3'}/>,
        <Comment key={4} title = {'Title 4'}/>,
        <Comment key={5} title = {'Title 5'}/>
      ];


    return(
        <div>{Comments}</div>
      )
  }
}


