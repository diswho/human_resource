import React from 'react';
import {
  Route,
  Routes,
  BrowserRouter as Router,
  NavLink,
} from 'react-router-dom';
import HomePage from './home/HomePage';
import SummaryPage from './summary/SummaryPage';

function App() {
  return (
    <Router>
      <header className="sticky">
        <span className="logo"></span>
        <NavLink to="/" className="button rounded">
          <span className="icon-home"></span>
          Home
        </NavLink>
        <NavLink to="/summary" className="button rounded">
          Summary Page
        </NavLink>
      </header>
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/summary" element={<SummaryPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
