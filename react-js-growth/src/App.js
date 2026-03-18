import React, { useState, useContext, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Map from './pages/Map';
import ProtectedRoute from './Components/ProtectedRoute';
import './scss/css/style.min.css';
import { ThemeContext } from './Components/ThemeContext';
import TicTacToe from "./Components/TicTacToe";
import InvestmentCalculator from "./Components/InvestmentCalculator";
import LLMQuizGenerator from "./Components/LLMQuizGenerator";
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Login = lazy(() => import('./pages/Login'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const ItemList = lazy(() => import('./pages/Items/ItemList'));
const ItemForm = lazy(() => import('./pages/Items/ItemForm'));

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
                  <ProtectedRoute token={token}>
                    <Dashboard />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/items"
                element={
                  <ProtectedRoute token={token}>
                    <ItemList token={token} />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/items/new"
                element={
                  <ProtectedRoute token={token}>
                    <ItemForm token={token} />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/items/:id/edit"
                element={
                  <ProtectedRoute token={token}>
                    <ItemForm token={token} />
                  </ProtectedRoute>
                }
              />
              <Route path="/css-map" element={<Map />} />
              <Route path="/TicTacToe" element={<TicTacToe />} />
              <Route path="/investment" element={<InvestmentCalculator />} />
              <Route path="/quiz" element={<LLMQuizGenerator />} />
            </Routes>
          </Suspense>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
