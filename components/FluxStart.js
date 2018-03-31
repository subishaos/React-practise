import React from 'react';
import Comment from './Comment'
import FirstStore from '../stores/FirstStore'

export default class FluxStart extends React.Component{
  constructor(){
    super()
    this.state = {
      comments: FirstStore.getAll()
    }
  }
  render(){
    let { comments } = this.state
    return(
      comments.map((comment) => {
        return <Comment key={comment.id} {...comment}/>
      })

      )
  }
}
