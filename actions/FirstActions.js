import dispatcher from '../dispatcher'

export function createComment(title) {
  dispatcher.dispatch(title );
}
