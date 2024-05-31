import { useState } from "react";
import "./Education.css"

const Education = () => {
    const [educationCategory, setEducationCategory] = useState(0)
    const [tabState, setTabState] = useState(0)
    const toggleTab = (i) => setTabState(i);
    const toggleCategory = (i) => setEducationCategory(i);

    const educationList = [
        {
            "category": "Professional Training and Course",
            "courseTitles": ["Complete Web Development", "Search Engine Optimization", "Complete Web Design", "CompTIA A+", "CCNA", "MTCRE and MTCNA", "Computer Network", "Red Hat Linux", "Windows Server"],
            "courseList": [
                {
                    "title": "Complete Web Development (MERN stack)",
                    "institute": "Programming Hero",
                    "instituteLink": "https://www.programming-hero.com/",
                    "location": "Dhaka, Bangladesh",
                    "duration": "6 Months",
                    "passingYear": "2021",
                    "majorSubject": [
                        ["HTML", "CSS", "JavaScript", "ES6", "Bootstrap", "Material UI", "ReactJs", "Redux", "React-Hook", "NextJs", "React-Router", "TypeScrip",],
                        ["JavaScript", "NodeJs", "ExpressJs", "MongoDB",],
                        ["VS code", "Git", "Chrome Dev tool", "Figma",],
                        ["GitHub", "Firebase", "Netlify",]
                    ]
                },
                {
                    "title": "Complete Web Development (MERN stack)",
                    "institute": "Programming Hero",
                    "instituteLink": "https://www.programming-hero.com/",
                    "location": "Dhaka, Bangladesh",
                    "duration": "6 Months",
                    "passingYear": "2021",
                    "majorSubject": [
                        ["HTML", "CSS", "JavaScript", "ES6", "Bootstrap", "Material UI", "ReactJs", "Redux", "React-Hook", "NextJs", "React-Router", "TypeScrip",],
                        ["JavaScript", "NodeJs", "ExpressJs", "MongoDB",],
                        ["VS code", "Git", "Chrome Dev tool", "Figma",],
                        ["GitHub", "Firebase", "Netlify",]
                    ]
                },
                {
                    "title": "Complete Web Development (MERN stack)",
                    "institute": "Programming Hero",
                    "instituteLink": "https://www.programming-hero.com/",
                    "location": "Dhaka, Bangladesh",
                    "duration": "6 Months",
                    "passingYear": "2021",
                    "majorSubject": [
                        ["HTML", "CSS", "JavaScript", "ES6", "Bootstrap", "Material UI", "ReactJs", "Redux", "React-Hook", "NextJs", "React-Router", "TypeScrip",],
                        ["JavaScript", "NodeJs", "ExpressJs", "MongoDB",],
                        ["VS code", "Git", "Chrome Dev tool", "Figma",],
                        ["GitHub", "Firebase", "Netlify",]
                    ]
                },
                {
                    "title": "Complete Web Development (MERN stack)",
                    "institute": "Programming Hero",
                    "instituteLink": "https://www.programming-hero.com/",
                    "location": "Dhaka, Bangladesh",
                    "duration": "6 Months",
                    "passingYear": "2021",
                    "majorSubject": [
                        ["HTML", "CSS", "JavaScript", "ES6", "Bootstrap", "Material UI", "ReactJs", "Redux", "React-Hook", "NextJs", "React-Router", "TypeScrip",],
                        ["JavaScript", "NodeJs", "ExpressJs", "MongoDB",],
                        ["VS code", "Git", "Chrome Dev tool", "Figma",],
                        ["GitHub", "Firebase", "Netlify",]
                    ]
                },
                {
                    "title": "Complete Web Development (MERN stack)",
                    "institute": "Programming Hero",
                    "instituteLink": "https://www.programming-hero.com/",
                    "location": "Dhaka, Bangladesh",
                    "duration": "6 Months",
                    "passingYear": "2021",
                    "majorSubject": [
                        ["HTML", "CSS", "JavaScript", "ES6", "Bootstrap", "Material UI", "ReactJs", "Redux", "React-Hook", "NextJs", "React-Router", "TypeScrip",],
                        ["JavaScript", "NodeJs", "ExpressJs", "MongoDB",],
                        ["VS code", "Git", "Chrome Dev tool", "Figma",],
                        ["GitHub", "Firebase", "Netlify",]
                    ]
                },
                {
                    "title": "Complete Web Development (MERN stack)",
                    "institute": "Programming Hero",
                    "instituteLink": "https://www.programming-hero.com/",
                    "location": "Dhaka, Bangladesh",
                    "duration": "6 Months",
                    "passingYear": "2021",
                    "majorSubject": [
                        ["HTML", "CSS", "JavaScript", "ES6", "Bootstrap", "Material UI", "ReactJs", "Redux", "React-Hook", "NextJs", "React-Router", "TypeScrip",],
                        ["JavaScript", "NodeJs", "ExpressJs", "MongoDB",],
                        ["VS code", "Git", "Chrome Dev tool", "Figma",],
                        ["GitHub", "Firebase", "Netlify",]
                    ]
                },
                {
                    "title": "Search Engine Optimization",
                    "institute": "Programming Hero",
                    "instituteLink": "https://www.programming-hero.com/",
                    "location": "Dhaka, Bangladesh",
                    "duration": "6 Months",
                    "passingYear": "2021",
                    "majorSubject": [
                        ["HTML", "CSS", "JavaScript", "ES6", "Bootstrap", "Material UI", "ReactJs", "Redux", "React-Hook", "NextJs", "React-Router", "TypeScrip",],
                        ["JavaScript", "NodeJs", "ExpressJs", "MongoDB",],
                        ["VS code", "Git", "Chrome Dev tool", "Figma",],
                        ["GitHub", "Firebase", "Netlify",]
                    ]
                }
            ]
        },
        {
            "category": "Academic Course",
            "courseTitles": ["Bachelor (Honors)", "Higher Secondary", "Secondary"],
            "courseList": [
                {
                    "title": "BSc (Honors) in Electronics and Communication Engineering",
                    "institute": "Institute of Science and Technology",
                    "instituteLink": "https://ist.edu.bd/",
                    "universityBoard": "National University, Bangladesh",
                    "universityBoardLink": "https://www.nu.ac.bd/",
                    "location": "Dhaka, Bangladesh",
                    "duration": "4 Years",
                    "passingYear": "2020",
                    "majorSubject": [
                        ["HTML", "CSS", "JavaScript", "ES6", "Bootstrap", "Material UI", "ReactJs", "Redux", "React-Hook", "NextJs", "React-Router", "TypeScrip",],
                        ["JavaScript", "NodeJs", "ExpressJs", "MongoDB",],
                        ["VS code", "Git", "Chrome Dev tool", "Figma",],
                        ["GitHub", "Firebase", "Netlify",]
                    ]
                },
                {
                    "title": "BSc (Honors) in Electronics and Communication Engineering",
                    "institute": "Institute of Science and Technology",
                    "instituteLink": "https://ist.edu.bd/",
                    "universityBoard": "National University, Bangladesh",
                    "universityBoardLink": "https://www.nu.ac.bd/",
                    "location": "Dhaka, Bangladesh",
                    "duration": "4 Years",
                    "passingYear": "2020",
                    "majorSubject": [
                        ["HTML", "CSS", "JavaScript", "ES6", "Bootstrap", "Material UI", "ReactJs", "Redux", "React-Hook", "NextJs", "React-Router", "TypeScrip",],
                        ["JavaScript", "NodeJs", "ExpressJs", "MongoDB",],
                        ["VS code", "Git", "Chrome Dev tool", "Figma",],
                        ["GitHub", "Firebase", "Netlify",]
                    ]
                },
                {
                    "title": "Higher Secondary Certificate",
                    "institute": "Institute of Science and Technology",
                    "instituteLink": "https://ist.edu.bd/",
                    "universityBoard": "National University, Bangladesh",
                    "universityBoardLink": "https://www.nu.ac.bd/",
                    "location": "Dhaka, Bangladesh",
                    "duration": "4 Years",
                    "passingYear": "2020",
                    "majorSubject": [
                        ["HTML", "CSS", "JavaScript", "ES6", "Bootstrap", "Material UI", "ReactJs", "Redux", "React-Hook", "NextJs", "React-Router", "TypeScrip",],
                        ["JavaScript", "NodeJs", "ExpressJs", "MongoDB",],
                        ["VS code", "Git", "Chrome Dev tool", "Figma",],
                        ["GitHub", "Firebase", "Netlify",]
                    ]
                }
            ]
        }
    ]

    return (
        <section className="education" id="education">
            <div className="max-width">
                <h2 className="title">My Education</h2>
                <div className="educationContentWrapper ">
                    {educationList.map((d, i) => (
                        <div className="educationCategory accordion" key={`${d.category}-${i}`}>
                            <input
                                type="radio"
                                id={"educationAccordion-" + i}
                                className="accordionInput"
                                name="educationAccordion"
                                value={i}
                                onClick={() => toggleCategory(i)}
                                checked={educationCategory === i ? true : false} />
                            <label
                                className="educationCategoryTitle accordionButton"
                                htmlFor={"educationAccordion-" + i}>
                                {d.category} <i className="fas fa-angle-down"> </i>
                            </label>
                            <div className="educationContent accordionContent">
                                <div className="educationCardsWrapper">
                                    <div className="educationCards">
                                        {d.courseList.map((c, k) => (
                                            <div
                                                key={c - 1 + k}
                                                className="educationCard">
                                                <h3 className="courseTitle">{c.title}</h3>
                                                <p className="institute"><a href={c.instituteLink} target="_blank">{c.institute}</a></p>
                                                <p className="universityBoard"><a href={c.universityBoardLink} target="_blank">{c.universityBoard}</a></p>
                                                <p className="instituteLocation">{c.location}</p>
                                                <p className="courseDuration">Course Duration: {c.duration}</p>
                                                <p className="passingYear">Completed in the year of {c.passingYear}</p>
                                                <p className="courseDetails"></p>
                                            </div>
                                        )
                                        )}
                                    </div>
                                </div>
                                {/* <div className="educationTabsWrapper">
                                    <div className="educationTabs">
                                        <div className="educationTabWrapper ">
                                            {d.courseTitles.map((t, j) => (
                                                <button
                                                    key={t + 1 + j}
                                                    onClick={() => toggleTab(j)}
                                                    className={tabState === j ? "educationTab activeEducationTab" : "educationTab"}>
                                                    {t}
                                                </button>
                                            ))}
                                        </div>
                                        <div className="educationTabContentWrapper ">
                                            {d.courseList.map((c, k) => (
                                                <div
                                                    key={c - 1 + k}
                                                    className={tabState === k ? "educationTabContent activeEducationTabContent  " : "educationTabContent"}>
                                                    <h3 className="courseTitle">{c.title}</h3>
                                                    <p className="institute"><a href={c.instituteLink} target="_blank">{c.institute}</a></p>
                                                    <p className="universityBoard"><a href={c.universityBoardLink} target="_blank">{c.universityBoard}</a></p>
                                                    <p className="instituteLocation">{c.location}</p>
                                                    <p className="courseDuration">Course Duration: {c.duration}</p>
                                                    <p className="passingYear">Completed in the year of {c.passingYear}</p>
                                                    <p className="courseDetails"></p>
                                                    <ul>
                                                        {c.majorSubject.map((des, l) => (
                                                            <li key={des + 1 + l}>
                                                                {des.map((major) => (
                                                                    <li key={major + 1 + l}>{major}</li>
                                                                ))}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )
                                            )}
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    )
                    )}
                </div>
                <h3 className="information">This section is under maintenance</h3>
            </div>
        </section>
    )
}

export default Education