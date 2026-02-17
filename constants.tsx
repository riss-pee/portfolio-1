
import { Education, Experience, Project, Skill, Certification } from './types';

export const PERSONAL_INFO = {
  name: "Rosangpuia Chhakchhuak",
  role: "MCA Student & Full-Stack Developer",
  email: "rspacck@gmail.com",
  phone: "+91 93623 00392",
  location: "Bengaluru, Karnataka",
  linkedin: "https://linkedin.com/in/rosangpuia-chhakchhuak",
  summary: "Highly motivated, friendly, and open-minded MCA student currently pursuing a Master of Computer Applications at Kristu Jayanti University. Possess strong time management skills with a solid foundation in Java, Python, HTML, CSS, and JavaScript, along with experience in backend and web application development."
};

export const EDUCATION_DATA: Education[] = [
  { year: "2023–2026", qualification: "MCA", institution: "Kristu Jayanti University, Bengaluru", percentage: "62.1%" },
  { year: "2021–2024", qualification: "BCA", institution: "Higher And Technical Institute, Mizoram", percentage: "85.1%" },
  { year: "2018–2020", qualification: "Class XII (Science)", institution: "Mount Carmel School", percentage: "58.4%" },
  { year: "2017–2018", qualification: "Class X", institution: "Holy Faith School", percentage: "79.6%" }
];

export const EXPERIENCE_DATA: Experience[] = [
  {
    company: "Y&Y Enterprise, Mizoram",
    role: "Backend Intern (Summer Project)",
    duration: "June – July 2025",
    description: [
      "Contributed to the backend team in the development of an online shopping platform.",
      "Worked on a WebApp supporting Android and iOS using HTML, CSS, JavaScript, and Firestore.",
      "Implemented secure transactions on the payment gateway using log monitor tracking."
    ]
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    title: "Jersey Apparel Mizoram (JAM)",
    category: "Full-Stack E-Commerce",
    description: "A premium e-commerce platform tailored for the football community in Mizoram. Features AI-powered content generation using Gemini.",
    tech: ["React 19", "Tailwind CSS", "Supabase", "PostgreSQL", "Gemini API"],
    image: "https://picsum.photos/seed/jam/800/600",
    live: "#",
    github: "#"
  },
  {
    title: "HomeCook",
    category: "Web Application",
    description: "A full-stack web application connecting home cooks with customers, featuring authentication, dynamic menus, and order management.",
    tech: ["Python", "Flask", "PostgreSQL", "JavaScript"],
    image: "https://picsum.photos/seed/homecook/800/600",
    live: "#",
    github: "#"
  },
  {
    title: "Church Ledger",
    category: "Mobile Application",
    description: "Built a mobile application using Flutter and Firestore for church offering and ledger management.",
    tech: ["Flutter", "Dart", "Firebase Firestore"],
    image: "https://picsum.photos/seed/church/800/600",
    github: "#"
  },
  {
    title: "IoT Security System",
    category: "Hardware/IoT",
    description: "Designed a laser-based security system using Arduino Nano, laser module, and photoresistor to prevent trespassing.",
    tech: ["Arduino Nano", "C++", "Electronics"],
    image: "https://picsum.photos/seed/iot/800/600"
  },
  {
    title: "Roster Randomizer",
    category: ".NET Application",
    description: "Developed a roster randomizer using VB.NET and Microsoft SQL for automatic scheduling of organization members.",
    tech: ["VB.NET", "Microsoft SQL Server"],
    image: "https://picsum.photos/seed/roster/800/600"
  }
];

export const SKILLS_DATA: Skill[] = [
  { name: "Java", level: 90, category: "Language" },
  { name: "Python", level: 85, category: "Language" },
  { name: "JavaScript", level: 80, category: "Language" },
  { name: "React 19", level: 85, category: "Frontend" },
  { name: "Tailwind CSS", level: 90, category: "Frontend" },
  { name: "HTML/CSS", level: 95, category: "Frontend" },
  { name: "Flutter", level: 75, category: "Frontend" },
  { name: "Supabase", level: 80, category: "Backend" },
  { name: "Firebase", level: 85, category: "Backend" },
  { name: "SQL", level: 80, category: "Backend" },
  { name: "Git", level: 85, category: "Tool" },
  { name: "AI/ML (Intro)", level: 70, category: "Other" }
];

export const CERTIFICATIONS: Certification[] = [
  { title: "Programming Using Java", description: "Deep understanding of OOP concepts, multithreading, and collections." },
  { title: "Unix Linux OS – Unix Fundamentals", description: "Hands-on experience with file systems, shell commands, and process management." },
  { title: "Java Servlets Tutorial", description: "Experience in dynamic web applications and backend integration." },
  { title: "Introduction to Artificial Intelligence", description: "Knowledge of intelligent agents and basic machine learning." }
];

export const RESPONSIBILITIES = [
  "Team Leader, Tech Club at Hill Fest – 2023",
  "Assistant Secretary, HATIM Evangelical Wing – 2023–2024",
  "Organizer, Hill Fest",
  "Coordinator, Spiritual Nurturing Program, HATIM College"
];
