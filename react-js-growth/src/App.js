import React, { useState, useContext, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Map from './pages/Map';
import './scss/css/style.min.css';
import { ThemeContext } from './Components/ThemeContext';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Login = lazy(() => import('./pages/Login'));
const Dashboard = lazy(() => import('./pages/Dashboard'));

function App() {
  const [token, setToken] = useState(localStorage.getItem('Token') || null);
  const {theme, toggleTheme} = useContext(ThemeContext);
  const handleLoginSuccess = (newToken) => {
    //console.log(newToken);
    localStorage.setItem('Token', newToken);
    setToken(newToken);
  };

  const handleLogout = () => {
    localStorage.removeItem('Token');
    setToken(null);
  };
  return (
    <Router>
      <div className="App" style={{
            background: theme === 'light' ? '#fff' : '#333',
            color: theme === 'light' ? '#000' : '#fff',
            textAlign: 'center',
          }}>
          <button onClick={toggleTheme}>Toggle Theme</button>
          <Header isLoggedIn={token} onLogout={handleLogout}/>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route
                path="/login"
                element={
                  token ? <Navigate to="/dashboard" /> : 
                  <Login loginSuccess={handleLoginSuccess} />
                }
              />
              <Route
                path="/dashboard"
                element={
                  token ? <Dashboard /> : 
                  <Navigate to="/login" />
                }
              />
              <Route path="/css-map" element={<Map />} />
            </Routes>
          </Suspense>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
