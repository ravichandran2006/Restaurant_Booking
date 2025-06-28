import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/navbar';
import Home from './pages/Home/home';
import About from './components/About/about';
import Menu from './components/Menu/menu';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </Router>
  );
}

export default App;
