import imgOfRafada from "../../assets/images/project/rafada.png";
import portfolio from "../../assets/images/project/portfolio.jpg";
import GreenCrate from "../../assets/images/project/GreenCrate.jpg";

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
              "image": portfolio,
              "title": "Portfolio of Mazharul Islam",
              "details": "This is a portfolio website of Mazharul Islam, a professional web developer based in the UAE, showcases his expertise, featuring his portfolio, technical skills, and professional experiences.",
              "technology": ["HTML", "CSS", "ReactJS", "Vite", "Font Awesome", "Organic  SEO"],
              "liveLink": ["https://maaazhar.github.io/"],
              "githubLink": "https://github.com/Maaazhar/maaazhar.github.io"
          }
      ]
  }
]

export default projects;