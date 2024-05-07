

import './NavBar.css'

export const NavBar = () => {
  return (
    <div className="nav">
      <nav className="navbar">
        <div className="max-width">
          <div className="logo"><a href="#"> MAZ <span> HAR. </span> </a> </div>
          <ul className="menu">
            <li><a href="#home" className="menu-btn">Home</a></li>
            <li><a href="#about" className="menu-btn">About</a></li>
            <li><a href="#skills" className="menu-btn">Skills</a></li>
            <li><a href="#skills" className="menu-btn">Experience</a></li>
            <li><a href="#services" className="menu-btn">Services</a></li>
            <li><a href="#project" className="menu-btn">Project</a></li>
            <li><a href="#contact" className="menu-btn">Contact</a></li>
          </ul>
          <div className="menu-btn">
            <i className="fas fa-bars"></i>
          </div>
        </div>
      </nav>
    </div>
  )
}
