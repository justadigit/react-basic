import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  let navigate = useNavigate();
  const orderHandler = () => {
    return navigate('/order-summary', { state: { name: 'John Smith' } });
  };
  return (
    <>
      <h1>Home Page</h1>
      <button onClick={orderHandler}>Order</button>
    </>
  );
}

export default Home;
