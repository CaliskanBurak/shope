import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51I9cdTLhbQd7L2hOgKl1LxQpmNJWzMNIDmGOKsvzLF0sJpk8nMa1X6aPbzEoZ4tcLNNlBqUTtb0GT99kjjToVZ4R00bdZZm8KA'

    const onToken = token => {
        console.log(token);
        alert('payment successful')
    }

    return (
        <StripeCheckout 
            label='Pay Now'
            name='Shope'
            billingAddress
            shippingAddress
            image='https://sendeyo.com/up/d/f3eb2117da'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;