import {useState } from "react"
import "./Experience.css"
import jobList from "./JobList.jsx"
import { handleTabClick } from "../../utils/utils.js";

const Experience = () => {
    const [tabState, setTabState] = useState(0)

    const ref = document.querySelector('#experience .title');
    const width = window.innerWidth || document.documentElement.clientWidth;
    const offset = width >= 948 ? 155 : width >= 426 ? 100 : 90;

    return (
        <section className="experience" id="experience">
            <div className="max-width">
                <h2 className="title">My Experiences</h2>
                <div className="experienceContent">
                    <div className="experienceTabs">
                        <div className="tabWrapper">
                            {jobList.map((d, i) => {
                                const id = d.company.toLowerCase().replace(/ /g, "-") + i;
                                return (
                                    <button
                                        key={d + 1 + i}
                                        onClick={(e) => handleTabClick(i, id, ref, offset, setTabState, e)}
                                        className={tabState === i ? "tab activeTab" : "tab"}>
                                        {d.company}
                                    </button>
                                )
                            })}
                        </div>
                        <div className="contentWrapper">
                            {jobList.map((d, i) => (
                                <div
                                    key={d + 1 + i}
                                    id={d.company.toLowerCase().replace(/ /g, "-") + i}
                                    className={tabState === i ? "content activeContent" : "content"}>
                                    <h3 className="position">{d.position}</h3>
                                    <p className="company">{d.company}.</p>
                                    <p className="location">{d.location}</p>
                                    <p className="duration">{d.duration}</p>
                                    <p className="workDescription"></p>
                                    <ul>
                                        {d.description.map((des) => (
                                            <li key={des + 1 + i}>{des}</li>
                                        ))}
                                    </ul>
                                </div>
                            )
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Experience;