import "./Skills.css"
import SkillList from "./SkillList.jsx";
import { useState, useRef } from "react";
import ActiveSectionIndicator from "../../utils/activeSectionIndicator.jsx";

export const Skills = () => {
    const currentYear = new Date().getFullYear();
    const [skillCategory, setSkillCategory] = useState(undefined)
    const tabWrapperRef = useRef(null);

    const handleTabClick = (i, id, e) => {
        if (e && typeof e.preventDefault === "function") e.preventDefault();
        setSkillCategory(i);
        const target = document.getElementById(id);
        if (target) {
            const tabsHeight = tabWrapperRef.current ? tabWrapperRef.current.getBoundingClientRect().height : 0;
            const top = target.getBoundingClientRect().top + window.scrollY - tabsHeight - 100;
            window.scrollTo({ top, behavior: "smooth" });
        }
    }

    const skills = SkillList.map(skill => skill.category.toLowerCase().replace(/ /g, "-"));
    ActiveSectionIndicator({sections: skills, top: 170, mount: skillCategory, setMount: setSkillCategory})
 
    return (
        <section className="skills" id="skills">
            <div className="max-width">
                <h2 className="title">My skills</h2>

                {/* <div className="skillsContent">
                    {SkillList.map((d, i) => (
                        <div className="skillCategory accordion" key={d.category + i }>
                            <input
                                type="radio"
                                id={"skillAccordion-" + i}
                                className="accordionInput"
                                name="SkillAccordion"
                                value={i}
                                onClick={() => toggleCategory(i)}
                                defaultChecked={skillCategory === i ? true : false} />
                            <label
                                className="skillCategoryTitle accordionButton"
                                htmlFor={"skillAccordion-" + i}>
                                {d.category} <i className="fas fa-angle-down"> </i>
                            </label>
                            <div className="skillWrapper accordionContent">
                                <div className="skill">
                                    {d.list.map((s, i) => (
                                        <div className="skillItem" key={s.logo + i} style={{ "--delay": i + 1 }}>
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
                            <div className="skillCategory" key={`${d.category}-${i}`}>
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
                                </div>
                        </div>
                    )
                    )}
                </div> */}

                <div className="skillsContent">
                    <div className="skillTabWrapper" ref={tabWrapperRef}>
                        <div className="skillTabs">
                            {
                                SkillList.map((d, i) => {
                                    const id = d.category.toLowerCase().replace(/ /g, "-");
                                    return (
                                        <a
                                            href={"#" + id}
                                            key={d + 1 + i}
                                            onClick={(e) => handleTabClick(i, id, e)}
                                            className={skillCategory === i ? "skillTab activeTab" : "skillTab"}>
                                            {d.category}
                                        </a>
                                    )
                                }
                                )
                            }
                        </div>
                    </div>
                    {SkillList.map((d, i) => (
                        <div
                            className="skillCategory"
                            key={d.category + i}
                            id={d.category.toLowerCase().replace(/ /g, "-")}>
                            <div className="skillCategoryTitle">{d.category}</div>
                            <div className="skillWrapper">
                                <div className="skill">
                                    {d.list.map((s, i) => {
                                        return (
                                            <div className="skillItem" key={`${s.logo}-${i}`}>
                                                <div className="skillImg">{s.logo}</div>
                                                <div className="skillName">{s.title}</div>
                                                <div className="skillAge">{currentYear - s.startingYear}+ Years of<br />Experience </div>
                                            </div>
                                        )
                                    }
                                    )}
                                </div>
                            </div>
                        </div>
                    )
                    )}
                </div>
            </div>
        </section>
    )
};

export default Skills;

