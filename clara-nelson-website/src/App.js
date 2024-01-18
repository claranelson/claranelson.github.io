import './App.css';
import { Routes, Route } from "react-router-dom";
import AboutMe from "./routes/AboutMe";
import Education from "./routes/Education";
import Experience from "./routes/Experience";
import Home from "./routes/Home";
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <script src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js" crossorigin></script>
      <script
        src="https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js"
        crossorigin></script>
      <script
        src="https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js"
        crossorigin></script>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/education" element={<Education />} />
        <Route path="/experience" element={<Experience />} />
      </Routes>
    </>
  );
}

export default App;
