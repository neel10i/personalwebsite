import React, { useEffect } from 'react';
import Header from './components/Header/Header';
import './App.css';

function App() {
  useEffect(() => {
    document.title = "Neel Bhate";
  }, []);

  return (
    <div>
      <Header />
      <div className="main-content">
        <h1>Hello! I'm Neel</h1>
        <p>my website is currently under construction</p>
      </div>
    </div>
  );
}

export default App;


