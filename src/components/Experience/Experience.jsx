import { useRef, useState } from "react"
import "./Experience.css"
import jobList from "./JobList.jsx"
// import { handleTabClick } from "../../utils/utils.jsx";

const Experience = () => {
    const [tabState, setTabState] = useState(0)
    const topWrapperRef = useRef(null);
    const toggleTab = (i) => setTabState(i);

    return (
        <section className="experience" id="experience">
            <div className="max-width">
                <h2 className="title">My Experiences</h2>
                <div className="experienceContent">
                    <div className="experienceTabs">
                        <div className="tabWrapper"   ref={topWrapperRef}>
                            {jobList.map((d, i) => {
                                // const id = d.company.toLowerCase().replace(/ /g, "-");
                                return (
                                    <button
                                        key={d + 1 + i}
                                        // onClick={(e) => handleTabClick(i, id, topWrapperRef, setTabState, e)}
                                        onClick={() => toggleTab(i)}
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
                                    id={d.company.toLowerCase().replace(/ /g, "-")}
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