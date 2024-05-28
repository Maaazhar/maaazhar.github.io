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
            "courseTitles": ["Web Development", "Search Engine Optimization", "Complete Web Design", "CompTIA A+", "CCNA", "MTCRE and MTCNA", "Computer Network", "Red Hat Linux", "Windows Server"],
            "courseList": [
                {
                    "title": "Complete Web Development (MERN stack)",
                    "institute": "Programming Hero",
                    "location": "Dhaka, Bangladesh",
                    "duration": "6 Months",
                    "passingYear": "2021",
                    "majorSubject": [
                        ["HTML", "CSS", "JavaScript", "ES6","Bootstrap","Material UI", "ReactJs", "Redux", "React-Hook", "NextJs", "React-Router", "TypeScrip",],
                        [ "JavaScript", "NodeJs", "ExpressJs", "MongoDB",],
                        [ "VS code", "Git", "Chrome Dev tool", "Figma",],
                        [ "GitHub", "Firebase", "Netlify",]
                    ]
                },
                {
                    "title": "Complete Web Development (MERN stack)",
                    "institute": "Programming Hero",
                    "location": "Dhaka, Bangladesh",
                    "duration": "6 Months",
                    "passingYear": "2021",
                    "majorSubject": [
                        ["HTML", "CSS", "JavaScript", "ES6","Bootstrap","Material UI", "ReactJs", "Redux", "React-Hook", "NextJs", "React-Router", "TypeScrip",],
                        [ "JavaScript", "NodeJs", "ExpressJs", "MongoDB",],
                        [ "VS code", "Git", "Chrome Dev tool", "Figma",],
                        [ "GitHub", "Firebase", "Netlify",]
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
                    "universityBoard": "National University, Bangladesh",
                    "location": "Dhaka, Bangladesh",
                    "duration": "4 Years",
                    "passingYear": "2020",
                    "majorSubject": [
                        ["HTML", "CSS", "JavaScript", "ES6","Bootstrap","Material UI", "ReactJs", "Redux", "React-Hook", "NextJs", "React-Router", "TypeScrip",],
                        [ "JavaScript", "NodeJs", "ExpressJs", "MongoDB",],
                        [ "VS code", "Git", "Chrome Dev tool", "Figma",],
                        [ "GitHub", "Firebase", "Netlify",]
                    ]
                },
                {
                    "title": "BSc (Honors) in Electronics and Communication Engineering",
                    "institute": "Institute of Science and Technology",
                    "universityBoard": "National University, Bangladesh",
                    "location": "Dhaka, Bangladesh",
                    "duration": "4 Years",
                    "passingYear": "2020",
                    "majorSubject": [
                        ["HTML", "CSS", "JavaScript", "ES6","Bootstrap","Material UI", "ReactJs", "Redux", "React-Hook", "NextJs", "React-Router", "TypeScrip",],
                        [ "JavaScript", "NodeJs", "ExpressJs", "MongoDB",],
                        [ "VS code", "Git", "Chrome Dev tool", "Figma",],
                        [ "GitHub", "Firebase", "Netlify",]
                    ]
                }
            ]
        }
    ]

    return (
        <div>
            <section className="education" id="education">
                <div className="max-width">
                    <h2 className="title">My Education</h2>

                    <h3  className="information">This section is under maintenance</h3>
                </div>
            </section>
        </div>
    )
}

export default Education