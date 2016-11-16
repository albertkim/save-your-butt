import * as React from 'react'
import './Order.scss'

export class Order extends React.Component<void, void> {

  constructor(props: any) {
    super(props)

  }

  render() {
    return (
      <div className='container mt-3' id='order'>

        <h4 className='display-4 mt-3'>Select one</h4>
        <hr />

        <div className='card-deck-wrapper'>
          <div className='card-deck'>

            <div className='card'>
              <div className='card-block'>
                <h4>One pack</h4>
                <p className='card-text'>Great for first-timers trying out our service.</p>
                <span className='text-muted'>$10</span>
              </div>
              <div className='card-footer'>
                <button className='btn btn-primary mr-1'>Select</button>
                <button className='btn btn-outline-primary'>Learn more</button>
              </div>
            </div>

            <div className='card'>
              <div className='card-block'>
                <h4>Bulk toilet paper</h4>
                <p className='card-text'>Want to fully stock up on toilet paper for the next month? This is the perfect option for you.</p>
                <span className='text-muted'>$30</span>
              </div>
              <div className='card-footer'>
                <button className='btn btn-primary mr-1'>Select</button>
                <button className='btn btn-outline-primary'>Learn more</button>
              </div>
            </div>

            <div className='card'>
              <div className='card-block'>
                <h4>Executive suite</h4>
                <p className='card-text'>Monthly bulk deliveries of toilet paper. Please contact us for more details.</p>
              </div>
              <div className='card-footer'>
                <button className='btn btn-outline-primary' disabled>Coming soon...</button>
              </div>
            </div>

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
              <input className='form-control' placeholder='Postal code' />
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

        <h4 className='display-4 mt-3'>How can we contact you?</h4>
        <hr />
        <p>We will inform you on the status of your order, while trying to keep unnecessary contact to a minimum.</p>
        <div className='row'>

          <div className='col-sm-6'>
            <div className='form-group'>
              <input className='form-control' type='email' placeholder='Email (required)' />
            </div>
            <div className='form-group'>
              <input className='form-control' type='number' placeholder='Phone (required)' />
            </div>
            <div className='form-group'>
              <label className='custom-control custom-checkbox'>
                <input type='checkbox' className='custom-control-input' />
                <span className='custom-control-indicator' />
                <span className='custom-control-description'>Send me update SMS messages</span>
              </label>
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
