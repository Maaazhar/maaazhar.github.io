
import "./Skills.css"
import Logo from "../../assets/images/skill-svg/html-5-logo.svg";

export const Skills = () => {
    const currentYear = new Date().getFullYear();

    const skills = [
        {
            "category": "Front-End",
            "skillList": [
                [Logo, "HTML", 2019],
                [Logo, "CSS", 2019],
                [Logo, "Bootstrap", 2019],
                [Logo, "Material UI", 2020],
                [Logo, "JavaScript", 2019],
                [Logo, "ES6", 2019],
                [Logo, "ReactJs", 2020],
                [Logo, "React-Hook", 2020],
                [Logo, "Redux", 2020],
                [Logo, "React-Router", 2020],
                [Logo, "NextJs", 2020],
                [Logo, "TypeScrip", 2020]
            ]
        },
        {
            "category": "Back-End",
            "skillList": [
                [Logo, "JavaScript", 2019],
                [Logo, "NodeJs (CRUD)", 2020],
                [Logo, "ExpressJs", 2020],
                [Logo, "MongoDB", 2020]
            ]
        },
        {
            "category": "Tools",
            "skillList": [
                [Logo, "VS code", 2019],
                [Logo, "Git", 2020],
                [Logo, "Chrome Dev tool", 2020],
                [Logo, "Code Blocks", 2017],
                [Logo, "Dev C++", 2017],
                [Logo, "Figma", 2020],
                [Logo, "PhotoShop", 2019]
            ]
        },
        {
            "category": "Platform",
            "skillList": [
                [Logo, "GitHub", 2020],
                [Logo, "Firebase", 2020],
                [Logo, "Netlify", 2020],
                [Logo, "Vercel", 2022]
            ]
        },
        {
            "category": "Programming Language",
            "skillList": [
                [Logo, "C", 2017],
                [Logo, "C++", 2018],
                [Logo, "JavaScript", 2019],
                [Logo, "Python", 2020]
            ]
        }
    ];


    return (
        <div>
            <section className="skills" id="skills">
                <div className="max-width">
                    <h2 className="title">My skills</h2>
                    <div className="skillsContent">
                        {skills.map((d, i) => {
                            return (
                                <div className="skillCategory" key={`${d.category}-${i}`}>
                                    <div className="skillCategoryTitle">{d.category}</div>
                                    <div className="skill">
                                        {d.skillList.map((s, i) => {
                                            return (
                                                <div className="skillItem" key={`${s[1]}-${i}`}>
                                                    <div className="skillImg">
                                                        <svg data-src={s[0]} width="30px" fill="#faebd7"></svg>
                                                    </div>
                                                    <div className="skillName">{s[1]}</div>
                                                    <div className="skillAge">{currentYear - s[2]}+ Years of<br />Experience </div>
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
