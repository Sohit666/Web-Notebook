
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/home';
import About from './components/About';
import Notestate from './context/note/notestate';

function App() {
  return (

    <Notestate>
      <Navbar />
      <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      </div>
    </Notestate>

  );
}

export default App;
