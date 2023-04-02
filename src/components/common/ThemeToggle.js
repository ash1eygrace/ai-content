import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme} className="theme-toggle">
      {isDarkMode ? (
        <i className="fas fa-sun"></i>
      ) : (
        <i className="fas fa-moon"></i>
      )}
    </button>
  );
};

export default ThemeToggle;
