import * as React from 'react'
import {Link} from 'react-router'

export class NavigationBar extends React.Component<void, void> {

  render() {
    return (
      <nav className='navbar navbar-light bg-faded'>
        <div className='container'>
          <Link className='navbar-brand' to='/'>
            Save Your Butt
          </Link>
        </div>
      </nav>
    )
  }

}
