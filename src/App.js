import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import About from './components/About';
import Home from './components/Home';
import { useState } from 'react';
import Protected from './components/Protected';
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const logIn = () => {
    setIsLoggedIn(true);
  };
  const logOut = () => {
    setIsLoggedIn(false);
  };
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/profile"
          element={
            <Protected isLoggedIn={isLoggedIn}>
              <Profile />
            </Protected>
          }
        />
        <Route path="/about" element={<About />} />
      </Routes>
      {isLoggedIn ? (
        <button onClick={logOut}>Logout</button>
      ) : (
        <button onClick={logIn}>Login</button>
      )}
    </BrowserRouter>
  );
}
export default App;
