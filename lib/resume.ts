import {
  faHtml5,
  faCss3Alt,
  faJava,
  faPython,
  faJs,
  faAngular,
  faNodeJs,
  faReact,
  faGithub,
  faLinkedin,
  faInstagram,
  IconDefinition,
} from "@fortawesome/free-brands-svg-icons";
import { faKey, faEnvelope } from "@fortawesome/free-solid-svg-icons";

interface Skill {
  icon: IconDefinition | string;
  name: string;
  isDevicon?: boolean;
}

interface Project {
  title: string;
  description: string;
  projectUrl?: string;
  sourceUrl?: string;
}

interface Contact {
  icon: IconDefinition;
  link: string;
  tooltip: string;
}

export const skillList: Skill[] = [
  {
    icon: faHtml5,
    name: "HTML",
  },
  {
    icon: faCss3Alt,
    name: "CSS",
  },
  {
    icon: faJs,
    name: "Javascript",
  },
  {
    icon: faJava,
    name: "Java",
  },
  {
    icon: faPython,
    name: "Python",
  },
  {
    icon: "devicon-linux-plain",
    name: "Linux",
    isDevicon: true,
  },
  {
    icon: faNodeJs,
    name: "Node.js",
  },
  {
    icon: faAngular,
    name: "Angular",
  },
  { icon: faReact, name: "React" },
  {
    icon: "devicon-cplusplus-plain",
    name: "C++",
    isDevicon: true,
  },
];

export const projectList: Project[] = [
  {
    title: "MyMICDS.net",
    description: "An all-in-one platform for MICDS student life.",
    projectUrl: "https://mymicds.net",
    sourceUrl: "https://github.com/MyMICDS/",
  },
  {
    title: "BYO Style-Based GAN",
    description: "A simple implementation of StyleGAN using PyTorch.",
    sourceUrl: "https://github.com/MeMeBigProgrammer/BYO-GAN",
  },
];

export const linksList: Contact[] = [
  {
    icon: faGithub,
    link: "https://github.com/MeMeBigProgrammer",
    tooltip: "MeMeBigProgrammer",
  },
  { icon: faKey, link: "/pgp/key.txt", tooltip: "PGP Public Key" },
  {
    icon: faEnvelope,
    link: "mailto:mail@sambaumohl.me",
    tooltip: "mail@sambaumohl.me",
  },
  {
    icon: faLinkedin,
    link: "https://www.linkedin.com/in/sam-baumohl09",
    tooltip: "LinkedIn Profile",
  },
  {
    icon: faInstagram,
    link: "https://www.instagram.com/sam_b2327",
    tooltip: "@sam_b2327",
  },
];
