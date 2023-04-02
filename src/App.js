import './App.css';
import 'react-bootstrap/dist/react-bootstrap.min.js';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navigation from './components/common/Navigation';
import Home from './components/pages/Home';
import Generators from './components/generators/Generators';
import GeneratorComponent from './components/generators/Generator';

import { generatorList } from './data/generatorList';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/generators" element={<Generators />} />
          {generatorList.map((generator) => (
            <Route
              key={generator.id}
              path={`/${generator.link}`}
              element={<GeneratorComponent generatorData={generator} />}
            />
          ))}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
