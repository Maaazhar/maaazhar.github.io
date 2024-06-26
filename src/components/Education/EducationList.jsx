import programingHero from "../../assets/images/educationInstituteLogo/programingHero.svg"
import dimensionITAndSoftware from "../../assets/images/educationInstituteLogo/dimensionITAndSoftware.png"
import alison from "../../assets/images/educationInstituteLogo/alison.svg"
import creativeIT from "../../assets/images/educationInstituteLogo/creativeIT.png"
import linuxPathshala from "../../assets/images/educationInstituteLogo/linuxPathshala.png"
import ist from "../../assets/images/educationInstituteLogo/ist.png"
import nu from "../../assets/images/educationInstituteLogo/nu.png"
import mgbhs from "../../assets/images/educationInstituteLogo/mgbhs.png"
import dhakaEducationBoard from "../../assets/images/educationInstituteLogo/dhakaEducationBoard.png"
import njkmhs from "../../assets/images/educationInstituteLogo/njkmhs.png"

const EducationList = [
  {
    "category": "Professional Training and Course",
    "courseTitles": ["Complete Web Development", "Search Engine Optimization", "Complete Web Design", "CompTIA A+", "CCNA", "MTCRE and MTCNA", "Computer Network", "Red Hat Linux", "Windows Server"],
    "courseList": [
      {
        "title": "Complete Web Development (MERN stack)",
        "institute": "Programming Hero,",
        "instituteLink": "https://www.programming-hero.com/",
        "logo": {
          "instituteLogo": programingHero
        },
        "location": "Dhaka, Bangladesh.",
        "duration": "6 Months",
        "passingYear": "2021",
        "majorSubject": [
          ["HTML", "CSS", "JavaScript", "ES6", "Bootstrap", "Material UI", "ReactJs", "Redux", "React-Hook", "NextJs", "React-Router", "TypeScrip",],
          ["JavaScript", "NodeJs", "ExpressJs", "MongoDB",],
          ["VS code", "Git", "Chrome Dev tool", "Figma",],
          ["GitHub", "Firebase", "Netlify",]
        ]
      },
      {
        "title": "Search Engine Optimization (SEO)",
        "institute": "Dimension IT and software,",
        "instituteLink": "https://dimensionit.net/",
        "logo": {
          "instituteLogo": dimensionITAndSoftware
        },
        "location": "Dhaka, Bangladesh.",
        "duration": "2 Months",
        "passingYear": "2020",
        "majorSubject": []
      },
      {
        "title": "Complete Web Design (HTML-CSS)",
        "institute": "Dimension IT and software,",
        "instituteLink": "https://dimensionit.net/",
        "logo": {
          "instituteLogo": dimensionITAndSoftware
        },
        "location": "Dhaka, Bangladesh.",
        "duration": "2 Months",
        "passingYear": "2020",
        "majorSubject": [
          ["HTML", "CSS", "JavaScript", "Bootstrap",],
          ["sublime text"],
        ]
      },
      {
        "title": "CompTIA A+",
        "institute": "Alison.com,",
        "instituteLink": "https://alison.com/",
        "logo": {
          "instituteLogo": alison
        },
        "location": "Dublin, Ireland.",
        "duration": "2 Months",
        "passingYear": "2020",
        "majorSubject": []
      },
      {
        "title": "CCNA (Routing and Switching)",
        "institute": "Creative IT institute,",
        "instituteLink": "https://www.creativeitinstitute.com/",
        "logo": {
          "instituteLogo": creativeIT
        },
        "location": "Dhaka, Bangladesh.",
        "duration": "3 Months",
        "passingYear": "2019",
        "majorSubject": []
      },
      {
        "title": "MTCRE and MTCNA",
        "institute": "Creative IT institute,",
        "instituteLink": "https://www.creativeitinstitute.com/",
        "logo": {
          "instituteLogo": creativeIT
        },
        "location": "Dhaka, Bangladesh.",
        "duration": "3 Months",
        "passingYear": "2019",
        "majorSubject": []
      },
      {
        "title": "Introduction to Computer Networking",
        "institute": "Creative IT institute,",
        "instituteLink": "https://www.creativeitinstitute.com/",
        "logo": {
          "instituteLogo": creativeIT
        },
        "location": "Dhaka, Bangladesh.",
        "duration": "3 Days",
        "passingYear": "2019",
        "majorSubject": []
      },
      {
        "title": "Red Hat Linux (Installation and Basic Commands)",
        "institute": "Linux Pathshala,",
        "instituteLink": "http://linuxpathshala.com/",
        "logo": {
          "instituteLogo": linuxPathshala
        },
        "location": "Dhaka, Bangladesh.",
        "duration": "1 Day",
        "passingYear": "2018",
        "majorSubject": []
      },
      {
        "title": "Windows Server (Installation and Basic Commands)",
        "institute": "Linux Pathshala,",
        "instituteLink": "http://linuxpathshala.com/",
        "logo": {
          "instituteLogo": linuxPathshala
        },
        "location": "Dhaka, Bangladesh.",
        "duration": "1 Day",
        "passingYear": "2018",
        "majorSubject": []
      },
    ]
  },
  {
    "category": "Academic Course",
    "courseTitles": ["Bachelor (Honors)", "Higher Secondary", "Secondary"],
    "courseList": [
      {
        "title": "BSc (Honors) in Electronics and Communication Engineering",
        "institute": "Institute of Science and Technology,",
        "instituteLink": "https://ist.edu.bd/",
        "universityBoard": "National University, Bangladesh.",
        "universityBoardLink": "https://www.nu.ac.bd/",
        "logo": {
          "instituteLogo": ist,
          "universityBoardLogo": nu
        },
        "location": "Dhaka, Bangladesh.",
        "duration": "4 Years",
        "passingYear": "2020",
        "majorSubject": []
      },
      {
        "title": "Higher Secondary Certificate",
        "institute": "Motijheel Government Boys' High School,",
        "instituteLink": "https://www.mgbhs.edu.bd/",
        "universityBoard": "Dhaka Education Board.",
        "universityBoardLink": "https://www.dhakaeducationboard.gov.bd/",
        "logo": {
          "instituteLogo": mgbhs,
          "universityBoardLogo": dhakaEducationBoard
        },
        "location": "Dhaka, Bangladesh.",
        "duration": "4 Years",
        "passingYear": "2020",
        "majorSubject": [
          [],
          []
        ]
      },
      {
        "title": "Secondary School Certificate",
        "institute": "Notun Jurain K.M Mainuddin High School,",
        "instituteLink": "https://deb108476.dhakaeducationboard.gov.bd/",
        "universityBoard": "Dhaka Education Board.",
        "universityBoardLink": "https://www.dhakaeducationboard.gov.bd/",
        "logo": {
          "instituteLogo": njkmhs,
          "universityBoardLogo": dhakaEducationBoard
        },
        "location": "Dhaka, Bangladesh.",
        "duration": "4 Years",
        "passingYear": "2020",
        "majorSubject": [
          [],
          []
        ]
      }
    ]
  }
];

export default EducationList;