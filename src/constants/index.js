import {
    game,
    student,
    tattoo,
    webb,
    me,

    github,
    menu,
    close,
    css,
    docker,
    figma,
    git,
    html,
    html5,
    bootstrap,
    java,
    jenkins,
    jest,
    jquery,
    json,
    javascript,
    kubernetes,
    laravel,
    linux,
    mongodb,
    mysql,
    nodejs,
    php,
    powershell,
    reactjs,
    redux,
    sass,
    tailwind,
    typescript,
    threejs,
    unity,
    vue,
    windows,
    xampp,

    meta,
    starbucks,
    tesla,
    shopify,
    etrivial,
    ggt,
    vet,
    
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
        icon: webb,
    },
    {
        title: "Game Developer",
        icon: game,
    },
    {
        title: "Programmer Student",
        icon: student,
    },
    {
        title: "Tattoo Artist",
        icon: tattoo,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html5,
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
        name: "Docker",
        icon: docker,
    },
    {
        name: "Java",
        icon: java,
    },
    {
        name: "Jenkins",
        icon: jenkins,
    },
    {
        name: "mySql",
        icon: mysql,
    },
    {
        name: "php",
        icon: php,
    },
    {
        name: "SaSS",
        icon: sass,
    },
    {
        name: "Unity",
        icon: unity,
    },
    {
        name: "Vue",
        icon: vue,
    },
];

const experiences = [
    {
        title: "React.js Developer",
        company_name: "Starbucks",
        icon: starbucks,
        iconBg: "#383E56",
        date: "March 2020 - April 2021",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "React Native Developer",
        company_name: "Tesla",
        icon: tesla,
        iconBg: "#E6DEDD",
        date: "Jan 2021 - Feb 2022",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Web Developer",
        company_name: "Shopify",
        icon: shopify,
        iconBg: "#383E56",
        date: "Jan 2022 - Jan 2023",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Full stack Developer",
        company_name: "Meta",
        icon: meta,
        iconBg: "#E6DEDD",
        date: "Jan 2023 - Present",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "",
        name: "",
        designation: "",
        company: "",
        image: "",
    },
    {
        testimonial:
            "",
        name: "",
        designation: "",
        company: "",
        image: "",
    },
    {
        testimonial:
            "",
        name: "",
        designation: "",
        company: "",
        image: "",
    },
];

const projects = [
    {
        name: "E-trivial",
        description:
            "Accompaniment of the board game in a mobile version, made in Vue3, digitizing the questions to keep them always updated through the Trivial API.",
        tags: [
            {
                name: "vue3",
                color: "blue-text-gradient",
            },
            {
                name: "api",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: etrivial,
        source_code_link: "https://github.com/TrivialF5/eTrivial",
    },
    {
        name: "GG Tournaments",
        description:
            "Game themed web application where events related to the world of e-sports can be published.",
        tags: [
            {
                name: "laravel",
                color: "blue-text-gradient",
            },
            {
                name: "mysql",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: ggt,
        source_code_link: "https://github.com/skyrosa/joc-project",
    },
    {
        name: "Vet Code",
        description:
            "VetCode is an application created for scheduling appointments at the reception desk of a veterinary clinic. In the application, you can create, save, edit and delete appointments that are kept reserved in a private database",
        tags: [
            {
                name: "php",
                color: "blue-text-gradient",
            },
            {
                name: "javascript",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: vet,
        source_code_link: "https://github.com/skyrosa/VetCode",
    },
];

export { services, technologies, experiences, testimonials, projects };