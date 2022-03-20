import React, { useState, useEffect } from 'react';
import axios from 'axios';
function DataFetching() {
  const [user, setUser] = useState({});
  const [id, setId] = useState(1);
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => {
        console.log(response.data);
        setUser(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);
  return (
    <div>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      {/* <ul>
        {users.map((user) => {
          return <li key={user.id}>{user.name}</li>;
        })}
      </ul> */}
      <div>
        <h2>{user.name}</h2>
        <h3>{user.email}</h3>
      </div>
    </div>
  );
}

export default DataFetching;
