import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  thales,
  aci,
  isii_tech
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "À propos",
  },
  {
    id: "work",
    title: "Travail",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  }
];

const experiences = [
  {
    title: "Développeur Full-Stack (ERP)",
    company_name: "Thales DIS France",
    icon: thales,
    iconBg: "#28256c",
    date: "March 2020 - April 2021",
    points: [
      "Écriture du cahier des charges complet avec les utilisateurs.",
      "Conception de l’ensemble du site (maquettage et user stories).",
      "Développement du site à l’aide du framework Symfony.",
      "Formation des utilisateurs à l’outil (transition des méthodes de travail).",
      "Maintenance du site et mise en place de fiches de suivi (retours) auprès des utilisateurs.",
      "Écriture complète de la documentation.",
      "Formation de mon remplaçant."
    ],
  },
  {
    title: "Développeur Full-Stack",
    company_name: "ACI",
    icon: aci,
    iconBg: "#ffffff",
    date: "Septembre 2021 - Février 2022",
    points: [
      "Écriture du cahier des charges complet avec l’équipe informatique.",
      "Conception de l’ensemble du site (maquettage et user stories).",
      "Développement du site à l’aide de Laravel et de Vue.js.",
      "Formation des utilisateurs à l’outil.",
      "Écriture de la documentation.",
      "Formation du personnel sur l’outil et les méthodes de développement."
    ],
  },
  {
    title: "Concepteur base de données",
    company_name: "Isii-Tech",
    icon: isii_tech,
    iconBg: "#ffffff",
    date: "Juillet 2021 - Août 2021",
    points: [
      "Conception de bases de données permettant de stocker des informations rapides au sein d’une ligne de production pour le client Stallergenes.",
      "Implémentation de ces bases de données (stockage en direct et bases d’archivages).",
      "Implémentation de scripts SQL pour le traitement, le stockage et l’archivage des informations.",
    ],
  },
  {
    title: "Apprenti développeur logiciel",
    company_name: "Isii-Tech",
    icon: isii_tech,
    iconBg: "#ffffff",
    date: "Janvier 2021 - Avril 2021",
    points: [
      "Développement de scripts VBA pour des projets clients.",
      "Développement d’une application en C# pour la gestion automatique des pointages.",
      "Développement d’application simples pour la gestion de divers rappels aux employés avec Microsoft Power Apps.",
      "Développement de dashboards BI pour des projet clients avec Microsoft Power BI.",
    ],
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, projects };
