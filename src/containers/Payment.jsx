import React, { useContext } from 'react';
import { PayPalButton } from 'react-paypal-button-v2';
import { useHistory } from 'react-router-dom';
import AppContext from '../context/AppContext';
import '../styles/components/Payment.css';

const Payment = () => {
  const history = useHistory();

  const {
    state: { cart },
    buyer,
    addNewOrder,
  } = useContext(AppContext);

  const paypalOptions = {
    clientId:
      'access_token$sandbox$b83nq3695fp9c5c4$5b1c0b2249ac2c3612af81cccb1be97d',
    intent: 'capture',
    currency: 'USD',
  };

  const buttonSyles = {
    layout: 'vertical',
    shape: 'rect',
  };

  const handlePaymentSuccess = (data) => {
    console.log(data);
    if (data.status === 'COMPLETED') {
      const newOrder = {
        buyer,
        product: cart,
        payment: data,
      };

      addNewOrder(newOrder);
      history.push('/checkout/success');
    }
  };

  const handleSumTotal = () => {
    const reducer = (accomulator, currentValue) =>
      accomulator + currentValue.price;
    const sum = cart.reduce(reducer, 0);
    return sum;
  };

  return (
    <div className="Payment">
      <div className="Payment-content">
        <h3>Resumen del pedido:</h3>
        {cart.map((item) => (
          <div className="Payment-item" key={item.title}>
            <div className="Payment-element">
              <h4>{item.title}</h4>
              <span>${item.price}</span>
            </div>
          </div>
        ))}
        <div className="Payment-button">
          <PayPalButton
            createOrder={(data, actions) => {
              return actions.order.create({
                purchase_units: [
                  {
                    amount: {
                      currency_code: 'USD',
                      value: handleSumTotal(),
                    },
                  },
                ],
              });
            }}
            paypalOptions={paypalOptions}
            buttonStyles={buttonSyles}
            amout={handleSumTotal()}
            onPaymentStart={() => console.log('Start payment')}
            onSuccess={(data) => handlePaymentSuccess(data)}
            onApprove={(data) => handlePaymentSuccess(data)}
            onPaymentError={(error) => console.log(error)}
            onPaymentCancel={(data) => console.log(data)}
          />
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Payment;
