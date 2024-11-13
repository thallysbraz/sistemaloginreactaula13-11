import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';
import { useAuth } from './hooks/useAuth';

function App() {
  const { isAuthenticated } = useAuth();

  const checkAuth = () => {
    const token = localStorage.getItem('authToken');
    return token ? isAuthenticated : false;
  };

  return (
    <Router>
      <Routes>

      </Routes>
    </Router>
  );
}

export default App;
