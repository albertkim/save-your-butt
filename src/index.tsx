import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import {App} from './App'
import {Home} from './containers/Home'
import {Order} from './containers/Order'
import './bootstrap/bootstrap.scss'
import './index.scss'

ReactDOM.render((
  <Router onUpdate={() => window.scrollTo(0, 0)} history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
      <Route path='order' component={Order} />
    </Route>
  </Router>
  ), document.getElementById('app')
)
