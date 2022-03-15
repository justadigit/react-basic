import React from 'react';

const Person = ({ person }) => {
  return (
    <h2>
      I am {person.name} and {person.age} years old
    </h2>
  );
};
export default Person;
