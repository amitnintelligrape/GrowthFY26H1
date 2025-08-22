import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Map from './pages/Map';
import './scss/css/style.min.css';
function App() {
  const [token, setToken] = useState(localStorage.getItem('Token') || null);
  
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
      <Header isLoggedIn={token} onLogout={handleLogout}/>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/css-map" element={<Map />} />
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
        </Routes>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;
