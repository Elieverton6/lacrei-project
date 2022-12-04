import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './Components/Pages/Home/Home';
import PersonUsuary from './Components/Pages/PersonUsuary/PersonUsuary';
import Professional from './Components/Pages/Professional/Professional';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/pessoa-usuaria" element={<PersonUsuary />} />
        <Route path="/profissional" element={<Professional />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
  
);