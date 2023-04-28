import React from 'react'
import IndexLayout from '../layouts'
import BtnCheckout from './BtnCheckout'
import Footer from '../layouts/Footer'

const CheckoutPage = () => {
  const currency = "USD"
  const content = (
    <div>
      
    </div>
  )
  return (
    <>
    <IndexLayout render={content} />
    <BtnCheckout
        currency={currency}
        showSpinner={false} />
      <Footer />
    </>
  )
}

export default CheckoutPage