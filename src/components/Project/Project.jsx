import "./Project.css";
import imgOfRafada from "../../assets/images/project/rafada.png";
import portfolio from "../../assets/images/project/portfolio.jpg";
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
                    "liveLink": "https://www.rafadagroup.com/",
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
                    "technology": ["HTML", "CSS", "ReactJS", "Font Awesome", "Organic  SEO"],
                    "liveLink": "https://maaazhar.github.io/",
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
                                        <div className="project">
                                            {d.list.map((p, i) => {
                                                return (
                                                    <div className="singleProjectWrapper" key={`${p.image}-${i}`}>
                                                        <div className="singleProject ">
                                                            <div className="projectImg "><img src={p.image} alt="" /></div>
                                                            <div className="projectDescription ">
                                                                <div className="projectTitle">
                                                                    <h3>{p.title}</h3>
                                                                </div>
                                                                <div className="projectInfo ">
                                                                    <p className="projectDetails">{p.details}</p>
                                                                    <div className="projectTechnology">
                                                                        <ul>
                                                                            {p.technology.map((t) => (<li key={t + 1}>{t}</li>))}
                                                                        </ul>
                                                                    </div>
                                                                    <div className="projectLink ">
                                                                        <a href={p.liveLink} target="_blank"><i className="fas fa-external-link-square-alt"></i></a>
                                                                        {p.githubLink ? <a href={p.githubLink} target="_blank"><i className="fab fa-github"></i></a> : " "}
                                                                    </div>
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
                        <div className="singleProjectWrapper">
                            <div className="singleProject ">
                                <div className="projectImg "><img src={imgOfRafada} alt="" /></div>
                                <div className="projectDescription ">
                                    <div className="projectTitle">
                                        <h3>Website of RAFADA Group</h3>
                                    </div>
                                    <div className="projectInfo ">
                                        <p className="projectDetails">This is a business website of RAFADA Group, consisting a total of 17 page, accommodating an individual single page for each of their 14 companies to promote them by sharing their business information.</p>
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
                                            {/* <a href="#"><svg  version="1.1" viewBox="0 0 24 24" width="24px"><g fill="#fff" fillRule="evenodd" stroke="none" strokeWidth="1"><g transform="translate(12.000000, 12.000000) scale(1, 1) translate(-12, -10.000000) "><path d="M19,19 L5,19 L5,5 L12,5 L12,3 L5,3 C3.89,3 3,3.9 3,5 L3,19 C3,20.1 3.89,21 5,21 L19,21 C20.1,21 21,20.1 21,19 L21,12 L19,12 L19,19 Z M14,3 L14,5 L17.59,5 L7.76,14.83 L9.17,16.24 L19,6.41 L19,10 L21,10 L21,3 L14,3 Z" fill="#fff" fillRule="nonzero"></path></g></g></svg></a> */}
                                            <a href="#"><i className="fab fa-github"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="singleProjectWrapper">
                            <div className="singleProject ">
                                <div className="projectImg "><img src={imgOfRafada} alt="" /></div>
                                <div className="projectDescription ">
                                    <div className="projectTitle">
                                        <h3>Website of RAFADA Group</h3>
                                    </div>
                                    <div className="projectInfo ">
                                        <p className="projectDetails">This is a business website of RAFADA Group, consisting a total of 17 page, accommodating an individual single page for each of their 14 companies to promote them by sharing their business information.</p>
                                        <div className="projectTechnology">
                                            <ul>
                                                <li>HTML</li>
                                                <li>CSS</li>
                                                <li>Java Script</li>
                                                <li>React JS</li>
                                                <li>Node JS</li>
                                                <li>Bootstrap</li>
                                                <li>TailwindCSS</li>
                                            </ul>
                                        </div>
                                        <div className="projectLink ">
                                            <a href="#"><i className="fas fa-external-link-square-alt"></i></a>
                                            {/* <a href="#"><svg  version="1.1" viewBox="0 0 24 24" width="24px"><g fill="#fff" fillRule="evenodd" stroke="none" strokeWidth="1"><g transform="translate(12.000000, 12.000000) scale(1, 1) translate(-12, -10.000000) "><path d="M19,19 L5,19 L5,5 L12,5 L12,3 L5,3 C3.89,3 3,3.9 3,5 L3,19 C3,20.1 3.89,21 5,21 L19,21 C20.1,21 21,20.1 21,19 L21,12 L19,12 L19,19 Z M14,3 L14,5 L17.59,5 L7.76,14.83 L9.17,16.24 L19,6.41 L19,10 L21,10 L21,3 L14,3 Z" fill="#fff" fillRule="nonzero"></path></g></g></svg></a> */}
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
                        </div>
                        <div className="singleProjectWrapper">
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
                        </div>
                        <div className="singleProjectWrapper">
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
                        </div>
                    </div>
                    <h3 className="information">This section is under maintenance</h3>
                </div>
            </section>
        </div>
    )
}

export default Project