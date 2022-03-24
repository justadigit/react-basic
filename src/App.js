import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/Navbar';
import { AuthProvider } from './context/AuthContext';
import { BlogProvider } from './context/BlogContext';
import About from './pages/about/About';
import Login from './pages/auth/Login';
import Create from './pages/createblog/Create';
import Home from './pages/home/Home';
import { ProtectedRoute } from './ProtectedRoute ';
function App() {
  return (
    <BlogProvider>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path="blogs-site-login" element={<Login />}></Route>
          <Route
            path="create"
            element={
              <ProtectedRoute>
                <Create />
              </ProtectedRoute>
            }
          />
          <Route path="about" element={<About />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </AuthProvider>
    </BlogProvider>
  );
}

export default App;
