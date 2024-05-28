import "./Project.css";
import imgOfRafada from "../../assets/images/project/rafada.png";
import portfolio from "../../assets/images/project/portfolio.jpg";
import GreenCrate from "../../assets/images/project/GreenCrate.jpg";
import { useState } from "react";

const Project = () => {
    const [projectCategory, setProjectCategory] = useState(0)
    const toggleCategory = (i) => setProjectCategory(i);
    const projectList = [
        {
            "category": "Client Project",
            "list": [
                {
                    "image": imgOfRafada,
                    "title": "Website of RAFADA Group",
                    "details": "This is a business website of RAFADA Group, consisting a total of 17 page, accommodating an individual single page for each of their 14 companies to promote them by sharing their business information.",
                    "technology": ["HTML", "CSS", "ReactJS", "Bootstrap", "Font Awesome", "Organic  SEO"],
                    "liveLink": ["https://www.rafadagroup.com/"],
                },
                {
                    "image": GreenCrate,
                    "title": "Website of Green Crate Shop",
                    "details": "Green Crate is an organic food provider in Dhaka, offering fresh and authentic product. The website features their products, services, and commitment to sustainable practices.",
                    "technology": ["HTML", "CSS", "ReactJS", "Vite", "Font Awesome", "Organic  SEO"],
                    "liveLink": ["http://greencratebd.com/", "https://greencrate.netlify.app/"],
                }
            ]
        },
        {
            "category": "Personal Project",
            "list": [
                {
                    "image": portfolio,
                    "title": "Portfolio of Mazharul Islam",
                    "details": "This is a portfolio website of Mazharul Islam showcases his professional expertise as a web developer based in the UAE, featuring his portfolio, technical skills, and professional experience.",
                    "technology": ["HTML", "CSS", "ReactJS", "Vite", "Font Awesome", "Organic  SEO"],
                    "liveLink": ["https://maaazhar.github.io/"],
                    "githubLink": "https://github.com/Maaazhar/maaazhar.github.io"
                },
                {
                    "image": portfolio,
                    "title": "Portfolio of Mazharul Islam",
                    "details": "This is a portfolio website of Mazharul Islam showcases his professional expertise as a web developer based in the UAE, featuring his portfolio, technical skills, and professional experience.",
                    "technology": ["HTML", "CSS", "ReactJS", "Vite", "Font Awesome", "Organic  SEO"],
                    "liveLink": ["https://maaazhar.github.io/"],
                    "githubLink": "https://github.com/Maaazhar/maaazhar.github.io"
                }
            ]
        }
    ]
    return (
        <div>
            <section className="project" id="project">
                <div className="max-width">
                    <h2 className="title">Recent projects</h2>
                    <div className="projectContent">
                        {projectList.map((d, i) => {
                            return (
                                <div className="projectCategory accordion" key={`${d.category}-${i}`}>
                                    <input
                                        type="radio"
                                        id={"projectAccordion-" + i}
                                        className="accordionInput"
                                        name="projectAccordion"
                                        value={i}
                                        onClick={() => toggleCategory(i)}
                                        checked={projectCategory === i ? true : false} />
                                    <label
                                        className="projectCategoryTitle accordionButton"
                                        htmlFor={"projectAccordion-" + i}>
                                        {d.category} <i className="fas fa-angle-down"> </i>
                                    </label>
                                    <div className="projectWrapper accordionContent">
                                        <div className="projectCard">
                                            {d.list.map((p, i) => {
                                                return (
                                                    <div
                                                        key={`${p.image}-${i}`}
                                                        className={i % 2 === 0 ? "singleProject" : "singleProjectRevers"}>
                                                        <div className="projectImg "><img src={p.image} alt="" /></div>
                                                        <div className="projectDescription ">
                                                            <div className="projectTitle" projectSequence={i + 1}>
                                                                <h3>{p.title}</h3>
                                                            </div>
                                                            <div className="projectInfo ">
                                                                <p className="projectDetails">{p.details}</p>
                                                                <div className="projectTechnology">
                                                                    <ul>
                                                                        {p.technology.map((t) => (
                                                                            <li key={t + 100}>{t}</li>
                                                                        ))}
                                                                    </ul>
                                                                </div>
                                                                <div className="projectLink ">
                                                                    {p.liveLink.map((l) => (
                                                                        <a
                                                                            key={l + 100}
                                                                            href={l}
                                                                            target="_blank">
                                                                            <i className="fas fa-external-link-square-alt"></i>
                                                                        </a>
                                                                    ))}
                                                                    {p.githubLink ?
                                                                        <a
                                                                            href={p.githubLink}
                                                                            target="_blank"><i className="fab fa-github"></i>
                                                                        </a>
                                                                        : " "}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            }
                                            )}
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                        )}
                        {/* <div className="singleProjectWrapper">
                            <div className="singleProject ">
                                <div className="projectImg "><img src={imgOfRafada} alt="" /></div>
                                <div className="projectDescription ">
                                    <div className="projectTitle">
                                        <h3>Website of RAFADA Group</h3>
                                    </div>
                                    <div className="projectInfo ">
                                        <p className="projectDetails">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum ea ut tempore sint vitae natus beatae ad odit reprehenderit perspiciatis!</p>
                                        <div className="projectTechnology">
                                            <ul>
                                                <li>HTML</li>
                                                <li>CSS</li>
                                                <li>JavaScript</li>
                                                <li>ReactJS</li>
                                                <li>NodeJS</li>
                                                <li>Bootstrap</li>
                                                <li>TailwindCSS</li>
                                            </ul>
                                        </div>
                                        <div className="projectLink ">
                                            <a href="#"><i className="fas fa-external-link-square-alt"></i></a>
                                            <a href="#"><i className="fab fa-github"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="singleProjectWrapper">
                            <div className="singleProjectRevers ">
                                <div className="projectImg "><img src={imgOfRafada} alt="" /></div>
                                <div className="projectDescription ">
                                    <div className="projectTitle">
                                        <h3>Website of Top Tier Technology</h3>
                                    </div>
                                    <div className="projectInfo ">
                                        <p className="projectDetails">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum ea ut tempore sint vitae natus beatae ad odit reprehenderit perspiciatis!</p>
                                        <div className="projectTechnology">
                                            <ul>
                                                <li>HTML</li>
                                                <li>CSS</li>
                                                <li>JavaScript</li>
                                                <li>ReactJS</li>
                                                <li>NodeJS</li>
                                                <li>Bootstrap</li>
                                                <li>TailwindCSS</li>
                                            </ul>
                                        </div>
                                        <div className="projectLink ">
                                            <a href="#"><i className="fas fa-external-link-square-alt"></i></a>
                                            <a href="#"><i className="fab fa-github"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                    <h3 className="information">This section is under maintenance</h3>
                </div>
            </section>
        </div>
    )
}

export default Project