import { useState } from "react"
import "./Experience.css"
const Experience = () => {
    const [tabState, setTabState] = useState(1)
    const toggleTab = (i) => {
        setTabState(i);
    }

    return (
        <div>
            <section className="experience" id="experience">
                <div className="max-width">
                    <h2 className="title">My Experiences</h2>
                    <div className="experienceContent">
                        <div className="experienceTabs border">
                            <div className="tabWrapper">
                                <button onClick={() => toggleTab(1)} className={tabState === 1 ? "tab activeTab" : "tab"}>MJ Project Management</button>
                                <button onClick={() => toggleTab(2)} className={tabState === 2 ? "tab activeTab" : "tab"}>Technology Palli</button>
                                <button onClick={() => toggleTab(3)} className={tabState === 3 ? "tab activeTab" : "tab"}>Creative IT Institute</button>
                            </div>
                            <div className="contentWrapper">
                                <div className={tabState === 1 ? "content activeContent" : "content"}>
                                    <h3 className="position">Position 1</h3>
                                    <p className="place">Dubai, Bangladesh.</p>
                                    <p className="duration">May, 2019 - June, 2020</p>
                                    <p className="workDescription"></p>
                                    <ul>
                                        <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio dignissimos commodi nobis minus animi dolore voluptatibus atque minima quis eum.</li>
                                        <li>content of 1</li>
                                        <li>content of 1</li>
                                    </ul>
                                </div>
                                <div className={tabState === 2 ? "content activeContent" : "content"}>
                                    <h3 className="position">Position 2</h3>
                                    <p className="place">Dhaka, Bangladesh.</p>
                                    <p className="duration">May, 2020 - June, 2021</p>
                                    <p className="workDescription"></p>
                                    <ul>
                                        <li>content of 2</li>
                                        <li>content of 2</li>
                                        <li>content of 2</li>
                                    </ul>
                                </div>
                                <div className={tabState === 3 ? "content activeContent" : "content"}>
                                    <h3 className="position">Position 3</h3>
                                    <p className="place">Dhaka, Bangladesh.</p>
                                    <p className="duration">May, 2021 - June, 2022</p>
                                    <p className="workDescription"></p>
                                    <ul>
                                        <li>content of 3</li>
                                        <li>content of 3</li>
                                        <li>content of 3</li>
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