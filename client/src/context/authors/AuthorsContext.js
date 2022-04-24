import { createContext, useEffect, useState } from 'react';
import axios from 'axios';

//create context
const AuthorsContext = createContext({});
//create provider
export const AuthorsProvider = ({ children }) => {
  const [authors, setAuthors] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/v1/authors`)
      .then((response) => setAuthors(response.data));
  }, []);
  return (
    <AuthorsContext.Provider
      value={{
        authors: authors,
      }}
    >
      {children}
    </AuthorsContext.Provider>
  );
};

export default AuthorsContext;
