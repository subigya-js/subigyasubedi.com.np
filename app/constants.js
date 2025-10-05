import { CiMail } from "react-icons/ci";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import futurenseLogo from "./assets/Futurense.jpg";
import jainlogo from "./assets/Jain.png";
import photo from "./assets/Photo.jpg";
import stlawrencelogo from "./assets/stlawrence.jpg";
import ukumiLogo from "./assets/ukumi.jpeg";

export const about = {
  image: photo,
  name: "Subigya",
  desc: "Software Engineer | Full Stack Developer | AI Enthusiast & Researcher",
};

export const resume = "https://drive.google.com/file/d/1mgFsU2Mf9wOO0enE01w80w15qJ4sgGOM/view?usp=sharing"

export const skills = [
  "JavaScript",
  "TypeScript",
  "Python",
  "React",
  "NextJS",
  "NodeJS",
  "ExpressJS",
  "Golang",
  "Gin",
  "MongoDB",
  "PostgreSQL",
  "Git",
  "GitHub",
  "Postman",
  "Supabase",
  "Vercel",
  "Restful APIs",
];

export const education = [
  {
    id: "1",
    name: "BE/BTech - Computer Science and Engineering",
    institution: "JAIN (Deemed-to-be University), Bangalore, India",
    duration: "2021 - 2025",
    cgpa: "8.94/10",
    logo: jainlogo,
  },
  {
    id: "2",
    name: "Secondary Education (+2) - Science",
    institution: "St. Lawrence Secondary School, Kathmandu, Nepal",
    duration: "2018 - 2020",
    cgpa: "3.37/4",
    logo: stlawrencelogo,
  },
];

export const projects = [
  // {
  //   id: "ae",
  //   name: "Attend Ease",
  //   desc: "A full stack real-time face recognition attendance system that uses browser-based face detection with Hugging Face Transformers.js, enabling secure, client-side authentication without server dependencies.",
  //   repo: "https://github.com/subigya-js/attend-ease",
  //   isPrivate: false,
  //   deploy: "https://attend-ease-subigya.vercel.app/",
  //   skills: ["React", "NextJS", "ExpressJS", "MongoDB", "Transformers.js"],
  // },
  {
    id: "pa",
    name: "Pasal",
    desc: "A full-stack e-commerce web app to browse, buy, and sell sports jerseys online. Built for smooth shopping and easy admin management.",
    repo: "https://github.com/subigya-js/pasal",
    isPrivate: true,
    deploy: "https://pasal-subigya.vercel.app/",
    skills: ["React", "NextJS", "Golang", "Gin", "Vercel", "MongoDB"],
  },
  {
    id: "at",
    name: "Audio Transcriber",
    desc: "A browser-based web application utilizing Hugging Face Transformers.js for client-side speech-to-text transcription with Whisper and real-time summarization using DistilBART models.",
    repo: "https://github.com/subigya-js/audio-transcriber",
    isPrivate: false,
    deploy: "https://audio-transcriber-subigya.vercel.app/",
    skills: ["React", "NextJS", "Whisper", "DistilBART", "Transformers.js"],
  },
  {
    id: "et",
    name: "Expense Tracker",
    desc: "A full-stack application that enables users to categorize income and expenses, create custom transaction reports, visualize yearly expenses with bar graphs, and monitor financial trends for smarter budgeting.",
    repo: "https://github.com/subigya-js/expense-tracker",
    isPrivate: false,
    deploy: "https://expense-tracker-subigya.vercel.app/",
    skills: ["React", "NextJS", "ExpressJS", "MongoDB", "Chart.js"],
  },
  {
    id: "ct",
    name: "Crypto Tracker",
    desc: "A Web Application that allows users to search and view detailed market data of cryptocurrencies, including daily statistics and interactive line charts.",
    repo: "https://github.com/subigya-js/Cypto-Tracker",
    isPrivate: false,
    deploy: "https://crypto-tracker-subigya.netlify.app/",
    skills: ["React", "NextJS", "Chart.js", "RESTful APIs"],
  },
];

export const links = [
  {
    id: "gh",
    name: "GitHub",
    link: "https://github.com/subigya-js",
    icon: <FaGithub size={40} />,
    color: "#0a0a0a",
  },
  {
    id: "li",
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/subigya-js/",
    icon: <FaLinkedinIn size={40} />,
    color: "#3e65cf",
  },
  {
    id: "gm",
    name: "Gmail",
    link: "mailto:contact@subigyasubedi.com.np",
    icon: <CiMail size={40} />,
    color: "#03827e",
  },
  {
    id: "x",
    name: "X",
    link: "https://x.com/subigya_js",
    icon: <FaXTwitter size={40} />,
    color: "#657786",
  },
];

export const experiences = [
  {
    id: "1",
    role: "Frontend Engineer",
    company: "Ukumi",
    duration: "Oct 2024 - Oct 2025",
    location: "California, USA (Remote)",
    desc: "Built production-ready applications, developing responsive interfaces, integrating ML-driven video editing APIs, optimizing performance, and collaborating with cross-functional teams for scalable solutions.",
    logo: ukumiLogo,
    skills: ["TypeScript", "React", "NextJS", "Transformers.js", "CI/CD"],
  },
  {
    id: "2",
    role: "Frontend Developer Intern",
    company: "Futurense Technologies",
    duration: "Jan 2024 - May 2024",
    location: "Bangalore, India",
    desc: "Contributed to IIT Jodhpur website development by building responsive interfaces, optimizing performance, and collaborating with senior developers to deliver a production-ready solution.",
    logo: futurenseLogo,
    skills: ["React", "JavaScript", "Tailwind CSS", "RESTful APIs", "Git"],
  },
];
