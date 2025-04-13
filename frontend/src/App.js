import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Components/Home/HomePage';
import MainUtiles from './Utiles/mainUtiles';
import AboutPage from './Components/About/AboutPage';
import AboutConference from './Components/Conference/AboutConference';
import Speakers from './Components/Conference/Speakers';

const App = () => {
  return (
    <Router>
      <MainUtiles>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/aboutus" element={<AboutPage />} />
          <Route path="/conference" element={<AboutConference />} />
          <Route path="/speakers" element={<Speakers />} />

        </Routes>
      </MainUtiles>
    </Router>
  );
};

export default App;

