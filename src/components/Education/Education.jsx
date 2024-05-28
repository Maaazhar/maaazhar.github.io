import { useState } from "react";
import "./Education.css"

const Education = () => {
    const [educationCategory, setEducationCategory] = useState(0)
    const [tabState, setTabState] = useState(0)
    const toggleTab = (i) => setTabState(i);
    const toggleCategory = (i) => setEducationCategory(i);

    const educationList = [
        {
            "category": "",
            "courseTitles": [],
            "courseList": [
                {
                    "title": "",
                    "institute": "",
                    "universityBoard": "",
                    "location": "",
                    "passingYear": "",
                    "majorSubject": [
                        [],
                        [],
                        []
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