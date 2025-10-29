import { useState } from 'react'
import './NavBar.css'
import {ActiveSectionIndicator} from "../../utils/sideEffect.jsx";

export const NavBar = () => {
  const [navState, setNavState] = useState(0)
  const [navBgColor, setNavBgColor] = useState(false);
  const [menuBtnClick, setMenuBtnClick] = useState(false);

  const toggleNav = (i) => {
    setNavState(i);
    setMenuBtnClick(false);
  };

  const changeColor = () => window.scrollY >= 20 ? setNavBgColor(true) : setNavBgColor(false);
  window.addEventListener("scroll", changeColor);

  const toggleMenuBtn = () => setMenuBtnClick((open) => !open)

  const menu = ["home", "about", "skills", "experience", "project", "education", "contact",]
  ActiveSectionIndicator({sections: menu, top: 120, mount: navState, setMount: setNavState})

  return (
    <nav className={navBgColor ? "navbar sticky" : "navbar"}>
      <div className="max-width">
        <div className="logo"><a href="#"> MAZ<span>HAR. </span> </a> </div>
        <ul className={menuBtnClick ? "menu active" : "menu"}>
          {menu.map((m, i) => (
            <li key={m + i}>
              <a href={"#" + m} onClick={() => toggleNav(i)} className={navState === i ? "activeNav" : " "}>{m}</a>
            </li>
          ))}
          {/* <li><a href="#home" onClick={closeMenuBtn} className="menu-btn">Home</a></li>
          <li><a href="#about" onClick={closeMenuBtn} className="menu-btn">About</a></li>
          <li><a href="#skills" onClick={closeMenuBtn} className="menu-btn">Skills</a></li>
          <li><a href="#experience" onClick={closeMenuBtn} className="menu-btn">Experience</a></li>
          <li><a href="#project" onClick={closeMenuBtn} className="menu-btn">Project</a></li>
          <li><a href="#education" onClick={closeMenuBtn} className="menu-btn">Education</a></li>
          <li><a href="#contact" onClick={closeMenuBtn} className="menu-btn">Contact</a></li> */}
        </ul>
        <div className="menu-btn">
          <i
            onClick={toggleMenuBtn}
            className={menuBtnClick ? "fas fa-bars active" : "fas fa-bars"}>
          </i>
        </div>
      </div>
    </nav>
  )
};

export default NavBar;
