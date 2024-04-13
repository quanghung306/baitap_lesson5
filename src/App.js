import logo from './logo.svg';
import './App.css';
import HelloWord from './componeds/HelloWord';
import React, { useState } from 'react';



function App() {
  const [arrayData, setArrayData] = useState([])
  const [inputValue, seTInputValue] = useState('')
  const handleInputChange = (e) => {
    seTInputValue(e.target.value);
  };
  return (
    <div className='App'>
      <div>
        <input 
        type="text"
        placeholder="Enter your name"
        value={inputValue}
        onChange={handleInputChange}
        />
      </div>
      
    
    </div>
    
  );
}

export default App;
