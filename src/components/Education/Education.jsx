import "./Education.css"
import { useState } from "react";
import EducationList from "./EducationList.jsx"
import { handleTabClick } from "../../utils/utils.js";
import { ActiveSectionIndicator } from "../../utils/sideEffect.jsx";

const Education = () => {
    const [educationCategory, setEducationCategory] = useState(undefined);
    const ref = document.querySelector('#education .educationTabWrapper');
    const educations = EducationList.map(edu => edu.category.toLowerCase().replace(/ /g, "-"));
    ActiveSectionIndicator({ sections: educations, top: 170, mount: educationCategory, setMount: setEducationCategory });

    return (
        <section className="education" id="education">
            <div className="max-width">
                <h2 className="title">My Education</h2>
                <div className="educationContent">
                    <div className="educationTabWrapper">
                        <div className="educationTabs">
                            {EducationList.map((d, i) => {
                                const id = d.category.toLowerCase().replace(/ /g, "-");
                                return (
                                    <a
                                        href={"#" + id}
                                        key={d + 1 + i}
                                        onClick={(e) => handleTabClick(i, id, ref, 100, setEducationCategory, e)}
                                        className={educationCategory === i ? "educationTab activeEducationTab" : "educationTab"}>
                                        {d.category}
                                    </a>
                                )
                            })}
                        </div>
                    </div>
                    {EducationList.map((d, i) => (
                        <div 
                        className="educationCategory"
                        id={d.category.toLowerCase().replace(/ /g, "-")}
                        key={d.category + i}>
                            <h2 className="educationCategoryTitle"> {d.category} </h2>
                            <div className="educationCardsWrapper">
                                <div className="educationCards">
                                    {d.courseList.map((c, k) => (
                                        <div key={c + k} className="educationCard" style={{ "--delay": k + 1 }}>
                                            <h3 className="courseTitle">{c.title}</h3>
                                            <p className="institute"><a href={c.instituteLink} target="_blank">{c.institute}</a></p>
                                            {c.universityBoard && <p className="universityBoard"><a href={c.universityBoardLink} target="_blank">{c.universityBoard}</a></p>}
                                            {c.logo &&
                                                <div className={c.logo.universityBoardLogo ? "educationLogoSM" : "educationLogo"}>
                                                    <img className="instituteLogo" src={c.logo.instituteLogo} alt="Institute Logo" />
                                                    {c.logo.universityBoardLogo && <img className="universityBoardLogo" src={c.logo.universityBoardLogo} alt="Institute Logo" />}
                                                </div>}
                                            <p className="instituteLocation">{c.location}</p>
                                            <p className="courseDuration">Course Duration: {c.duration}</p>
                                            <p className="passingYear">Completed in the year of {c.passingYear}</p>
                                            <p className="courseDetails"></p>
                                        </div>
                                    )
                                    )}
                                </div>
                            </div>
                        </div>
                    )
                    )}
                </div>
                {/* <div className="educationContentWrapper ">
                    {EducationList.map((d, i) => (
                        <div className="educationCategory accordion" key={d.category + i}>
                            <input
                                type="radio"
                                id={"educationAccordion-" + i}
                                className="accordionInput"
                                name="educationAccordion"
                                value={i}
                                onClick={() => toggleCategory(i)}
                                defaultChecked={educationCategory === i ? true : false} />
                            <label
                                className="educationCategoryTitle accordionButton"
                                htmlFor={"educationAccordion-" + i}>
                                {d.category} <i className="fas fa-angle-down" />
                            </label>
                            <div className="educationContent accordionContent">
                                <div className="educationCardsWrapper">
                                    <div className="educationCards">
                                        {d.courseList.map((c, k) => (
                                            <div key={c + k} className="educationCard" style={{ "--delay": k + 1 }}>
                                                <h3 className="courseTitle">{c.title}</h3>
                                                <p className="institute"><a href={c.instituteLink} target="_blank">{c.institute}</a></p>
                                                {c.universityBoard && <p className="universityBoard"><a href={c.universityBoardLink} target="_blank">{c.universityBoard}</a></p>}
                                                {c.logo &&
                                                    <div className={c.logo.universityBoardLogo ? "educationLogoSM": "educationLogo"}>
                                                        <img className="instituteLogo" src={c.logo.instituteLogo} alt="Institute Logo" />
                                                        {c.logo.universityBoardLogo && <img className="universityBoardLogo" src={c.logo.universityBoardLogo} alt="Institute Logo" />}
                                                    </div>}
                                                <p className="instituteLocation">{c.location}</p>
                                                <p className="courseDuration">Course Duration: {c.duration}</p>
                                                <p className="passingYear">Completed in the year of {c.passingYear}</p>
                                                <p className="courseDetails"></p> */}

                {/* <h3 className="courseTitle"><i className="fas fa-scroll"/><span>{c.title}</span></h3>
                                                <p className="institute"><i className="fas fa-school"/><a href={c.instituteLink} target="_blank">{c.institute}</a></p>
                                                <p className="universityBoard"><i className="fas fa-university"/><a href={c.universityBoardLink} target="_blank">{c.universityBoard}</a></p>
                                                <p className="instituteLocation"><i className="fas fa-map-marker-alt"/><span>{c.location}</span></p>
                                                <p className="courseDuration"><i className="fas fa-stopwatch"/><span>Course Duration: {c.duration}</span></p>
                                                <p className="passingYear"><i className="fas fa-calendar-check"/><span>Completed in the year of {c.passingYear}</span></p>
                                                <p className="courseDetails"></p> */}

                {/* </div>
                                        )
                                        )}
                                    </div>
                                </div> */}

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

                {/* </div>
                        </div>
                    )
                    )}
                </div> */}
            </div>
        </section>
    )
}

export default Education