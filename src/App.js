import React from 'react';
import Books from './components/Books';
const BOOKS = [
  {
    id: '1',
    title: 'React for beginner',
    price: 4.99,
  },
  {
    id: '2',
    title: 'React hooks for beginner',
    price: 6.99,
  },
];
export const LanguageContext = React.createContext();
export const FormatContext = React.createContext();
function App() {
  return (
    <div className="App">
      <LanguageContext.Provider value="Burmese">
        <FormatContext.Provider value="PDF">
          <Books list={BOOKS} />
        </FormatContext.Provider>
      </LanguageContext.Provider>
    </div>
  );
}

export default App;
