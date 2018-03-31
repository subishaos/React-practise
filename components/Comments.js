import React from 'react'
import Comment from './Comment'
import Form from './Form'

export default class Comments extends React.Component {

  constructor() {
    super()
    this.state =  {
      search: "",
      comments: ['Subi', 'Aishu', 'Julie', "Shibu", "Aru"]
    }
  }

  updateQuery(event){
    this.setState({search: event.target.value})

  }

  render() {
    const {comments} = this.state
    const {search} = this.state

    let filteredComments = comments.filter(
      (comment) => {
        //Use includes looks cleaner and should be easier to remember.
        // return comment.toLowerCase().indexOf(search.toLowerCase()) !== -1;
        return comment.toLowerCase().includes(search.toLowerCase());
      }
    );


    return(

        <div>
          <input type="text" value= {search} onChange={this.updateQuery.bind(this)}/>
          {search}
          {filteredComments.map(function(name, index){
            return <Comment key={ index } title={name}/>;
          })}
          <Form/>
        </div>
      )
  }
}


