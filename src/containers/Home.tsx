import * as React from 'react'
import {Link} from 'react-router'
import './Home.scss'

export class Home extends React.Component<void, void> {

  render() {
    return (
      <div className='container' id='home'>

        <div className='hero'>
          <h4 className='display-3'>Save Your Butt</h4>
          <p>We will get you the toilet paper you need. Never worry about running out of toilet paper ever again.</p>
          <Link to='/order'><button className='btn btn-primary'>Order now</button></Link>
        </div>

        <div className='row mb-3'>
          <div className='col-md-6'>
            <div id='toilet-paper' />
          </div>
          <div className='col-md-6'>
            <h4 className='display-4'>We deliver toilet paper</h4>
            <hr />
            <p><strong>Have you ever</strong></p>
            <p>Carefully used every inch of your last toilet paper square?</p>
            <p>Wished you had more toilet paper?</p>
            <p>Hoped for someone to deliver you toilet paper in case you forget?</p>
          </div>
        </div>

        <div className='mt-3 mb-3'>
          <h4 className='display-4'>Currently serviced areas</h4>
          <hr />

          <div className='city text-white' id='vancouver'>
            <div className='dark' />
            <h4 className='display-4'>Vancouver</h4>
            <span>Downtown Vancouver</span>
            <span>UBC</span>
            <span>Richmond</span>
          </div>

          <br />

          <div className='city text-white' id='toronto'>
            <div className='dark' />
            <h4 className='display-4'>Toronto</h4>
          </div>

        </div>

        <div className='mt-3 mb-3'>
          <h4 className='display-4'>How it works</h4>
          <hr />

        </div>

        <div className='mt-3 mb-3'>
          <h4 className='display-4'>Yes, we are a real business</h4>
          <hr />
          <p>It may sound like a joke, but we take your butt seriously.</p>
          <Link to='/about'><button className='btn btn-outline-primary'>About us</button></Link>
        </div>

        <div className='mt-3 mb-3'>
          <h4 className='display-4'>Ready to place your order?</h4>
          <hr />
          <Link to='/order'><button className='btn btn-primary'>Order now</button></Link>
        </div>

      </div>
    )
  }

}
