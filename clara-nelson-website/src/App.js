import logo from './logo.svg';
import './App.css';
import { Routes, Route} from "react-router-dom";
import AboutMe from "./routes/AboutMe";
import Education from "./routes/Education";
import Home from "./routes/Home";
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/education" element={<Education />} />
      </Routes>
    </>
  );
}

export default App;
