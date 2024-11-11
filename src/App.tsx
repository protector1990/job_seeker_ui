import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Hunt from './components/Hunt';
import JobHunt from './dto/hunt';

function App() {

  const [hunts, setHunts] = useState<JobHunt[]>([]);

  useEffect(() => {
    fetch('http://localhost:8080/hunts', {mode: 'cors'})
    .then(response => response.json())
    .then((data: JobHunt[]) => setHunts(data))
    .then()
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Hunt hunts={hunts}/>
      </header>
    </div>
  );
}

export default App;
