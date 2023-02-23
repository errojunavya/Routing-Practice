// Write your JS code here
import './index.css'
import {Link} from 'react-router-dom'

const Header = () => (
  <nav className="nav-header">
    <div className="img-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
        className="image"
      />
      <p className="name">Wave</p>
    </div>
    <ul className="nav-menu">
      <li className="link">
        <Link to="/" className="header-text">
          Home
        </Link>
      </li>
      <li className="link">
        <Link to="/about" className="header-text">
          About
        </Link>
      </li>
      <li className="link">
        <Link to="/contact" className="header-text">
          Contact
        </Link>
      </li>
    </ul>
  </nav>
)

export default Header
