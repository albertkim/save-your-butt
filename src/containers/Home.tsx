import * as React from 'react'

export class Home extends React.Component<void, void> {

  render() {
    return (
      <div className='container'>

        <div className='jumbotron'>
          <h3 className='display-1'>Save Your Butt</h3>
        </div>

        <div className='row'>
          <div className='col-md-6'>
            <p>Image</p>
          </div>
          <div className='col-md-6'>
            <h3 className='display-3'>Have you ever</h3>
            <hr />
            <p>Carefully used every last inch of your last toilet paper square?</p>
            <p>Wished you had more toilet paper?</p>
            <p>Hoped for someone to deliver you toilet paper in case you forget?</p>
          </div>
        </div>

        <h3 className='display-3'>Currently serviced areas</h3>
        <hr />
        <h4 className='display-4'>Vancouver</h4>
        <h4 className='display-4'>Richmond</h4>
        <h4 className='display-4'>Toronto</h4>

        <h3 className='display-3'>Testimonials</h3>
        <hr />
        <div className='row'>
          <div className='col-md-4'>
            <h5 className='display-5'>Johnson Sun</h5>
            <p>I never remember to pick up toilet paper when I'm out grocery shopping, so Save Your Butt has been important in helping me keep my butt clean</p>
          </div>
          <div className='col-md-4'>
            <h5 className='display-5'>Johnson Sun</h5>
            <p>I never remember to pick up toilet paper when I'm out grocery shopping, so Save Your Butt has been important in helping me keep my butt clean</p>
          </div>
          <div className='col-md-4'>
            <h5 className='display-5'>Johnson Sun</h5>
            <p>I never remember to pick up toilet paper when I'm out grocery shopping, so Save Your Butt has been important in helping me keep my butt clean</p>
          </div>
        </div>

        <h3 className='display-3'>We are here for you</h3>
        <hr />
        <p>We are a team of enthusiasts who believe in top notch toilet paper experience.</p>
        <div className='row'>
          <div className='col-md-4 col-md-offset-2'>
            <h5 className='display-5'>Albert <small className='text-muted'>Butt Enthusiast</small></h5>
            <p>Going by the online tag 'buttminer', Albert has been wiping his butt since pre-school. Albert truly believes that everybody's bathroom experiences should be top-notch and will not accept any compromises in that aspect of life.</p>
          </div>
          <div className='col-md-4'>
            <h5 className='display-5'>Calvin <small className='text-muted'>Butt Experience Expert</small></h5>
            <p>A hustler who will stop at nothing short of the best for his own butt. Calvin wants to bring his experiences to others.</p>
          </div>
        </div>

      </div>
    )
  }

}
