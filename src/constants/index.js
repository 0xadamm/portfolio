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
  solidity,
  sss,
  cheetah,
  baddies,
} from "../assets";

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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Mobile Developer",
    icon: mobile,
  },
  {
    title: "Blockchain Developer",
    icon: backend,
  },
  {
    title: "Digital Marketing Specialist",
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
    name: "solidity",
    icon: solidity,
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
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Three JS",
    icon: threejs,
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
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Strategic Marketing Specialist",
    company_name: "Raycon Global",
    icon: starbucks,
    iconBg: "#383E56",
    date: "June 2019 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Project Manager",
    company_name: "Ryder Media",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "November 2021 - November 2022",
    points: [
      "Spearheaded the development of game assets for a blockchain game utilizing Blender and Unreal Engine. ",
      "Built responsive & dynamic web pages using React & Tailwind CSS",
      "Managed production deployment with Github, Netlify, and Vercel",
      "Deployed & tested Solidity smart contracts using Hardhat & Truffle",
      "Acquired the ability to interface with smart contracts from a front end using Ethers.js",
      "Developed proficiency in utilizing 3D elements in the browser using Three.js & React Three Fiber",
    ],
  },
  {
    title: "Full Stack Blockchain Developer",
    company_name: "Fractal Trading",
    icon: shopify,
    iconBg: "#383E56",
    date: "June 2020 - November 2021",
    points: [
      "Crafted and implemented custom Discord bots using discord.js empowering users to perform routine tasks with automation.",
      "Implemented a successful project management system to prioritize and organize company goals and objectives.",
      "Designed UI components and interactive prototypes using Figma",
      "Effectively brought Figma designs to life by transitioning them to a fully functional and visually appealing web app.",
      "Developed and implemented a Node.js script that effectively randomized PNG layers in the Canvas.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image:
      "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image:
      "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Secret Snail Society",
    description:
      "4444 Secret Snails that live on the Ethereum blockchain are here to travel the multiverse of swamps Secret Snails believe in creating a unique environment and community while combining the physical and digital worlds in a way that enables all secret snails to to connect with each other create strong friendships ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "solidity",
        color: "pink-text-gradient",
      },
    ],
    image: sss,
    source_code_link: "https://github.com/",
  },
  {
    name: "Cheetah Gang",
    description:
      "Forward to New Year 2030, and these fierce felines that were once agile have become lazy, slow and clumsy on the planet. And yes, these elegant animals are racing towards extinction on our planet. Very few cheetahs are left on the planet due to hunting by humans, climate change and habitat destruction. Due to these reasons, the population of cheetahs is decreasing day by day. ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "solidity",
        color: "pink-text-gradient",
      },
    ],
    image: cheetah,
    source_code_link: "https://github.com/",
  },
  {
    name: "Blockchain Baddies",
    description:
      "The Blockchain Baddiues are the hottest NFTs on the blockchain. We're a collection of 10,000 unique NFTs who rule the under world off the ETH blockchain. Ownership includes creative/ commercial rights of your Baddie.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "solidity",
        color: "pink-text-gradient",
      },
    ],
    image: baddies,
    source_code_link: "https://github.com/",
  },
];

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
};
