import About from "../../components/About/About"
import Contact from "../../components/Contact/Contact"
import Education from "../../components/Education/Education"
import Experience from "../../components/Experience/Experience"
import Footer from "../../components/Footer/Footer"
import Hero from "../../components/Hero/Hero"
import NavBar from "../../components/Nav/NavBar"
import Project from "../../components/Project/Project"
import Skills from "../../components/Skill/Skills"
import Data from "../../assets/database/Database.json"

import "./HomePage.css"

export const HomePage = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <Skills data={Data.skills} />
      <Experience />
      <Project />
      <Education />
      <Contact />
      <Footer />
    </>
  )
};

export default HomePage;
