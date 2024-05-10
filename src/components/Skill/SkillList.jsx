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

import AdobeLogo from "../../assets/images/skill-svg/adobeLogo";

const SkillList = () => {
    const logos = [{ "component": <AdobeLogo /> }]

    const skills = [
        {
            "category": "Front-End",
            "skillList": [
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
            "skillList": [
                [javaScriptLogo, "JavaScript", 2019],
                [nodeJsLogo, "NodeJs (CRUD)", 2020],
                [expressJsLogo, "ExpressJs", 2020],
                [mongoDbLogo, "MongoDB", 2020]
            ]
        },
        {
            "category": "Tools",
            "skillList": [
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
            "skillList": [
                [githubLogo, "GitHub", 2020],
                [firebaseLogo, "Firebase", 2020],
                [netlifyLogo, "Netlify", 2020],
                [vercelLogo, "Vercel", 2022]
            ]
        },
        {
            "category": "Programming Language",
            "skillList": [
                [cLogo, "C", 2017],
                [cppLogo, "C++", 2018],
                [javaScriptLogo, "JavaScript", 2019],
                [pythonLogo, "Python", 2020]
            ]
        }
    ];


}

export default SkillList