import React from 'react'

import {
  PayPalScriptProvider,
  PayPalButtons,
  usePayPalScriptReducer
} from '@paypal/react-paypal-js';
import { useState, useEffect } from 'react';

const amount = "2";
const currency = "USD";
const style = {
  color: 'gold',
  shape: 'pill',
  label: 'paypal',
  height: 40,
};

const BtnCheckout = ({ currency, showSpinner }) => {

  const [{ options, isPending }, dispatch] = usePayPalScriptReducer();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch({
      type: "resetOptions",
      value: {
        ...options,
        currency: currency,
      },
    });
    setIsLoaded(true);
  }, [currency, showSpinner]);

  return (
    <>
      {isLoaded && (
        <PayPalButtons
          style={style}
          disabled={false}
          forceReRender={[amount, currency, style]}
          fundingSource={undefined}
          createOrder={(data, actions) => {
            return actions.order
              .create({
                purchase_units: [
                  {
                    amount: {
                      currency_code: currency,
                      value: amount,
                    },
                  },
                ],
              })
              .then((orderId) => {
                // Your code here after create the order
                return orderId;
              });
          }}
          onApprove={function (data, actions) {
            return actions.order.capture().then(function () {
              // Your code here after capture the order
            });
          }} />
      )}
      {(showSpinner && isPending) && <div className="spinner" />}
    </>
  )
}
export default BtnCheckout