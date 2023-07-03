import './App.css';
import Header from './components/header/Header.jsx';
import { Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import About from './components/about/About';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
    </div>
  );
}

export default App;
