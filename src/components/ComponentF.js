import React from 'react';
import { UserConsumer } from './userContext';

const ComponentF = () => {
  return (
    <UserConsumer>
      {(username) => {
        return <h1>Hello {username}</h1>;
      }}
    </UserConsumer>
  );
};

export default ComponentF;
