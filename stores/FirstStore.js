import { EventEmitter } from 'events';

 class FirstStore extends EventEmitter {
  constructor(){
    super()
    this.comments =[
        {id: 1,
        title: 'flux comment1'
        },
        {id:2,
        title: 'flux comment2'}
      ]
  }

  getAll(){
    return this.comments
    console.log(this.comments)
  }

  createComment(title){
    let id = Date.now()
    this.comments.push({
        id,
        title
    })
    this.emit("change")
  }
}

const firstStore = new FirstStore;
window.firstStore = firstStore
export default firstStore
