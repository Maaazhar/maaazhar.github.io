import aqary from "../../assets/images/project/aqary.jpg";
import dvProperty from "../../assets/images/project/dvProperty.jpg";
import imgOfRafada from "../../assets/images/project/rafada.png";
import GreenCrate from "../../assets/images/project/GreenCrate.jpg";
import msTube from "../../assets/images/project/msTube.jpg";
import portfolio from "../../assets/images/project/portfolio.jpg";
import pureHome from "../../assets/images/project/pureHome.jpg";
import tweetex from "../../assets/images/project/tweetex.jpg";

const projects = [
    {
        "category": "Client Project",
        "list": [
            {
                "image": dvProperty,
                "workingMode": "solo",
                "title": "Diamond Vista Properties",
                "details": "Website of Diamond Vista Properties, a modern real estate platform featuring dynamic property listings, intuitive navigation, and a clean responsive interface providing users with a seamless experience to explore luxury and affordable homes across Dubai.",
                "technology": ["ReactJS", "NextJS", "Tailwind CSS", "SVG", "Email Service", "Organic  SEO", "Dynamic SEO implementation"],
                "liveLink": ["https://dvproperty.vercel.app/"],
            },
            {
                "image": imgOfRafada,
                "workingMode": "solo",
                "title": "RAFADA Group",
                "details": "Website of RAFADA Group, a polished corporate site showcasing the companys diverse business portfolio, clear service offerings, and professional branding, delivering a streamlined user experience to engage clients across the UAE.",
                "technology": ["HTML", "CSS", "ReactJS", "Bootstrap", "Font Awesome", "Email Service", "Organic  SEO"],
                "liveLink": ["https://www.rafadagroupuae.com/"],
            },
            {
                "image": pureHome,
                "workingMode": "collaborative",
                "title": "Pure Home Real Estate",
                "details": "The website of Pure Home Real Estate LLC, it showcases comprehensive listings, detailed investment insights and expert guidance across the UAE market, delivering a refined and user-focused experience for renters, buyers and investors.",
                "technology": ["HTML", "CSS", "NextJS", "ReactJS", "Font Awesome", "Organic  SEO"],
                "liveLink": ["https://purehome-re.ae/"],
            },
            {
                "image": aqary,
                "workingMode": "collaborative",
                "title": "Aqary Investment",
                "details": "Aqary Investment & Developments website, showcasing their real-estate services across the UAE with clear property listings, professional branding, and an inviting user experience that supports clients in buying, selling, renting and investing with confidence.",
                "technology": ["NextJS", "ReactJS", "MaterialUI", "Font Awesome", "Organic  SEO"],
                "liveLink": ["https://aqaryaid.com/en"],
            },
            {
                "image": GreenCrate,
                "workingMode": "solo",
                "title": "Green Crate",
                "subTitle": "[only desktop version]",
                "details": "Green Crates website, a vibrant e-commerce platform showcasing eco-friendly crates with engaging visuals, intuitive navigation, and seamless user experience, making green choices simple and stylish for every customer.",
                "technology": ["HTML", "CSS", "ReactJS", "Vite", "Font Awesome", "Organic  SEO"],
                "liveLink": ["http://greencratebd.com/", "https://greencrate.netlify.app/"],
            }
        ]
    },
    {
        "category": "Personal Project",
        "list": [
            {
                "image": msTube,
                "workingMode": "solo",
                "title": "MS Tube a YouTube clone",
                "details": "MS Tube is a YouTube clone app that streams videos using YouTube’s original links, offering a similar user experience for watching and exploring content while leveraging YouTube’s vast video library and functionality.",
                "technology": ["ReactJS", "Material UI", "Vite", "Rapid API", "Axios", "GithubPages", "Organic  SEO"],
                "liveLink": ["https://maaazhar.github.io/msTube/"],
                "githubLink": "https://github.com/Maaazhar/msTube"
            },
            {
                "image": tweetex,
                "workingMode": "solo",
                "title": "Tweet a micro blogging web app",
                "details": "Tweet is a micro-blogging web app similar to X (formerly Twitter). Currently, users can post and like content, with plans to introduce comment and follow features in the future, enhancing user interaction.",
                "technology": ["ReactJS", "NextJS", "TypeScript", "Tailwind CSS", "SupaBase", "PostgreSQL", "Vercel", "Organic  SEO"],
                "liveLink": ["https://tweetex.vercel.app/"],
                "githubLink": "https://github.com/Maaazhar/tweet"
            },
            {
                "image": portfolio,
                "workingMode": "solo",
                "title": "Portfolio of Mazharul Islam",
                "details": "This is a portfolio website of Mazharul Islam, a professional web developer based in the UAE, showcases his expertise, featuring his portfolio, technical skills, and professional experiences.",
                "technology": ["HTML", "CSS", "ReactJS", "Vite", "Font Awesome", "Organic  SEO"],
                "liveLink": ["https://mazharul-islam.web.app/"],
                "githubLink": "https://github.com/Maaazhar/maaazhar.github.io"
            }
        ]
    }
]

export default projects;