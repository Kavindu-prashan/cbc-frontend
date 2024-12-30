import "./homePage.css"
import {Link} from 'react-router-dom'

export default function HomePage() {
  return (
    <div className="homepage">
      <nav className="navbar">
        <div className="logo">MyWebsite</div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <header className="hero">
        <h1>Welcome to MyWebsite</h1>
        <p>Your one-stop solution for everything!</p>
        <button>Get Started</button>
        <Link to="/login">Login</Link>
      </header>
    </div>
  );
}
