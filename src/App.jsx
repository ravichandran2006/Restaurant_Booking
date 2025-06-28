import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar/navbar';
import Home from './pages/Home/home';
import About from './components/About/about';
import Menu from './components/Menu/menu';
import Login from './components/Login/login';
import Signup from './components/Login/signup';

function AppContent() {
  const location = useLocation();
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    // Hide navbar on login and signup pages
    const noNavbarRoutes = ['/login', '/signup'];
    setShowNavbar(!noNavbarRoutes.includes(location.pathname));
  }, [location]);

  return (
    <>
      {showNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
