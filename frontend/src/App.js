import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Components/Home/HomePage';


import MainUtiles from './Utiles/mainUtiles';


const App = () => {
  return (
    <Router>
            <MainUtiles>

      <Routes>
        <Route path="/" element={<HomePage />} />
   
       
      </Routes>
      </MainUtiles>
    </Router>
  );
};

export default App;
