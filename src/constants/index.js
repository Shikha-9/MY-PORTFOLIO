
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



import aicteLogo from "../assets/aicte.png"
import pinnacleLogo from "../assets/pinnacle.png";


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
  {
    title: "Full-Stack Developer Intern",
    company_name: "Pinnacle Labs",
    icon: pinnacleLogo,  
    iconBg: "#383E56",
    date: "May 2025 - June 2025",
    points: [
      "Developed the Event Organizer full-stack project using Node.js and SQLite.",
      "Built features including user registration, event creation, editing, and deletion.",
      "Improved backend API performance and ensured database integrity.",
    ],
  },
];
import kiitLogo from "../assets/kiit.png";
import oxfordImg from "../assets/oxford.png";

const education = [
  {
    degree: "B.Tech in Computer Science Engineering",
    school: "Kalinga Institute of Industrial Technology, Bhubaneswar",
    date: "2022 – 2026",
    points: [
      ""
    ],
    image: kiitLogo,  
  },
  {
    degree: "10th & 12th (CBSE Board)",
    school: "Oxford Senior Secondary School",
    date: "",
    points: [
      "12th Percentage: 91.6%",
      "10th Percentage: 91.6%",
    ],
    image: oxfordImg,  
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
    name: "Mental Health Predictor",
    description: "This AI-powered web app helps users assess potential mental health conditions through a simple questionnaire. Built using Streamlit and a trained machine learning model, it provides real-time insights to promote mental well-being and early awareness.",
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "Streamlit", color: "green-text-gradient" },
      { name: "Machine Learning", color: "pink-text-gradient" },
    ],
    image: gearXpert,
    source_code_link: "https://github.com/Shikha-9/MOOD-MATE",
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
    image: project3,
    source_code_link: "https://github.com/Shikha-9/Swasthya-Pragati",
  },
];


export { services, technologies, experiences, education, projects };
