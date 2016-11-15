import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import {App} from './App'
import {Home} from './containers/Home'
import 'bootstrap/scss/bootstrap.scss'

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
    </Route>
  </Router>
  ), document.getElementById('app')
)
