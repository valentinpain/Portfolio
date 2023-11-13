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
  csharp,
  meta,
  starbucks,
  tesla,
  shopify,
  java,
  ore,
  greenshift,
  pythonproject,
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
  }
];

const services = [
  {
    title: "Développeur Frontend",
    icon: web,
  },
  {
    title: "Développeur Backend",
    icon: mobile,
  },
  {
    title: "Développeur applicatif",
    icon: backend,
  },
  {
    title: "Apprenti designer",
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
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "c#",
    icon: csharp
  },
  {
    name: "java",
    icon: java
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  }
];

const experiences = [
  {
    title: "Développeur Full-Stack (ERP)",
    company_name: "Thales DIS France",
    icon: thales,
    iconBg: "#28256c",
    date: "Juillet 2022 - Septembre 2023",
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
      "Développement de dashboards BI pour des projets clients avec Microsoft Power BI.",
    ],
  },
];

const projects = [
  {
    name: "Green Shift",
    description:
      "Site web créé pour la conférence de présentation de l'association Green Shift, engagée pour l'environnement et le climat.",
    tags: [
      {
        name: "next.js",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      }
    ],
    image: greenshift,
    source_code_link: "https://github.com/valentinpain/Greenshift",
  },
  {
    name: "Ore",
    description:
      "Une application bureautique visant à aider tout utilisateur à planifier l'ensemble de ses tâches quotidiennes.",
    tags: [
      {
        name: "C#",
        color: "blue-text-gradient",
      },
      {
        name: "WPF",
        color: "green-text-gradient",
      },
      {
        name: "SQL",
        color: "pink-text-gradient",
      },
    ],
    image: ore,
    source_code_link: "https://github.com/valentinpain/Ore",
  },
  {
    name: "Folder sorter",
    description:
      "Script permettant de grouper les fichiers d'un même dossier en fonction de leur extension (png, txt, ...).",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "script",
        color: "green-text-gradient",
      }
    ],
    image: pythonproject,
    source_code_link: "https://github.com/valentinpain/Folder-sorter",
  },
];

export { services, technologies, experiences, projects };
