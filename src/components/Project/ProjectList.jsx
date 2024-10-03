import imgOfRafada from "../../assets/images/project/rafada.png";
import GreenCrate from "../../assets/images/project/GreenCrate.jpg";
import portfolio from "../../assets/images/project/portfolio.jpg";
import tweetex from "../../assets/images/project/tweetex.jpg";
import msTube from "../../assets/images/project/msTube.jpg";

const projects = [
    {
        "category": "Client Project",
        "list": [
            {
                "image": imgOfRafada,
                "title": "Website of RAFADA Group",
                "details": "This is a business website of RAFADA Group, consisting of a total of 17 pages, accommodating an individual single page for each of their 14 companies to promote them by sharing their business information.",
                "technology": ["HTML", "CSS", "ReactJS", "Bootstrap", "Font Awesome", "Organic  SEO"],
                "liveLink": ["https://www.rafadagroup.com/"],
            },
            {
                "image": GreenCrate,
                "title": "Website of Green Crate",
                "details": "Green Crate is an organic food provider in Dhaka, offering fresh and authentic product. The website features their products, services, and commitment to sustainable practices.",
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
                "title": "MS Tube a YouTube clone",
                "details": "MS Tube is a YouTube clone app that streams videos using YouTube’s original links, offering a similar user experience for watching and exploring content while leveraging YouTube’s vast video library and functionality.",
                "technology": ["ReactJS", "Material UI", "Vite", "Rapid API", "Axios", "GithubPages", "Organic  SEO"],
                "liveLink": ["https://maaazhar.github.io/msTube/"],
                "githubLink": "https://github.com/Maaazhar/msTube"
            },
            {
                "image": tweetex,
                "title": "Tweet a micro blogging web app",
                "details": "Tweet is a micro-blogging web app similar to X (formerly Twitter). Currently, users can post and like content, with plans to introduce comment and follow features in the future, enhancing user interaction.",
                "technology": ["ReactJS", "NextJS", "TypeScript", "Tailwind CSS", "SupaBase", "PostgreSQL", "Vercel", "Organic  SEO"],
                "liveLink": ["https://tweetex.vercel.app/"],
                "githubLink": "https://github.com/Maaazhar/tweet"
            },
            {
                "image": portfolio,
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