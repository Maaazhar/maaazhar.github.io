import { About } from "../../components/About/About"
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
    </>
  )
}
