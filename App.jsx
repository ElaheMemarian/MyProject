import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import './App.css';

function App () {
  const [input, setInput] = useState('');
  const [array, setArray] = useState([]);

  const inputVal = (event) => {
    setInput(event.target.value);
  }

  const addValue = () => {
    const newArray = [...array];
    input ? newArray.push(input): alert("write a name please.");
    setArray(newArray);
    setInput("");
  }

  const RandomValue = () => {
    const randomIndex = Math.floor(Math.random() * array.length);
    document.getElementById('randomName').innerHTML = array[randomIndex];
  }

  return (
    <div>
      <input type="text" value={input} onChange={inputVal} />
      <Button onClick={addValue} >Add</Button>{' '}
       <ul>
        {array.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <Button onClick={RandomValue} >Random Name</Button>{' '}
      <p id='randomName'></p>
    </div>
  );
}
  
export default App;
