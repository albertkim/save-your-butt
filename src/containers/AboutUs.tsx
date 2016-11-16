import * as React from 'react'

export class AboutUs extends React.Component<void, void> {

  render() {
    return (
      <div className='container'>

        <div className='mt-3 mb-3'>
          <h3 className='display-3 text-xs-center'>We are here for you</h3>
          <hr />
          <p className='text-xs-center mt-2 mb-2'>We are a team of enthusiasts who believe in top notch toilet paper experience.</p>
          <div className='row'>
            <div className='col-md-4 offset-md-2'>
              <h5 className='display-5'>Albert <small className='text-muted'>Butt Enthusiast</small></h5>
              <p>Going by the online tag 'buttminer', Albert has been wiping his butt since pre-school. Albert truly believes that everybody's bathroom experiences should be top-notch and will not accept any compromises in that aspect of life.</p>
            </div>
            <div className='col-md-4'>
              <h5 className='display-5'>Calvin <small className='text-muted'>Butt Experience Expert</small></h5>
              <p>A hustler who will stop at nothing short of the best for his own butt. Calvin wants to bring his experiences to others.</p>
            </div>
          </div>
        </div>

      </div>
    )
  }

}
