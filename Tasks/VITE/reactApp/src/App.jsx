import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Posts from './Component/Posts';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/posts" element={<Posts />} />
      </Routes>
    </Router>
  );
};

export default App;
