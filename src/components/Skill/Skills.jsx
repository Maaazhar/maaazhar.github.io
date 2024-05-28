import "./Skills.css"
import SkillList from "./SkillList.jsx";
import { useState } from "react";

export const Skills = () => {
    const currentYear = new Date().getFullYear();
    const [skillCategory, setSkillCategory] = useState(0)
    const toggleCategory = (i) => setSkillCategory(i);

    return (
        <section className="skills" id="skills">
            <div className="max-width">
                <h2 className="title">My skills</h2>
                <div className="skillsContent">
                    {SkillList.map((d, i) => (
                        <div className="skillCategory accordion" key={`${d.category}-${i}`}>
                            <input
                                type="radio"
                                id={"skillAccordion-" + i}
                                className="accordionInput"
                                name="SkillAccordion"
                                value={i}
                                onClick={() => toggleCategory(i)}
                                checked={skillCategory === i ? true : false} />
                            <label
                                className="skillCategoryTitle accordionButton"
                                htmlFor={"skillAccordion-" + i}>
                                {d.category} <i className="fas fa-angle-down"> </i>
                            </label>
                            <div className="skillWrapper accordionContent">
                                <div className="skill">
                                    {d.list.map((s, i) => (
                                        <div className="skillItem" key={`${s.logo}-${i}`}>
                                            <div className="skillImg"> {s.logo} </div>
                                            <div className="skillName"> {s.title} </div>
                                            <div className="skillAge">
                                                {currentYear - s.startingYear}+ Years of
                                                <br />Experience
                                            </div>
                                        </div>
                                    )
                                    )}
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
                        </div>
                    )
                    )}
                </div>
            </div>
        </section>
    )
};

export default Skills;

