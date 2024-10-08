import AstroJS from "../components/icons/AstroJS.astro";
import Bootstrap from "../components/icons/Bootstrap.astro";
import CSS from "../components/icons/CSS.astro";
import Code from "../components/icons/Code.astro";
import Console from "../components/icons/Console.astro";
import ESlint from "../components/icons/ESlint.astro";
import Email from "../components/icons/Email.astro";
import Expo from "../components/icons/Expo.astro";
import ExpressJS from "../components/icons/ExpressJS.astro";
import Firebase from "../components/icons/Firebase.astro";
import Git from "../components/icons/Git.astro";
import Github from "../components/icons/Github.astro";
import HTML from "../components/icons/HTML.astro";
import JavaScript from "../components/icons/JavaScript.astro";
import Linkedin from "../components/icons/Linkedin.astro";
import MongoDB from "../components/icons/MongoDB.astro";
import MySQL from "../components/icons/MySQL.astro";
import NextJS from "../components/icons/NextJS.astro";
import NodeJS from "../components/icons/NodeJS.astro";
import Phone from "../components/icons/Phone.astro";
import Python from "../components/icons/Python.astro";
import ReactJS from "../components/icons/ReactJS.astro";
import Sass from "../components/icons/Sass.astro";
import TailwindCSS from "../components/icons/TailwindCSS.astro";
import TypeScript from "../components/icons/TypeScript.astro";
import ViteJS from "../components/icons/ViteJS.astro";
import Gemini from "../components/icons/Gemini.astro";
import Shadcn from "../components/icons/Shadcn.astro";
import NextAuth from "../components/icons/NextAuth.astro";
import IaSdk from "../components/icons/IaSdk.astro";

export const NavLinks = [
  { name: "Home", path: "#home" },
  { name: "Projects", path: "#porfolio" },
  { name: "About Me", path: "#about" },
  { name: "Tech Stack", path: "#stack" },
];

export const HeroTexts = [
  {
    role: "Frontend Developer",
    name: "Carlos Bolaño;",
    description:
      "Colombian Web Developer with more than 2 years of experience",
  },
];

export const TAGS = {
  HTML: {
    name: "HTML",
    icon: HTML,
  },
  CSS: {
    name: "CSS",
    icon: CSS,
  },
  JavaScript: {
    name: "JavaScript",
    icon: JavaScript,
  },
  React: {
    name: "React.js",
    icon: ReactJS,
  },
  Tailwind: {
    name: "Tailwind CSS",
    icon: TailwindCSS,
  },
  Astro: {
    name: "Astro.js",
    icon: AstroJS,
  },
  Vite: {
    name: "Vite.js",
    icon: ViteJS,
  },
  ESlint: {
    name: "ESlint",
    icon: ESlint,
  },
  MongoDB: {
    name: "MongoDB",
    icon: MongoDB,
  },
  Node: {
    name: "Node.js",
    icon: NodeJS,
  },
  Express: {
    name: "Express.js",
    icon: ExpressJS,
  },
  ReactNative: {
    name: "React Native",
    icon: ReactJS,
  },
  Git: {
    name: "Git",
    icon: Git,
  },
  Expo: {
    name: "Expo",
    icon: Expo,
  },
  MySQL: {
    name: "MySQL",
    icon: MySQL,
  },
  Sass: {
    name: "Sass",
    icon: Sass,
  },
  NextJS: {
    name: "Next.js",
    icon: NextJS,
  },
  Bootstrap: {
    name: "Bootstrap",
    icon: Bootstrap,
  },
  Python: {
    name: "Python",
    icon: Python,
  },
  TypeScript: {
    name: "TypeScript",
    icon: TypeScript,
  },
  Firebase: {
    name: "Firebase",
    icon: Firebase,
  },
  Email: {
    name: "Email",
    icon: Email,
  },
  Github: {
    name: "Github",
    icon: Github,
  },
  Linkedin: {
    name: "Linkedin",
    icon: Linkedin,
  },
  Phone: {
    name: "Phone icon",
    icon: Phone,
  },
  Code: {
    name: "Code icon",
    icon: Code,
  },
  Console: {
    name: "Console icon",
    icon: Console,
  },
  Gemini: {
    name: "Google Gemini",
    icon: Gemini,
  },
  Shadcn: {
    name: "Shadcn",
    icon: Shadcn,
  },
  NextAuth: {
    name: "NextAuth",
    icon: NextAuth,
  },
  IaSdk: {
    name: "The AI SDK from Vercel",
    icon: IaSdk,
  },
};

export const TechStack = [
  TAGS.HTML,
  TAGS.CSS,
  TAGS.JavaScript,
  TAGS.TypeScript,
  TAGS.Astro,
  TAGS.Sass,
  TAGS.React,
  TAGS.Vite,
  TAGS.ESlint,
  TAGS.Tailwind,
  TAGS.Bootstrap,
  TAGS.NextJS,
  TAGS.Express,
  TAGS.Node,
  TAGS.Python,
  TAGS.MySQL,
  TAGS.MongoDB,
  TAGS.ReactNative,
  TAGS.Firebase,
  TAGS.Expo,
  TAGS.Git,
];

