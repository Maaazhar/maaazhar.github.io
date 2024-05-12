import { About } from "../../components/About/About"
import Contact from "../../components/Contact/Contact"
import Experience from "../../components/Experience/Experience"
import Footer from "../../components/Footer/Footer"
import { Hero } from "../../components/Hero/Hero"
import { NavBar } from "../../components/Nav/NavBar"
import { Skills } from "../../components/Skill/Skills"

import "./HomePage.css"

export const HomePage = () => {
  return (
    <>
        <NavBar/>
        <Hero/>
        <About/>
        <Skills/>
        <Experience/>

        <Contact/>
        <Footer/>
    </>
  )
}

export default HomePage
