import { Routes, Route } from 'react-router-dom';
import HireMe from './pages/HireMe';
import Home from './pages/Home';
import Navbar from './components/Navbar';

export default function App() {
  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hire-me" element={<HireMe />} />
        </Routes>
      </div>
    </>
  );
}