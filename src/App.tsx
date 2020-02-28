import React from 'react';
import Main from './pages/Main'
import './App.css';

function App() {
  return (
    <div>
      <svg className="left-lines" preserveAspectRatio="none" height="150vh" width="15vw" viewBox="0 0 200 720" xmlns="http://www.w3.org/2000/svg" version="1.1">
        <path className="path" fill="white" stroke="black" strokeWidth="5" d="M 55 18 C 55 18 52 520 52 520 S 106 675 106 675 S 28 601 28 601 S 104 574 104 574 S 104 157 104 157 S 20 89 20 89 S 104 89 104 89 S 53 14 53 14" />
      </svg>
      <svg className="right-lines" preserveAspectRatio="none" height="150vh" width="15vw" viewBox="0 0 200 720" xmlns="http://www.w3.org/2000/svg" version="1.1">
        <path className="path" fill="white" stroke="black" strokeWidth="5" d="M 55 18 C 55 18 52 520 52 520 S 106 675 106 675 S 28 601 28 601 S 104 574 104 574 S 104 157 104 157 S 20 89 20 89 S 104 89 104 89 S 53 14 53 14" />
      </svg>
      <Main />
    </div >
  )
}

export default App;

