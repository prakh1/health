import { Link, Route, Routes } from 'react-router-dom';
import Home from './home';

function App() {
  return (
    <>
      <nav className="bg-green-950 w-full h-16 justify-between flex items-center">
        <h1 className="text-yellow-300 text-3xl">HealthMed</h1>
        <Link to="/home" className="text-yellow-300 text-lg font-bold">Home</Link>
        <Link to="/about" className="text-yellow-300 text-lg font-bold">About</Link>
        <Link to="/faq" className="text-yellow-300 text-lg font-bold">FAQ</Link>
        <Link to="/contact" className="text-yellow-300 text-lg font-bold">Contact</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<div>About Page</div>} />
        <Route path="/faq" element={<div>FAQ Page</div>} />
        <Route path="/contact" element={<div>Contact Page</div>} />
      </Routes>
    </>
  );
}

export default App;
