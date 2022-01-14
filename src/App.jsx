import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import './app.scss';

import Topbar from './components/topbar/Topbar';
import Menu from './components/menu/Menu';
import Home from './components/home/Home';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Projects from './components/projects/Projects';

function App() {

  const [menuOpen, setMenuOpen] = useState(false)
  const backgroundItems = new Array(20).fill(0)
  console.log(backgroundItems)

  return (
    <div className="app">

    <ul className="background">
      {backgroundItems.map(() => <li></li>)}
    </ul>

      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

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
