import "./Project.css";
import { useState } from "react";
import projectList from "./ProjectList.jsx"
import { handleTabClick } from "../../utils/utils.js";
import { ActiveSectionIndicator } from "../../utils/sideEffect.jsx";

const Project = () => {
    const [projectCategory, setProjectCategory] = useState(undefined);
    const [expanded, setExpanded] = useState({});
    const ref = document.querySelector('#project .projectTabWrapper');
    const projects = projectList.map(project => project.category.toLowerCase().replace(/ /g, "-"));
    ActiveSectionIndicator({ sections: projects, top: 170, mount: projectCategory, setMount: setProjectCategory })
    setTimeout(() => { }, 500);

    return (
        <section className="project" id="project">
            <div className="max-width">
                <h2 className="title">Recent projects</h2>
                <div className="projectContent">
                    <div className="projectTabWrapper">
                        <div className="projectTabs">
                            {projectList.map((d, i) => {
                                const id = d.category.toLowerCase().replace(/ /g, "-");
                                return (
                                    <a
                                        key={d + 1 + i}
                                        href={"#" + id}
                                        onClick={(e) => handleTabClick(i, id, ref, 100, setProjectCategory, e)}
                                        className={projectCategory === i ? "projectTab activeTab" : "projectTab"}>
                                        {d.category}
                                    </a>
                                )
                            })}
                        </div>
                    </div>
                    {projectList.map((d, i) => {
                        const id = d.category.toLowerCase().replace(/ /g, "-");
                        let showMoreId, showLessId;
                        if (d.list.length > 3) {
                            showMoreId = d.list[3].title.toLowerCase().replace(/ /g, "-") + "-4";
                            showLessId = d.list[2].title.toLowerCase().replace(/ /g, "-") + "-3";
                        }
                        return (
                            <div className="projectCategory"
                                key={d.category + i}
                                id={id}>
                                <h2 className="projectCategoryTitle">{d.category}</h2>
                                <div className="projectWrapper">
                                    <div className="projectCard">
                                        {d.list.slice(0, 3).map((p, j) => SingleProject(p, j))}
                                        {d.list.length > 3 && (
                                            <div
                                                className="extraProjects"
                                                // style={{ maxHeight: expanded[i] ? 'fit-content' : '0px' }}
                                                aria-hidden={!expanded[i]}
                                            >
                                                {d.list.slice(3).map((p, j) => SingleProject(p, j + 3))}
                                            </div>
                                        )}
                                        {d.list.length > 3 && (
                                            <div className="showMoreBtnWrapper">
                                                <button
                                                    className="showMoreBtn"
                                                    onClick={() => {setExpanded(prev => ({ ...prev, [i]: !prev[i] })) }}
                                                    // onClick={() => {
                                                    //     expanded[i]
                                                    //         ? setTimeout(() => { setExpanded(prev => ({ ...prev, [i]: false })) }, 10)
                                                    //         : setExpanded(prev => ({ ...prev, [i]: true }))
                                                    // }}
                                                    aria-expanded={!!expanded[i]}
                                                >
                                                    {expanded[i]
                                                        ? (<a
                                                            href={`#${showLessId}`}
                                                            onClick={(e) => handleTabClick(i, showLessId, ref, 100, setProjectCategory, e)}>
                                                            Show Less
                                                        </a>)
                                                        : (<a
                                                            href={`#${showMoreId}`}
                                                            onClick={(e) => handleTabClick(i, showMoreId, ref, 100, setProjectCategory, e)}>
                                                            Show {d.list.length - 3} More
                                                        </a>)
                                                    }
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        )
                    }
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

const SingleProject = (p, idx) => (
    <div
        key={p.image + idx}
        id={p.title.toLowerCase().replace(/ /g, "-") + "-" + (idx + 1)}
        className={idx % 2 === 0 ? "singleProject" : "singleProjectRevers"}>
        <div className="projectImg "><img src={p.image} alt="" /></div>
        <div className="projectDescription ">
            <div className="projectTitleWrapper">
                <h3 className="projectTitle">{p.title}</h3>
                {p.subTitle && <h3 className="projectSubTitle">{p.subTitle}</h3>}
                <h3 className="projectSequence">{idx + 1}</h3>
                <h3 className={`workingMode workingMode-${idx}`}>[{p.workingMode}]</h3>
            </div>
            <div className="projectInfo ">
                <p className="projectDetails">{p.details}</p>
                <div className="projectTechnology">
                    <ul style={{ "--totalItem": p.technology.length }}>
                        {p.technology.map((t, k) => (
                            <li key={t + k + 100} style={{ "--item": k + 1 }} >{t}</li>
                        ))}
                    </ul>
                </div>
                <div className="projectLink ">
                    {p.liveLink.map((l, li) => (
                        <a key={l + li + 100}
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