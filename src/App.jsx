import { Routes, Route } from 'react-router-dom';
import Hire from './pages/Hire';
import Navbar from './components/Navbar';
import Projects from './pages/Projects';
import About from './pages/About';

export default function App() {
  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/hire" element={<Hire />} />
        </Routes>
      </div>
    </>
  );
}