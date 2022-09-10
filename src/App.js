import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Detail from './components/Detail';

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
