import { useState } from "react"
import "./Experience.css"
const Experience = () => {
    const [tabState, setTabState] = useState(1)
    const toggleTab = (i) => {
        setTabState(i);
    }

    const jobList = {
        "companies": ["Abu Dhabi City", "MJ Project Management", "Top Tier Technology", "Top Tier Technology", "Technology Palli", "Creative IT Institute"],
        "jobs": [
            {
                "position": "Freelance Web Developer",
                "location": "Abu Dhabi, United Arab Emirates.",
                "duration": "December, 2023 - Present",
                "description": [
                    "Developed, maintained, and shipped production code for client websites using HTML, CSS, JavaScript, and ReactJS.",
                    "Deliver high-quality, robust, cross browser compatibility and mobile responsiveness web applications for clients.",
                    "Performed quality assurance tests on websites to ensure cross-browser compatibility and mobile responsiveness."
                ]
            },
            {
                "position": "Computer Engineer (Web Developer) - Remote",
                "location": "Dubai, United Arab Emirates.",
                "duration": "November, 2023 - Present",
                "description": [
                    "Developed, maintained, and shipped production code for the company and their client websites, primarily using HTML, CSS, JavaScript, and ReactJS.",
                    "Maintain and troubleshoot computer systems and devices remotely for the company offices."
                ]
            },
            {
                "position": "Web Developer (Front-End, ReactJS)",
                "location": "Dhaka, Bangladesh.",
                "duration": "June, 2022 - August, 2023",
                "description": [
                    "Design, developed, maintained, and shipped interactive cross browser compatibility and mobile responsiveness web applications for the company using HTML, CSS, JavaScript, and ReactJS.",
                    "Pioneered and built a website for the company",
                    "Open and lead a new department (software department) in the company.",
                ]
            }
        ]
    }

    return (
        <div>
            <section className="experience" id="experience">
                <div className="max-width">
                    <h2 className="title">My Experiences</h2>
                    <div className="experienceContent">
                        <div className="experienceTabs border">
                            <div className="tabWrapper">
                                {jobList.companies.map((d, i) => {
                                    return (
                                        <button key={d+1+i} onClick={() => toggleTab(i)} className={tabState === i ? "tab activeTab" : "tab"}>{d}</button>
                                    )
                                })}
                            </div>
                            {/* <div className="tabWrapper">
                                <button onClick={() => toggleTab(1)} className={tabState === 1 ? "tab activeTab" : "tab"}>MJ Project Management</button>
                                <button onClick={() => toggleTab(2)} className={tabState === 2 ? "tab activeTab" : "tab"}>Technology Palli</button>
                                <button onClick={() => toggleTab(3)} className={tabState === 3 ? "tab activeTab" : "tab"}>Creative IT Institute</button>
                            </div> */}
                            <div className="contentWrapper">
                                <div className={tabState === 1 ? "content activeContent" : "content"}>
                                    <h3 className="position">Position 1</h3>
                                    <p className="location">Dubai, United Arab Emirates.</p>
                                    <p className="duration">May, 2019 - June, 2020</p>
                                    <p className="workDescription"></p>
                                    <ul>
                                        <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio dignissimos commodi nobis minus animi dolore voluptatibus atque minima quis eum.</li>
                                        <li>Lorem ipsum dolor sit amet.</li>
                                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, minima!</li>
                                    </ul>
                                </div>
                                <div className={tabState === 2 ? "content activeContent" : "content"}>
                                    <h3 className="position">Position 2</h3>
                                    <p className="location">Dhaka, Bangladesh.</p>
                                    <p className="duration">May, 2020 - June, 2021</p>
                                    <p className="workDescription"></p>
                                    <ul>
                                        <li>Lorem ipsum dolor sit amet.</li>
                                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, minima!</li>
                                        <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio dignissimos commodi nobis minus animi dolore voluptatibus atque minima quis eum.</li>
                                    </ul>
                                </div>
                                <div className={tabState === 3 ? "content activeContent" : "content"}>
                                    <h3 className="position">Position 3</h3>
                                    <p className="location">Dhaka, Bangladesh.</p>
                                    <p className="duration">May, 2021 - June, 2022</p>
                                    <p className="workDescription"></p>
                                    <ul>
                                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, minima!</li>
                                        <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio dignissimos commodi nobis minus animi dolore voluptatibus atque minima quis eum.</li>
                                        <li>Lorem ipsum dolor sit amet.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Experience