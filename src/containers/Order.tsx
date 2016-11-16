import * as React from 'react'
import './Order.scss'

export class Order extends React.Component<void, void> {

  constructor(props: any) {
    super(props)

  }

  render() {
    return (
      <div className='container mt-3' id='order'>

        <p>Thank you for ordering with Save Your Butt.</p>
        <p>We promise to make this a great experience for you.</p>

        <h4 className='display-4 mt-3'>Select one</h4>
        <hr />

        <div className='row'>
          <div className='col-md-4 plan-option'>
            <h4>One pack of toilet paper</h4>
            <p className='plan-description'>Great for first-timers trying out our service.</p>
            <button className='btn btn-primary'>Learn more</button>
          </div>
          <div className='col-md-4 plan-option'>
            <h4>Bulk toilet paper</h4>
            <p className='plan-description'>Want to fully stock up on toilet paper for the next month? This is the perfect option for you.</p>
            <button className='btn btn-primary'>Learn more</button>
          </div>
          <div className='col-md-4 plan-option'>
            <h4>Executive suite</h4>
            <p className='plan-description'>Monthly bulk deliveries of toilet paper. Please contact us for more details.</p>
            <button className='btn btn-primary' disabled>Coming soon...</button>
          </div>
        </div>

        <h4 className='display-4 mt-3'>Where do you live?</h4>
        <hr />
        <p>Please note that we only deliver in Vancouver and Toronto.</p>
        <div className='row'>

          <div className='col-sm-6'>
            <div className='form-group'>
              <input className='form-control' placeholder='Street address' />
            </div>
            <div className='form-group'>
              <input className='form-control' placeholder='City' />
            </div>
            <div className='form-group'>
              <input className='form-control' defaultValue='Canada' disabled />
            </div>
            <div className='form-group'>
              <textarea className='form-control' rows={3} placeholder='Any special delivery instructions?' />
            </div>
          </div>

        </div>

        <h4 className='display-4 mt-3'>Confirm and checkout</h4>
        <hr />

        <div className='row'>

          <div className='col-sm-6'>

            <p>We process payments through Stripe, and all requests are secured over HTTPS. Don't worry, your credit card is safe with us.</p>

            <div className='form-group'>
              <input className='form-control' placeholder='Your credit card number' />
            </div>

            <div className='form-group'>
              <input className='form-control' placeholder='CVC' />
            </div>

            <div className='form-group'>
              <input className='form-control' placeholder='Expiry date' />
            </div>

            <button className='btn btn-primary w-100'>Pay</button>

          </div>

          <div className='col-sm-6'>
            <h4>Base price</h4>
            <p>$100.00</p>
            <h4>Tax (5%)</h4>
            <p>$5.00</p>
            <h4>Total</h4>
            <p>$105.00</p>
          </div>

        </div>

      </div>
    )
  }

}
