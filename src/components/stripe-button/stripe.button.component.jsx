import React from "react";
import StripeCheckout from "react-stripe-checkout";

import Logo from "../../assets/crown.svg";

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_vUBkOTrzXl8e7V24cSibotpV00YgMpeUAt";

  const onToken = token => alert("Payment Successful");

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Wear Ltd."
      billingAddress
      shippingAddress
      image={Logo}
      description={`Your total is ${price}€`}
      currency="EUR"
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeButton;
