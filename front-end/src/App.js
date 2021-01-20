import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
  const [text, setText] = useState('');
  useEffect(() => {
    getText();
  }, []);

  const getText = async () => {
    const res = await axios.get('api/basic-text');
    console.log(res);
    setText(res.data);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Data:{text}</p>
      </header>
    </div>
  );
};

export default App;
