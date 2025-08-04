import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Login, Signup } from './pages';
import Dashboard from './components/Dashboard';
import Menu from './components/Menu';
import TopBar from './components/TopBar';
import ProtectedRoute from './components/ProtectedRoute';
import { ThemeContextProvider } from './ThemeContext';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <ThemeContextProvider>
          <Routes>
            {/* Public Routes */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            
            {/* Protected Dashboard Routes */}
            <Route path="/dashboard" element={
              <ProtectedRoute>
                <Menu />
                <TopBar />
                <Dashboard />
              </ProtectedRoute>
            } />
            
            <Route path="/dashboard/*" element={
              <ProtectedRoute>
                <Menu />
                <TopBar />
                <Dashboard />
              </ProtectedRoute>
            } />
            
            {/* Default redirect */}
            <Route path="/" element={<Navigate to="/login" replace />} />
          </Routes>
          <ToastContainer />
        </ThemeContextProvider>
      </Router>
    </div>
  );
}

export default App;
