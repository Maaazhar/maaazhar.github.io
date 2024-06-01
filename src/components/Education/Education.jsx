import { useState } from "react";
import EducationList from "./EducationList.jsx"
import "./Education.css"

const Education = () => {
    const [educationCategory, setEducationCategory] = useState(0)
    const toggleCategory = (i) => setEducationCategory(i);
    
    // const [tabState, setTabState] = useState(0)
    // const toggleTab = (i) => setTabState(i);

    return (
        <section className="education" id="education">
            <div className="max-width">
                <h2 className="title">My Education</h2>
                <div className="educationContentWrapper ">
                    {EducationList.map((d, i) => (
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
                                                <h3 className="courseTitle"><i className="fas fa-scroll"> </i>{c.title}</h3>
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