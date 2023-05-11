import { Cloud } from "@react-three/drei";
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
    dhl,
    IT,
    Uni1,
    Unibremen,
    Wordpress,
    carrent,
    jobit,
    tripguide,
    threejs,
    cloud
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
      title: "Wordpress",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Network administrator",
      icon: creator,
    },
    {
      title: "Aws and Azure",
      icon: cloud
    }
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
      name: "Redux Toolkit",
      icon: redux,
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
      name: "Three JS",
      icon: threejs,
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
    },
  ];
  
  const experiences = [

    {
      title: "B.sc in Electronics and Telecommunication engineering",
      company_name: "Daffodil International University",
      icon: Uni1,
      iconBg: "#383E56",
      date: "Aprill 2015 - July 2019",
      points: [
        "Succesfully completed my Bachelor degree with 3.5 out of 4",
      ],
    },

    {
      title: "Wordpress developer",
      company_name: "Freelance",
      icon: Wordpress,
      iconBg: "#383E56",
      date: "March 2019 - December 2019",
      points: [
        "Developing and create web sites using Wordpress and other related technologies.",
        "Collaborating with others including designers,and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Dispatch IT suport",
      company_name: "Infosys",
      icon: IT,
      iconBg: "#E6DEDD",
      date: "September 2020 - December 2022",
      points: [
        "",
        "I help my team by doing range of IT task as a dispatch worker and going city to city in Germany.",
        "I worked Fossil store helped changing their router,Bauking deploying cisco meraki,helped indian team deploying SDWAN to their datacenter.",
      ],
    },
    {
      title: "Working Student",
      company_name: "DHL",
      icon: dhl,
      iconBg: "#383E56",
      date: "September 2020 - Jan 2022",
      points: [
        "I help DHL team by doing their logistic activities,sorting parcel by loading and unloading container",
      ],
    },
    {
      title: "M.sc in Communication and Information Technology",
      company_name: "University of Bremen",
      icon: Unibremen,
      iconBg: "#E6DEDD",
      date: "Aprill 2020 - 2023",
      points: [
        "I went to persue my M.sc in Germany but due to some family reason I had to discontinue my studies..",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Adnan proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Adnan does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Adnan optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
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
  
  export { services, technologies, experiences, testimonials, projects };