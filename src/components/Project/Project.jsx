import ActiveSectionIndicator from "../../utils/activeSectionIndicator.jsx";
import "./Project.css";
import projectList from "./ProjectList.jsx"
import { useRef, useState } from "react";

const Project = () => {
    const [projectCategory, setProjectCategory] = useState(undefined)
    const tabWrapperRef = useRef(null);

    const projects = projectList.map(project => project.category.toLowerCase().replace(/ /g, "-"));
    ActiveSectionIndicator({ sections: projects, top: 170, mount: projectCategory, setMount: setProjectCategory })

    const handleTabClick = (i, id, e) => {
        if (e && typeof e.preventDefault === "function") e.preventDefault();
        setProjectCategory(i);
        const target = document.getElementById(id);
        if (target) {
            const tabsHeight = tabWrapperRef.current ? tabWrapperRef.current.getBoundingClientRect().height : 0;
            const top = target.getBoundingClientRect().top + window.scrollY - tabsHeight - 100;
            window.scrollTo({ top, behavior: "smooth" });
        }
    }

    return (
        <section className="project" id="project">
            <div className="max-width">
                <h2 className="title">Recent projects</h2>
                <div className="projectContent">
                    <div className="projectTabWrapper" ref={tabWrapperRef}>
                        <div className="projectTabs">
                            {
                                projectList.map((d, i) => {
                                    const id = d.category.toLowerCase().replace(/ /g, "-");
                                    return (
                                        <a
                                            href={"#" + id}
                                            key={d + 1 + i}
                                            onClick={(e) => handleTabClick(i, id, e)}
                                            className={projectCategory === i ? "projectTab activeTab" : "projectTab"}>
                                            {d.category}
                                        </a>
                                    )
                                }
                                )
                            }
                        </div>
                    </div>
                    {projectList.map((d, i) => (
                        <div className="projectCategory"
                            key={d.category + i}
                            id={d.category.toLowerCase().replace(/ /g, "-")}>
                            <h2 className="projectCategoryTitle">{d.category}</h2>
                            <div className="projectWrapper">
                                <div className="projectCard">
                                    {d.list.map((p, i) => (
                                        <div
                                            key={p.image + i}
                                            className={i % 2 === 0 ? "singleProject" : "singleProjectRevers"}>
                                            <div className="projectImg "><img src={p.image} alt="" /></div>
                                            <div className="projectDescription ">
                                                <div className="projectTitleWrapper">
                                                    <h3 className="projectTitle">{p.title}</h3>
                                                    {p.subTitle && <h3 className="projectSubTitle">{p.subTitle}</h3>}
                                                    <h3 className="projectSequence">{i + 1}</h3>
                                                    <h3 className={`workingMode workingMode-${i}`}>[{p.workingMode}]</h3>
                                                </div>
                                                <div className="projectInfo ">
                                                    <p className="projectDetails">{p.details}</p>
                                                    <div className="projectTechnology">
                                                        <ul style={{ "--totalItem": p.technology.length }}>
                                                            {p.technology.map((t, i) => (
                                                                <li key={t + i + 100} style={{ "--item": i + 1 }} >{t}</li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                    <div className="projectLink ">
                                                        {p.liveLink.map((l) => (
                                                            <a key={l + i + 100}
                                                                href={l}
                                                                target="_blank">
                                                                <i className="fas fa-external-link-square-alt"></i>
                                                            </a>
                                                        ))}
                                                        {p.githubLink &&
                                                            <a href={p.githubLink}
                                                                target="_blank"><i className="fab fa-github"></i>
                                                            </a>}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                    )}
                                </div>
                            </div>
                        </div>
                    )
                    )}
                </div>

                <div style={{ display: "none" }}>
                    {/* <div className="projectContent">
                    {projectList.map((d, i) => (
                        <div className="projectCategory accordion" key={d.category + i}>
                            <input
                                type="radio"
                                id={"projectAccordion-" + i}
                                className="accordionInput"
                                name="projectAccordion"
                                value={i}
                                onClick={() => toggleCategory(i)}
                                defaultChecked={projectCategory === i ? true : false} />
                            <label
                                className="projectCategoryTitle accordionButton"
                                htmlFor={"projectAccordion-" + i}>
                                {d.category} <i className="fas fa-angle-down"> </i>
                            </label>
                            <div className="projectWrapper accordionContent">
                                <div className="projectCard">
                                    {d.list.map((p, i) => (
                                        <div
                                            key={p.image + i}
                                            className={i % 2 === 0 ? "singleProject" : "singleProjectRevers"}>
                                            <div className="projectImg "><img src={p.image} alt="" /></div>
                                            <div className="projectDescription ">
                                                <div className="projectTitleWrapper">
                                                    <h3 className="projectTitle">{p.title}</h3>
                                                    {p.subTitle && <h3 className="projectSubTitle">{p.subTitle}</h3>}
                                                    <h3 className="projectSequence">{i + 1}</h3>
                                                    <h3 className={`workingMode workingMode-${i}`}>[{p.workingMode}]</h3>
                                                </div>
                                                <div className="projectInfo ">
                                                    <p className="projectDetails">{p.details}</p>
                                                    <div className="projectTechnology">
                                                        <ul style={{ "--totalItem": p.technology.length }}>
                                                            {p.technology.map((t, i) => (
                                                                <li key={t + i + 100} style={{ "--item": i + 1 }} >{t}</li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                    <div className="projectLink ">
                                                        {p.liveLink.map((l) => (
                                                            <a key={l + i + 100}
                                                                href={l}
                                                                target="_blank">
                                                                <i className="fas fa-external-link-square-alt"></i>
                                                            </a>
                                                        ))}
                                                        {p.githubLink &&
                                                            <a href={p.githubLink}
                                                                target="_blank"><i className="fab fa-github"></i>
                                                            </a>}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                    )}
                                </div>
                            </div>
                        </div>
                    )
                    )}
                </div> */}
                </div>

            </div>
        </section>
    )
};

export default Project;