export const ContactLinks = [
  {
    name: "Email",
    link: "mailto:carlostutos828@gmail.com",
    icon: TAGS.Email.icon,
  },
  {
    name: "Github",
    link: "https://github.com/Carlos-Bolano",
    icon: TAGS.Github.icon,
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/carlos-bola%C3%B1o-716926191/",
    icon: TAGS.Linkedin.icon,
  },
];

export const projects = [
  {
    title: "Moodflix",
    description:
      "An AI-powered movie recommendation app that analyzes users' emotional state from their text input and suggests movies that match their mood. The app uses the ia sdk from vercel and the Google's Gemini API to interpret emotions and recommends movies, providing personalized explanations for each movie",
    link: "https://moodflix-by-calisto.vercel.app",
    image: "assets/images/project-05.webp",
    technologies: [
      TAGS.NextJS,
      TAGS.React,
      TAGS.Tailwind,
      TAGS.ESlint,
      TAGS.Gemini,
      TAGS.IaSdk
    ],
    github: "https://github.com/Carlos-Bolano/moodflix",
    recent: true,
  },
  {
    title: "Jadirh Gonzalez Poems",
    description:
      "Jadirh González Poems is a poetry blog that I had the pleasure of designing and developing for a client who is passionate about writing. Built with Next.js and TypeScript, the site offers an interactive and dynamic experience, where fans can explore, comment, and like Jadirh González's poems.",
    link: "https://jadirhgonzalezpoems.vercel.app",
    image: "assets/images/project-06.webp",
    technologies: [
      TAGS.NextJS,
      TAGS.Shadcn,
      TAGS.TypeScript,
      TAGS.NextAuth,
      TAGS.React,
      TAGS.Tailwind,
      TAGS.ESlint,
      TAGS.MongoDB,
      
    ],
    github: "https://github.com/Carlos-Bolano/jadirhgonzalezpoems",
    recent: true,
  },
  {
    title: "Age Calculator",
    description:
      "My solution to an exciting challenge from Frontend Mentor, a platform that provides coding projects designed to improve skills in development, The main objective was to design and implement a user interface and calculation logic for an Age Calculator",
    link: "https://age--calculator.vercel.app/",
    image: "assets/images/project-04.webp",
    technologies: [
      TAGS.React,
      TAGS.TypeScript,
      TAGS.Tailwind,
      TAGS.Vite,
      TAGS.ESlint,
    ],
    github: "https://github.com/Carlos-Bolano/age-calculator",
    recent: false,
  },
  {
    title: "Task Manager",
    description:
      "Task management app built on the MERN stack (MongoDB, Express, React, Node.js). It features robust user authentication and full CRUD functionality, allowing users to manage and filter tasks by categories like work, study, or daily tasks. The clean, minimalist interface provides a smooth experience across all devices.",
    link: "https://manejador-de-tareas.vercel.app",
    image: "assets/images/project-02.webp",
    technologies: [
      TAGS.React,
      TAGS.Tailwind,
      TAGS.Vite,
      TAGS.ESlint,
      TAGS.Node,
      TAGS.Express,
      TAGS.MongoDB,
    ],
    github: "https://github.com/Carlos-Bolano/Task-Organizer",
    recent: false,
  },
  {
    title: "Travlog Landing Page",
    description:
      "I built this page based on a design made in figma that I found in the figma community, the design only had desktop views so I adapted it to mobile, I developed it with AstroJS and I learned some things about this framework so I had fun creating it",
    link: "https://travlog-website.vercel.app/",
    image: "assets/images/project-03.webp",
    technologies: [
      TAGS.HTML,
      TAGS.CSS,
      TAGS.JavaScript,
      TAGS.Astro,
      TAGS.Tailwind,
    ],
    github: "https://github.com/Carlos-Bolano/Travlog-Landing-Page",
    recent: false,
  },
  {
    title: "Believe in YourSelf",
    description:
      "Believe in YourSelf is a GYM web site, i have designed the interface with responsive design to work from desktop to mobile devices. This shows my focus on user experience.",
    link: "https://believe-in-yourself.netlify.app/",
    image: "assets/images/project-01.webp",
    technologies: [TAGS.HTML, TAGS.CSS, TAGS.JavaScript],
    github: "https://github.com/Carlos-Bolano/Believe_in_YourSelf",
    recent: false,
  },
];

export const Services = [
  {
    name: "Front-end Dev",
    description:
      "On the Frontend side I have experience using HTML, CSS, JavaScript, React, Bootstrap, TailwindCSS and Saas. I've built from simple websites to more complex web applications that connect to services through different APIs.",
    icon: TAGS.Code.icon,
  },
  {
    name: "Mobile Developer",
    description:
      "As a mobile developer, I bring experience in creating dynamic, easy-to-use applications using technologies such as Expo, React Native and Firebase. I leverage my web skills to design visually appealing interfaces. I have successfully developed mobile applications for iOS and Android platforms.",
    icon: TAGS.Phone.icon,
  },
  {
    name: "Back-end Dev",
    description:
      "As a backend developer, I have experience creating services using key technologies such as Node.js, Express, JSON Web Tokens (JWT), MongoDB, and MySQL. My main goal is to become a full-stack developer, so I am currently working on further enhancing my skills as a backend developer.",
    icon: TAGS.Console.icon,
  },
];
