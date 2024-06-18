import './App.css';
import {
  
  Route,
  Routes
} from "react-router-dom";
import Navbar from './components/Navbar';
import { Home } from './components/Home';
import About from './components/About';
import NoteState from './context/notes/NoteState';

import Signup from './components/Signup';
import Login from './components/Login';

function App() {
  return (
    <>
    
      <NoteState>
       
          <Navbar />
  
          <div className="container">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/signup" element={<Signup />} />
              <Route exact path="/login" element={<Login />} />
            </Routes>
          </div>
       
      </NoteState>

    </>
  );
}

export default App;
