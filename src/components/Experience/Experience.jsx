import { useState } from "react"
import "./Experience.css"
import jobList from "./JobList.jsx"

const Experience = () => {
    const [tabState, setTabState] = useState(0)
    const toggleTab = (i) => setTabState(i);

    return (
        <section className="experience" id="experience">
            <div className="max-width">
                <h2 className="title">My Experiences</h2>
                <div className="experienceContent">
                    <div className="experienceTabs">
                        <div className="tabWrapper">
                            {jobList.companies.map((d, i) => (
                                <button
                                    key={d + 1 + i}
                                    onClick={() => toggleTab(i)}
                                    className={tabState === i ? "tab activeTab" : "tab"}>
                                    {d}
                                </button>
                            ))}
                        </div>
                        <div className="contentWrapper">
                            {jobList.jobs.map((d, i) => (
                                <div
                                    key={d - 1 + i}
                                    className={tabState === i ? "content activeContent" : "content"}>
                                    <h3 className="position">{d.position}</h3>
                                    <p className="company">{d.company}</p>
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