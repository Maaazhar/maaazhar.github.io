import { useState } from 'react'
import './NavBar.css'

export const NavBar = () => {

  const [navBgColor, setNavBgColor] = useState(false);
  const [menuBtnClick, setMenuBtnClick] = useState(false);

  const changeColor = () => {
    if (window.scrollY >= 20) {
      setNavBgColor(true);
    }
    else {
      setNavBgColor(false);
    }
  }

  window.addEventListener('scroll', changeColor);

  const toggleMenuBtn = () => {
    setMenuBtnClick((open) => !open)
  }
  const closeMenuBtn = () => setMenuBtnClick(false)

  return (
    <div className="nav">
      <nav className={navBgColor ? "navbar sticky" : "navbar"}>
        <div className="max-width">
          <div className="logo"><a href="#"> MAZ <span> HAR. </span> </a> </div>
          <ul className={menuBtnClick ? "menu active" : "menu"}>
            <li><a href="#home" onClick={closeMenuBtn} className="menu-btn">Home</a></li>
            <li><a href="#about" onClick={closeMenuBtn} className="menu-btn">About</a></li>
            <li><a href="#skills" onClick={closeMenuBtn} className="menu-btn">Skills</a></li>
            <li><a href="#skills" onClick={closeMenuBtn} className="menu-btn">Experience</a></li>
            <li><a href="#project" onClick={closeMenuBtn} className="menu-btn">Project</a></li>
            <li><a href="#education" onClick={closeMenuBtn} className="menu-btn">Education</a></li>
            <li><a href="#contact" onClick={closeMenuBtn} className="menu-btn">Contact</a></li>
          </ul>
          <div className="menu-btn">
            <i onClick={toggleMenuBtn} className={menuBtnClick ? "fas fa-bars active" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </div>
  )
}
