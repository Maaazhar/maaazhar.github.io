import "./Skills.css"
import SkillList from "./SkillList.jsx";
import { useState } from "react";

export const Skills = () => {
    const currentYear = new Date().getFullYear();
    const [skillCategory, setSkillCategory] = useState(0)
    const toggleCategory = (i) => setSkillCategory(i);

    return (
        <div>
            <section className="skills" id="skills">
                <div className="max-width">
                    <h2 className="title">My skills</h2>
                    <div className="skillsContent">
                        {SkillList.map((d, i) => {
                            return (
                                <>
                                    <div className="skillCategory" key={`${d.category}-${i}`}>
                                        <input
                                            type="radio"
                                            id={"skillAccordion-" + i}
                                            name="SkillAccordion"
                                            value={i}
                                            onClick={() => toggleCategory(i)}
                                            checked={skillCategory === i ? true : false} />
                                        <label
                                            className="skillCategoryTitle"
                                            htmlFor={"skillAccordion-" + i}>
                                            {d.category} <i className="fas fa-angle-down"> </i>
                                        </label>
                                        <div className="skillWrapper">
                                            <div className={"skill skill-"}>
                                                {d.list.map((s, i) => {
                                                    return (
                                                        <div className="skillItem" key={`${s.logo}-${i}`}>
                                                            <div className="skillImg"> {s.logo} </div>
                                                            <div className="skillName"> {s.title} </div>
                                                            <div className="skillAge">
                                                                {currentYear - s.startingYear}+ Years of
                                                                <br />Experience
                                                            </div>
                                                        </div>
                                                    )
                                                }
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                    {/* <div className="skillCategory" key={`${d.category}-${i}`}>
                                    <div className="skillCategoryTitle">{d.category}</div>
                                    <div className="skill">
                                        {d.list.map((s, i) => {
                                            return (
                                                <div className="skillItem" key={`${s.logo}-${i}`}>
                                                    <div className="skillImg">
                                                        {s.logo}
                                                    </div>
                                                    <div className="skillName">{s.title}</div>
                                                    <div className="skillAge">{currentYear - s.startingYear}+ Years of<br />Experience </div>
                                                </div>
                                            )
                                        }
                                        )}
                                    </div>
                                </div> */}
                                </>
                            )
                        }
                        )}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Skills

