import React from 'react'
import IndexLayout from '../layouts'
import BtnCheckout from './BtnCheckout'

const CheckoutPage = () => {
  const currency = "USD"
  const content = (
    <div>
      <BtnCheckout
        currency={currency}
        showSpinner={false} />
    </div>
  )
  return (
    <IndexLayout render={content} />
  )
}

export default CheckoutPage