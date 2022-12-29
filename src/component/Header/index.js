import { BiMenu } from "react-icons/bi";
import { FaUserCircle } from "react-icons/fa";

import "./index.css";

const Header = () => (
  <nav className="nav-container">
    <div className="menu-container">
      <BiMenu className="menu-icon" />
      <h1 className="websiteName">IndigoLearn</h1>
    </div>
    <ul className="navLinks-container">
      <li className="navLink">BUY COURSES</li>
      <li className="navLink">BUY BOOKS</li>
      <li className="navLink">PROGRAMS</li>
      <li className="navLink"> FREE RESOURCES</li>
    </ul>
    <div className="button-container">
      <FaUserCircle className="userIcon" />
      <button className="loginButton">Log In/Sign Up</button>
    </div>
  </nav>
);

export default Header;
