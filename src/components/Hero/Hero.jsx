import wave from "../../assets/images/wave.gif"
import "./Hero.css"

export const Hero = () => {

    return (
        <section className="home" id="home">
            <div className="overlay ">
                <div className="max-width">
                    <div className="row">
                        <div className="home-content">
                            <div className="banner-text">
                                <div className="text-1">
                                    <img src={wave} width="60px" alt="" />
                                    Hello there, I am
                                </div>
                                <h1 className="text-2">Mazharul Islam</h1>
                                <h2 className="text-3">
                                    I transform
                                    <span> idea </span>
                                    into
                                    <span> digital experience.</span>
                                </h2>
                                <h3 className="text-4">
                                    I am an <span> experienced software engineer, specializing in web application and website, </span>
                                    I craft website with
                                    <span> intuitive </span>
                                    and
                                    <span> engaging </span>
                                    user interfaces, integrate functionality with
                                    <span> seamless </span>
                                    user experiences.
                                </h3>
                                <div className="home-btn">
                                    <a
                                        className="btn home-btn-item"
                                        target="_blank"
                                        href="https://www.linkedin.com/in/maaazhar/"
                                        title="See LinkedIn">
                                        See LinkedIn
                                    </a>
                                    <a
                                        className="btn home-btn-item"
                                        target="_blank"
                                        href="https://drive.google.com/file/d/1-MoxBC-ULS87ZQZMdUBgPPxZapFSc8nc/view"
                                        title="See Resume">
                                        See Resume
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};


export default Hero;
