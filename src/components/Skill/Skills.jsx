import "./Skills.css"
import SkillList  from "./SkillList.jsx";

export const Skills = () => {
    const currentYear = new Date().getFullYear();


    return (
        <div>
            <section className="skills" id="skills">
                <div className="max-width">
                    <h2 className="title">My skills</h2>
                    <div className="skillsContent">
                        {SkillList.map((d, i) => {
                            return (
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

