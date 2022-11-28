import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './Pages/Nav';
import Home from './Pages/Home';
import Details from './Pages/Details';

function App() {
  return (

    <div className="App">
      <div className="header">
        <NavBar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Details" element={<Details />} />
      </Routes>
    </div>

  );
}

export default App;
