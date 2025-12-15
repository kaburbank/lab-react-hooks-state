import React from 'react'

const DarkModeToggle = ({ onToggle, isDarkMode }) => {
  
  // TODO: Implement dark mode toggle logic
  return (
    <button onClick={onToggle}>
      Toggle {isDarkMode ? 'Light' : 'Dark'}
    </button>
  );
};

export default DarkModeToggle;