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
  }
}

const firstStore = new FirstStore;
export default firstStore
