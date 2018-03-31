import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import App from './components/App'
import Layout from './components/Layout'
import Home from './components/Home'
import Comment from './components/Comment'
import Comments from './components/Comments'
import List from './components/List'
import FluxStart from './components/FluxStart'

// import comment from './components/Comment'
// Basic starts---------
// ReactDOM.render(<App />, document.getElementById('app'))
// Basic ends---------
//Route starts
ReactDOM.render(
  <Router history={hashHistory}>
          <Route path="/" component={Layout}>
            <IndexRoute component={Home} ></IndexRoute>
            <Route path="list" component={List} ></Route>
            <Route path="comments/:comment" component={Comment} ></Route>
            <Route path="comments" component={Comments} ></Route>
            <Route path="flux_ex" component={FluxStart} ></Route>
          </Route>
  </Router>, document.getElementById('app'))
