import React from 'react';
import Comment from './Comment'
import FirstStore from '../stores/FirstStore'
import * as FirstAction from '../actions/FirstActions'

export default class FluxStart extends React.Component{
  constructor(){
    super()
    this.state = {
      comments: FirstStore.getAll()
    }
  }

  componentWillMount(){
    FirstStore.on('change', () =>{
      alert("onchange")
      this.setState({
        comments: FirstStore.getAll()
      })
    })
  }

  createComment(){
    FirstAction.createComment(Date.now())
  }

  render(){
    let { comments } = this.state
    let commentComponent = comments.map((comment) => {
          return <Comment key={comment.id} {...comment}/>
        })

    return(
      <div>
        <button onClick={this.createComment.bind(this)}>create</button>
        {commentComponent}
      </div>
    )
  }
}
