import * as React from 'react'
import {NavigationBar} from './containers/NavigationBar'

export class App extends React.Component<void, void> {

  render() {
    return (
      <div>
      
        <NavigationBar />

        {this.props.children}

        <div style={{height: '20em'}} />

      </div>
    )
  }

}
