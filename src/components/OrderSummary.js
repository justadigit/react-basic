import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function OrderSummary() {
  let location = useLocation();
  let navigate = useNavigate();
  console.log(location);
  return (
    <div>
      <h1>Thank you, {location.state.name}!</h1>
      <h2>Your Order is confirmed!</h2>
      <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
}

export default OrderSummary;
