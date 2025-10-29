import { useRef, useState } from "react"
import "./Experience.css"
import jobList from "./JobList.jsx"

const Experience = () => {
    const [tabState, setTabState] = useState(0)
    const topWrapperRef = useRef(null);
    // removed unused toggleTab; use handleClick which updates state then
    // scrolls after the DOM updates so the calculated position is correct
    const handleClick = (i, id, e) => {
        if (e && typeof e.preventDefault === 'function') e.preventDefault();

        // update active tab first
        setTabState(i);

        // wait for the DOM to update after state change, then compute position
        // using requestAnimationFrame ensures layout has been applied
        window.requestAnimationFrame(() => {
            const target = document.getElementById(id);
            if (!target) return;

            // position the target immediately below the section title
            const titleEl = document.querySelector('#experience .title');
            const titleHeight = titleEl ? titleEl.getBoundingClientRect().height : 0;

            // responsive offset: 150px for large, 90px for medium, 80px for small
            const width = window.innerWidth || document.documentElement.clientWidth;
            let responsiveOffset = 155;
            if (width >= 948) {
                responsiveOffset = 155; // large
            } else if (width >= 426) {
                responsiveOffset = 90; // medium
            } else {
                responsiveOffset = 80; // small/mobile
            }

            const top = target.getBoundingClientRect().top + window.scrollY - titleHeight - responsiveOffset;
            window.scrollTo({ top, behavior: 'smooth' });
        });
    }

    return (
        <section className="experience" id="experience">
            <div className="max-width">
                <h2 className="title">My Experiences</h2>
                <div className="experienceContent">
                    <div className="experienceTabs">
                        <div className="tabWrapper"   ref={topWrapperRef}>
                            {jobList.map((d, i) => {
                                const id = d.company.toLowerCase().replace(/ /g, "-") + i;
                                return (
                                    <button
                                        key={d + 1 + i}
                                        onClick={(e) => handleClick(i, id, e)}
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