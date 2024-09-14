import {
  facebook,
  instagram,
  linkedin,
  twitter,
  robel,
  abigel,
  dani,
  setota,
  image,
  ananya,
  nahom,
} from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "services",
    title: "Services",
  },
  {
    id: "team",
    title: "Team",
  },
  // {
  //   id: "https://www.linkedin.com/company/sydekse",
  //   title: "LinkedIn",
  // },
];

export const footerLinks = [
  {
    title: "Explore",
    links: [
      {
        name: "About Us",
        links: "./about",
      },
      {
        name: "Services",
        links: "./services",
      },
      {
        name: "Teams",
        links: "./team",
      },
    ],
  },
  {
    title: "Contact",
    links: [
      {
        name: "Email",
        links: "https://mail.google.com/mail/",
      },
      {
        name: "Phone",
        links: "+251 98765432",
      },
      {
        name: "Address",
        links:
          "https://www.google.com/maps/place/16192+Coastal+Hwy,+Lewes,+DE+19958,+USA/@38.7646424,-75.214426,17z/data=!3m1!4b1!4m6!3m5!1s0x89b8b90d96ae559b:0xa6cd79715d5b2e23!8m2!3d38.7646382!4d-75.2118511!16s%2Fg%2F11c4pcz5z3?entry=ttu",
      },
      {
        name: "Linkdin",
        links: "https://www.linkedin.com/company/sydekse",
      },
    ],
  },
  {
    title: "Documentaions",
    links: [
      {
        name: "Terms of Services",
        link: "#",
      },
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/",
  },
  {
    id: "social-media-3",
    icon: twitter,
    link: "https://www.twitter.com/",
  },
  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/company/sydekse",
  },
];

export const founderInfo = [
  {
    id: 2,
    picture: dani,
    name: "Daniel Solomom",
    position: "COO",
    description:
      "Overseeing Product generation, Marketing, and Compnay Strategy.",
  },
];

export const teamInfo = [
  {
    id: 1,
    photo: image,
    name: "Michael Seyoum",
    position: "Creative Director",
    description: "Development of company assets and Brand deferentiation.",
  },
  {
    id: 2,
    photo: peter,
    name: "Petros Woldu",
    position: "DevOps",
    description: "Ai and Machine Learning",
  },
  {
    id: 3,
    photo: nahom,
    name: "Nahom Teguade",
    position: "System Designer",
    description: "Strategy centric product development.",
  },
];

export const teamSkill = [
  {
    id: 1,
    skills: "Figma",
    value: 95,
  },

  {
    id: 2,
    skills: "API Integration",
    value: 88,
  },
  {
    id: 3,
    skills: "DataBase Integration",
    value: 85,
  },
];
