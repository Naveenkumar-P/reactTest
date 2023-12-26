import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Footer } from './components/Header'; //namespace export component
import Header from "./components/Header"; //default export component
import Nav from './components/Nav';
import C1 from './components/C1';
import C2 from './components/C2';
import C4 from './components/C4';
import Header1 from './components/Header1';
import Footer1 from './components/Footer1';
import Nav1 from './components/Nav1';
import { HashRouter, Routes, Route } from "react-router-dom";
import { Blog, Contact, Home, Project } from './components/Main';
import F1 from './components/F1';

function App() {
  return (
    <div>
      <Header name="Ethnus"></Header>
      <Nav age="10" />
      <Footer brand="Facebook" />
      <hr />
      <h1>State and Props</h1>
      <C1 gift="Watch" />
      <C2 /><hr />
      <C4 />


      <HashRouter>
        <Header1 />
        <Nav1 />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/project" element={<Project />} />
        </Routes>
        <Footer1 />
      </HashRouter>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/>
      <F1/>
    </div>
  );
}

export default App;
