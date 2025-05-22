import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import LogoutConfirmado from './pages/LogoutConfirmado';

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/logout-confirmado" element={<LogoutConfirmado />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
