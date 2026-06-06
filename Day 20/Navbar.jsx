import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <a href="#" className="logo">
        <div className="logo-icon">₹</div>
        <span className="logo-text">Rupee<span className="gold-text">Tracker</span></span>
      </a>

      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">Rates</a></li>
        <li><a href="#">Trends</a></li>
        <li><a href="#">Features</a></li>
      </ul>

      <ul className="auth-links">
        <li><a href="#" className="login-btn">Login</a></li>
        <li><a href="#" className="get-started-btn">Get Started Free</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;