import './App.css';
import 'react-bootstrap/dist/react-bootstrap.min.js';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navigation from './components/common/Navigation';
import Home from './components/pages/Home';
import Generators from './components/generators/Generators';
import GeneratorComponent from './components/generators/Generator';

import { generatorList } from './data/generatorList';
import { ThemeContext } from './components/common/ThemeContext';
import ThemeToggle from './components/common/ThemeToggle';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const storedTheme = localStorage.getItem('theme');
    return storedTheme !== null ? JSON.parse(storedTheme) : true;
  });
  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      <Router>
        <div className={`App ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
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
    </ThemeContext.Provider>
  );
}

export default App;
