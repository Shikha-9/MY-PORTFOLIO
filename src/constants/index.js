
import {
  logo,
  backend,
  creator,
  mobile,
  web,
  github,
  menu,
  close,
  css,
  gearXpert,
  project2,
  project3,
  mysql,
  express,
  aws,
  mui,
  
  gsap,
  framer,
  figma,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  threejs,
  firstTestimonial,
  secondTestimonial,
  thirdTestimonial,
} from '../assets'


// Import Tekisky separately
import aicteLogo from "../assets/aicte.png"


export const navLinks = [


  {
    id: "about",
    title: "About",
    
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full-Stack Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Ui UX Designer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "gsap",
    icon: gsap,
  },
  {
    name: "framer",
    icon: framer,
  },

 
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Material Ui",
    icon: mui,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Express Js",
    icon: express,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySql",
    icon: mysql,
  },

  {
    name: "git",
    icon: git,
  },
 

];

const experiences = [
  {
    title: "Project Intern",
    company_name: "AICTE",
    icon: aicteLogo,
    iconBg: "#383E56",
    date: "Oct 2024 - Dec 2024",
    points: [
       "Gained foundational knowledge in Python development, focusing on key programming concepts and best practices.",
    "Worked on structured modules enhancing backend and frontend development skills.",
    ],
  },
];

const education = [
  {
    degree: "Bachelor of Technology - Computer Science",
    school: "Kalinga Institute of Industrial Technology",
    date: "2022 – 2026",
    points: [
      "CGPA: 8.3",
    ],
  },
  {
    degree: "Class 12th",
    school: "Oxford Senior Secondary School",
    date: "Completed 2021",
    points: [
      "Percentage: 91.6%",
    ],
  },
  {
    degree: "Class 10th",
    school: "Oxford Senior Secondary School",
    date: "Completed 2019",
    points: [
      "Percentage: 91.6%",
    ],
  },
];


const projects = [
  
    {
  name: "Event Organizer",
  description: "A full-stack event management platform where users can register, log in, and create, edit, or delete events. Features include category-based filtering, event search, dark mode, and secure user authentication using bcrypt.",
  tags: [
    { name: "node.js", color: "green-text-gradient" },
    { name: "express.js", color: "pink-text-gradient" },
    { name: "sqlite", color: "blue-text-gradient" },
    { name: "html/css", color: "white-text-gradient" },
  ],
  image: project2,  
  source_code_link: "https://github.com/Shikha-9/event-organizer",
},

 
  {
  name: "Swasthya Pragati",
  description: "A health and wellness platform designed to promote healthy living through features such as personalized fitness tracking, health tips, and goal setting. It integrates interactive UI components for seamless user engagement and accessibility.",
  tags: [
    { name: "react", color: "blue-text-gradient" },
    { name: "node.js", color: "green-text-gradient" },
    { name: "express.js", color: "pink-text-gradient" },
    { name: "mongodb", color: "white-text-gradient" },
  ],
  image: project3,  // Replace with your image import later
  source_code_link: "https://github.com/Shikha-9/Swasthya-Pragati",
},


];

export { services, technologies, experiences, education, projects };
