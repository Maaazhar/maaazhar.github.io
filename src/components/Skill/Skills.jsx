import "./Skills.css"
import photoshopLogo from "../../assets/images/skill-svg/adobe-photoshop.svg";
import bootstrapLogo from "../../assets/images/skill-svg/bootstrap.svg";
import chromeLogo from "../../assets/images/skill-svg/browser-chrome.svg";
import cLogo from "../../assets/images/skill-svg/c-letter.svg";
import cppLogo from "../../assets/images/skill-svg/c-cpp.svg";
import codeblocksLogo from "../../assets/images/skill-svg/codeblocks.svg";
import cssLogo from "../../assets/images/skill-svg/css3.svg";
import devcppLogo from "../../assets/images/skill-svg/dev cpp.svg";
import es6Logo from "../../assets/images/skill-svg/es6.svg";
import expressJsLogo from "../../assets/images/skill-svg/express.svg";
import figmaLogo from "../../assets/images/skill-svg/figma-logo.svg";
import firebaseLogo from "../../assets/images/skill-svg/firebase.svg";
import gitLogo from "../../assets/images/skill-svg/git-alt.svg";
import githubLogo from "../../assets/images/skill-svg/github.svg";
import htmlLogo from "../../assets/images/skill-svg/html-5-logo.svg";
import javaScriptLogo from "../../assets/images/skill-svg/javascript-js.svg";
import materialUiLogo from "../../assets/images/skill-svg/material-ui.svg";
import mongoDbLogo from "../../assets/images/skill-svg/mongoDB.svg";
import netlifyLogo from "../../assets/images/skill-svg/netlify.svg";
import nextJsLogo from "../../assets/images/skill-svg/nextjs.svg";
import nodeJsLogo from "../../assets/images/skill-svg/node-js.svg";
import pythonLogo from "../../assets/images/skill-svg/python.svg";
import reactJsLogo from "../../assets/images/skill-svg/react.svg";
import reactHookLogo from "../../assets/images/skill-svg/react-hook.svg";
import reactRouterLogo from "../../assets/images/skill-svg/react-router.svg";
import reduxLogo from "../../assets/images/skill-svg/redux.svg";
import typeScriptLogo from "../../assets/images/skill-svg/typescript.svg";
import vercelLogo from "../../assets/images/skill-svg/vercel.svg";
import vsCodeLogo from "../../assets/images/skill-svg/vs-code.svg";

import  BootstrapLogo  from "./Logo/BootstrapLogo";
import  ChromeDevToolLogo  from "./Logo/ChromeDevToolLogo";
import  CLogo  from "./Logo/CLogo";
import  CodeBlocksLogo  from "./Logo/CodeBlocksLogo";
import  CppLogo  from "./Logo/CppLogo";
import  CssLogo  from "./Logo/CssLogo";
import  DevCppLogo  from "./Logo/DevCppLogo";
import  Es6Logo  from "./Logo/Es6Logo";
import  ExpressLogo  from "./Logo/ExpressLogo";
import  FigmaLogo  from "./Logo/FigmaLogo";
import  FirebaseLogo  from "./Logo/FirebaseLogo";
import  GitHubLogo  from "./Logo/GitHubLogo";
import  GitLogo  from "./Logo/GitLogo";
import  HtmlLogo  from "./Logo/HtmlLogo";
import  JavaScriptLogo  from "./Logo/JavaScriptLogo";
import  MaterialUiLogo  from "./Logo/MaterialUiLogo";
import  MongoDbLogo  from "./Logo/MongoDbLogo";
import  NextJsLogo  from "./Logo/NextJsLogo";
import  NodeJsLogo  from "./Logo/NodeJsLogo";
import  NetlifyLogo  from "./Logo/NetlifyLogo";
import  PhotoShopLogo  from "./Logo/PhotoShopLogo";
import  PythonLogo  from "./Logo/PythonLogo";
import  ReactHookLogo  from "./Logo/ReactHookLogo";
import  ReactJsLogo  from "./Logo/ReactJsLogo";
import  ReactRouterLogo  from "./Logo/ReactRouterLogo";
import  ReduxLogo  from "./Logo/ReduxLogo";
import  TypeScriptLogo  from "./Logo/TypeScriptLogo";
import  VercelLogo  from "./Logo/VercelLogo";
import  VsCodeLogo  from "./Logo/VsCodeLogo";


// import SkillList  from "./SkillList.jsx";

