import logo from './logo.svg';
import './App.css';
import News from './components/News';
import { NewsContext } from './NewsContext';
import { useState } from 'react';
import Navbar from './components/Navbar';

function App() {

  const [fliterData, setFilterData] = useState([])
  const [text, setText] = useState("")
  const [data, setData] = useState([])

  return (
    <div className="App">
      <NewsContext.Provider value={{ text, setText, fliterData,  setFilterData, data, setData}}>
        <Navbar />
        <News />
      </NewsContext.Provider>
    </div>
  );
}

export default App;
