import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme}>
      {isDarkMode ? 'Switch to Day Mode' : 'Switch to Night Mode'}
    </button>
  );
};

export default ThemeToggle;
