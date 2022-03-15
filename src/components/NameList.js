import Person from './Person';

function NameList() {
  const persons = [
    {
      id: '1',
      name: 'John',
      age: 19,
    },
    {
      id: '2',
      name: 'Khen',
      age: 21,
    },
  ];
  return (
    <div>
      {persons.map((person, index) => (
        <Person key={index} person={person} />
      ))}
    </div>
  );
}

export default NameList;
