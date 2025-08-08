import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './pages/About';
import Experience from './pages/Experience';
import Hire from './pages/Hire';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/hire" element={<Hire />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}