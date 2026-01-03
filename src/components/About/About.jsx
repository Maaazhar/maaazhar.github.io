import { Typewriter } from 'react-simple-typewriter'
import PP from "../../assets/images/profile.jpg"
import "./About.css"

export const About = () => {
    const profession = [" Web Development.", " Front-End Development.", " ReactJS Development.", " MERN Stack Development.", " Web Design."];

    return (
        <section className="about" id="about">
            <div className="max-width">
                <h2 className="title">About me</h2>
                <div className="about-content">
                    <div className="column left">
                        <img src={PP} alt="Picture of Mazhar" />
                    </div>
                    <div className="column right">
                        <div className="text">Hi there! Call me
                            <span> Maz-har </span> and reach me out for
                            <span className="aboutWork">
                                <Typewriter
                                    words={profession}
                                    loop={999}
                                    cursor
                                    cursorStyle='|'
                                    typeSpeed={150}
                                    deleteSpeed={100}
                                    delaySpeed={1000}
                                />
                            </span>
                        </div>
                        <p>
                            I am an experienced software engineer, bringing designs to life by crafting interactive and visually engaging user interfaces that seamlessly blend form with functionality. I focus on building clean, intuitive interfaces that feel natural and user-friendly.
                            <br />
                            Utilizing my expertise in HTML, CSS, JavaScript, and React, I develop modern websites and web applications that not only look stunning but also deliver responsive and consistent experiences across devices and browsers.
                            <br />
                            From concept to execution, I prioritize user satisfaction by continuously refining and optimizing the digital journey. I ensure every aspect of an application aligns with both aesthetic goals and strong usability standards.
                            <br />
                            Alongside frontend development, I actively work with backend technologies including Node.js, Express, and MongoDB to build scalable, high-performance systems, delivering polished, user-centric solutions that leave a lasting impression.
                        </p>
                        {/* <p>
                            I am an experienced Web Developer, I bring designs to life, crafting interactive and visually engaging user interfaces that seamlessly blend in form with functionality. Utilizing my expertise in HTML, CSS, JavaScript, and ReactJS.
                            <br />
                            I ensure websites and web applications not only look stunning but also deliver intuitive and responsive experiences across various devices and browsers. From concept to execution, I strive to enhance user satisfaction by continuously refining and optimizing the digital journey. I ensure that every aspect of a website or application aligns with both aesthetic goals and usability requirements.
                            <br />
                            Beyond just coding, I continuously explore emerging technologies and best practices to enhance performance, accessibility, and the user experience.
                            <br />
                            Whether it is optimizing for speed, ensuring cross-browser compatibility, or integrating cutting-edge features, my passion lies in delivering polished, user-centric solutions that elevate the digital landscape and leave a lasting impression on visitors.
                        </p> */}
                        {/* <p>
                            I am an experienced software engineer specializing in web applications and websites. I craft intuitive, engaging user interfaces and seamless user experiences using React, HTML, CSS, and JavaScript, while building scalable backends with Node.js, Express, and MongoDB, delivering responsive, high-performance, user-centric solutions.
                        </p> */}
                        <div className="btn about-btn">
                            <a target="_blank"
                                href="https://drive.google.com/u/1/uc?id=1-MoxBC-ULS87ZQZMdUBgPPxZapFSc8nc&export=download"
                                title="Download Resume">Download My Resume</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};


export default About;
