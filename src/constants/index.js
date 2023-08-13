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
    threejs,
    Bell_logo,
    Lyriks,
    Title_Exercise,
    Finanseer,
    AdminApp,
    RealEstateApp,
    adoptapet,
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
    // {
    //   title: "React.js Developer",
    //   company_name: "Starbucks",
    //   icon: starbucks,
    //   iconBg: "#383E56",
    //   date: "March 2020 - April 2021",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
    // {
    //   title: "React Native Developer",
    //   company_name: "Tesla",
    //   icon: tesla,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2021 - Feb 2022",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
    // {
    //   title: "Web Developer",
    //   company_name: "Shopify",
    //   icon: shopify,
    //   iconBg: "#383E56",
    //   date: "Jan 2022 - Jan 2023",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
    {
      title: "Full Stack Developer",
      company_name: "Bell Canada",
      icon: Bell_logo,
      iconBg: "#E6DEDD",
      date: "March 2023 - Present",
      points: [
        "Directed full-stack web application development using HTML, JavaScript, CSS, and Java, ensuring high-quality code delivery.",
        "Collaborated with cross-functional teams to design and implement scalable software solutions,fostering innovation.",
        "Implemented comprehensive code review processes to maintain code quality standards.",
        "Actively participated in Agile development processes, ensuring streamlined project execution.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Justin proved me wrong.",
      name: "Sara Lee",
      // designation: "CFO",
      // company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Justin does.",
      name: "Chris Brown",
      // designation: "COO",
      // company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Justin optimized our website, our traffic increased by 50%. We can't thank him enough!",
      name: "Lisa Wang",
      // designation: "CTO",
      // company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Lyriks",
      description:
        "Web-based platform that allows users to search, play, and sing along with their favorite artists.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "rapidApi",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: Lyriks,
      source_code_link: "https://github.com/threejay20/Lyriks.git",
    },
  
    {
      name: "Exercise App",
      description:
        "Web-based platform that allows users to search, learn, and watch specific exercises to ensure maximum fitness success.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "rapidApi",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: Title_Exercise,
      source_code_link: "https://gym-exercises-threejay20.vercel.app",
    },
    {
      name: "Finanseer",
      description:
        "Web application that keeps track of companies profits as well as predicts future revenue through simple Machine Learning.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "Typescript",
          color: "green-text-gradient",
        },
        {
          name: "Mongo-Db",
          color: "pink-text-gradient",
        },
        {
          name: "Node",
          color: "blue-text-gradient",
        }
      ],
      image: Finanseer,
      source_code_link: "https://github.com/threejay20/finance-app.git",
    },
    {
      name: "AdminApp",
      description:
        "Web application that helps manage a company's results",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Data Grid",
          color: "green-text-gradient",
        },
        {
          name: "Material UI",
          color: "pink-text-gradient",
        },
        {
          name: "Node",
          color: "blue-text-gradient",
        }
      ],
      image: AdminApp,
      source_code_link: "https://react-admin-threejay20.vercel.app",
    },
    {
      name: "Real Estate",
      description:
        "A comprehensive property listing site for any Real estate broker.",
      tags: [
        {
          name: "nextjs 13",
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
      image: RealEstateApp,
      source_code_link: "https://real-estate-6emyb9iyq-threejay20.vercel.app",
    },
    {
      name: "Adopt-A-Pet",
      description:
        "A listing of cute animals to which are available for adoption.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Node",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: adoptapet,
      source_code_link: "https://adopt-pet-pearl.vercel.app",
    },
  ];
  
  
  
  
  export { services, technologies, experiences, testimonials, projects };