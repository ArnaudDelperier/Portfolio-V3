import { Routes, Route } from "react-router-dom";
import './app.scss';
import Home from './components/home/Home'
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Projects from './components/projects/Projects';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </div>
  );
}

export default App;