export const Skills = () => {
    const currentYear = new Date().getFullYear();
    const logos = [{"component": <PhotoShopLogo/>}]

    const skills1 = [
        {
            "category": "Front-End",
            "list": [
                [htmlLogo, "HTML", 2019],
                [cssLogo, "CSS", 2019],
                [javaScriptLogo, "JavaScript", 2019],
                [es6Logo, "ES6", 2019],
                [bootstrapLogo, "Bootstrap", 2019],
                [materialUiLogo, "Material UI", 2020],
                [reactJsLogo, "ReactJs", 2020],
                [reactHookLogo, "React-Hook", 2020],
                [reduxLogo, "Redux", 2020],
                [reactRouterLogo, "React-Router", 2020],
                [nextJsLogo, "NextJs", 2020],
                [typeScriptLogo, "TypeScrip", 2020]
            ]
        },
        {
            "category": "Back-End",
            "list": [
                [javaScriptLogo, "JavaScript", 2019],
                [nodeJsLogo, "NodeJs (CRUD)", 2020],
                [expressJsLogo, "ExpressJs", 2020],
                [mongoDbLogo, "MongoDB", 2020]
            ]
        },
        {
            "category": "Tools",
            "list": [
                [vsCodeLogo, "VS code", 2019],
                [gitLogo, "Git", 2020],
                [chromeLogo, "Chrome Dev tool", 2020],
                [codeblocksLogo, "Code Blocks", 2017],
                [devcppLogo, "Dev C++", 2017],
                [figmaLogo, "Figma", 2020],
                [photoshopLogo, "PhotoShop", 2019]
            ]
        },
        {
            "category": "Platform",
            "list": [
                [githubLogo, "GitHub", 2020],
                [firebaseLogo, "Firebase", 2020],
                [netlifyLogo, "Netlify", 2020],
                [vercelLogo, "Vercel", 2022]
            ]
        },
        {
            "category": "Programming Language",
            "list": [
                [cLogo, "C", 2017],
                [cppLogo, "C++", 2018],
                [javaScriptLogo, "JavaScript", 2019],
                [pythonLogo, "Python", 2020]
            ]
        }
    ];
    const skills = [
        {
            "category": "Front-End",
            "list": [
                {"logo": <HtmlLogo/>, "title": "HTML", "startingYear": 2019},
                {"logo": <CssLogo/>, "title": "CSS", "startingYear": 2019},
                {"logo": <JavaScriptLogo/>, "title": "JavaScript", "startingYear": 2019},
                {"logo": <Es6Logo/>, "title": "ES6", "startingYear": 2019},
                {"logo": <BootstrapLogo/>, "title": "Bootstrap", "startingYear": 2019},
                {"logo": <MaterialUiLogo/>, "title": "Material UI", "startingYear": 2020},
                {"logo": <ReactJsLogo/>, "title": "ReactJs", "startingYear": 2020},
                {"logo": <ReduxLogo/>, "title": "Redux", "startingYear": 2020},
                {"logo": <ReactHookLogo/>, "title": "React-Hook", "startingYear": 2020},
                {"logo": <ReactRouterLogo/>, "title": "React-Router", "startingYear": 2020},
                {"logo": <NextJsLogo/>, "title": "NextJs", "startingYear": 2020},
                {"logo": <TypeScriptLogo/>, "title": "TypeScrip", "startingYear": 2020}
            ]
        },
        {
            "category": "Back-End",
            "list": [
                {"logo": <JavaScriptLogo/>, "title": "JavaScript", "startingYear": 2019},
                {"logo": <NodeJsLogo/>, "title": "NodeJs", "startingYear": 2020},
                {"logo": <ExpressLogo/>, "title": "ExpressJs", "startingYear": 2020},
                {"logo": <MongoDbLogo/>, "title": "MongoDB", "startingYear": 2020}
            ]
        },
        {
            "category": "Tools",
            "list": [
                {"logo": <VsCodeLogo/>, "title": "VS code", "startingYear": 2020},
                {"logo": <GitLogo/>, "title": "Git", "startingYear": 2020},
                {"logo": <ChromeDevToolLogo/>, "title": "Chrome Dev tool", "startingYear": 2020},
                {"logo": <CodeBlocksLogo/>, "title": "Code Blocks", "startingYear": 2017},
                {"logo": <DevCppLogo/>, "title": "Dev C++", "startingYear": 2017},
                {"logo": <FigmaLogo/>, "title": "Figma", "startingYear": 2020},
                {"logo": <PhotoShopLogo/>, "title": "PhotoShop", "startingYear": 2019}
            ]
        },
        {
            "category": "Platform",
            "list": [
                {"logo": <GitHubLogo/>, "title": "GitHub", "startingYear": 2020},
                {"logo": <FirebaseLogo/>, "title": "Firebase", "startingYear": 2020},
                {"logo": <NetlifyLogo/>, "title": "Netlify", "startingYear": 2020},
                {"logo": <VercelLogo/>, "title": "Vercel", "startingYear": 2022}
            ]
        },
        {
            "category": "Programming Language",
            "list": [
                {"logo": <CLogo/>, "title": "C", "startingYear": 2017},
                {"logo": <CppLogo/>, "title": "C++", "startingYear": 2018},
                {"logo": <JavaScriptLogo/>, "title": "JavaScript", "startingYear": 2019},
                {"logo": <PythonLogo/>, "title": "Python", "startingYear": 2020}
            ]
        }
    ];


    return (
        <div>
            <section className="skills" id="skills">
                <div className="max-width">
                    <h2 className="title">My skills</h2>
                    <div className="skillsContent">
                        {skills.map((d, i) => {
                            return (
                                <div className="skillCategory" key={`${d.category}-${i}`}>
                                    <div className="skillCategoryTitle">{d.category}</div>
                                    <div className="skill">
                                        {d.list.map((s, i) => {
                                            return (
                                                <div className="skillItem" key={`${s.logo}-${i}`}>
                                                    <div className="skillImg">
                                                        {/* <svg data-src={s[0]} width="30px" fill="#faebd7"></svg> */}
                                                        {s.logo}
                                                    </div>
                                                    <div className="skillName">{s.title}</div>
                                                    <div className="skillAge">{currentYear - s.startingYear}+ Years of<br />Experience </div>
                                                </div>
                                            )
                                        }
                                        )}
                                    </div>
                                </div>
                            )
                        }
                        )}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Skills
