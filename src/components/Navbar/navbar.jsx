import './Navbar.css';
function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Akshaya Bhavan</div>
      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Menu</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#">Signin</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
