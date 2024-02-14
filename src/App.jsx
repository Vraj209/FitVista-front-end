import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Fetch data from backend API when component mounts
    fetch('http://localhost:3000/', {
      method: 'GET'
     
    })
    .then(response => response.text())
    .then(data => setMessage(data))
    .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="App">
      <h1 className="text-3xl font-bold">FitVista Fitness</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;
