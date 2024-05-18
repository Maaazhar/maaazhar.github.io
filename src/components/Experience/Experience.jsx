import { useState } from "react"
import "./Experience.css"
const Experience = () => {
    const [tabState, setTabState] = useState(0)
    const toggleTab = (i) => {
        setTabState(i);
    }

    const jobList = {
        "companies": ["Abu Dhabi City", "MJ Project Management", "Top Tier Technology", "Top Tier Technology", "Technology Palli", "Creative IT Institute"],
        "jobs": [
            {
                "position": "Freelance Web Developer",
                "company": "Abu Dhabi City.",
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
                "company": "MJ Project Management LLC.",
                "location": "Dubai, United Arab Emirates.",
                "duration": "November, 2023 - Present",
                "description": [
                    "Developed, maintained, and shipped production code for the company and their client websites, primarily using HTML, CSS, JavaScript, and ReactJS.",
                    "Maintain and troubleshoot computer systems and devices remotely for the company offices."
                ]
            },
            {
                "position": "Web Developer (Front-End, ReactJS)",
                "company": "Top Tier Technology.",
                "location": "Dhaka, Bangladesh.",
                "duration": "June, 2022 - August, 2023",
                "description": [
                    "Design, developed, maintained, and shipped interactive cross browser compatibility and mobile responsiveness web applications for the company using HTML, CSS, JavaScript, and ReactJS.",
                    "Pioneered and built a website for the company",
                    "Open and lead a new department (software department) in the company.",
                ]
            },
            {
                "position": "System Admin",
                "company": "Top Tier Technology.",
                "location": "Dhaka, Bangladesh.",
                "duration": "August 2021 - May 2022",
                "description": [
                    "Design, developed, maintained, and shipped interactive cross browser compatibility and mobile responsiveness web applications for the company using HTML, CSS, JavaScript, and ReactJS.",
                    "Pioneered and built a website for the company",
                    "Open and lead a new department (software department) in the company.",
                ]
            },
            {
                "position": "Network Engineer",
                "company": "Technology Palli.",
                "location": "Dhaka, Bangladesh.",
                "duration": "February 2020 - July 2021",
                "description": [
                    "Design, developed, maintained, and shipped interactive cross browser compatibility and mobile responsiveness web applications for the company using HTML, CSS, JavaScript, and ReactJS.",
                    "Pioneered and built a website for the company",
                    "Open and lead a new department (software department) in the company.",
                ]
            },
            {
                "position": "Network Support Engineer (intern)",
                "company": "Creative IT Institute.",
                "location": "Dhaka, Bangladesh.",
                "duration": "November 2019 - January 2020",
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
                        <div className="experienceTabs">
                            <div className="tabWrapper">
                                {jobList.companies.map((d, i) => {
                                    return (
                                        <button key={d + 1 + i} onClick={() => toggleTab(i)} className={tabState === i ? "tab activeTab" : "tab"}>{d}</button>
                                    )
                                })}
                            </div>
                            <div className="contentWrapper">
                                {jobList.jobs.map((d, i) => {
                                    return (
                                        <div key={d - 1 + i} className={tabState === i ? "content activeContent" : "content"}>
                                            <h3 className="position">{d.position}</h3>
                                            <p className="company">{d.company}</p>
                                            <p className="location">{d.location}</p>
                                            <p className="duration">{d.duration}</p>
                                            <p className="workDescription"></p>
                                            <ul>
                                                {d.description.map((des) => (<li key={des + 1 + i}>{des}</li>))}
                                            </ul>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Experience