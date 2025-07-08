import React from 'react';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';
import { useTheme } from '../../context/ThemeContext';

const { FiMoon, FiSun } = FiIcons;

const DarkModeToggle = ({ className = "" }) => {
  const { darkMode, toggleDarkMode } = useTheme();
  
  return (
    <button 
      onClick={toggleDarkMode}
      className={`p-2 rounded-lg transition-colors ${className} ${
        darkMode 
          ? 'text-yellow-400 hover:bg-gray-700' 
          : 'text-gray-600 hover:bg-gray-100'
      }`}
      aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      <SafeIcon icon={darkMode ? FiSun : FiMoon} className="w-5 h-5" />
    </button>
  );
};

export default DarkModeToggle;