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

    coursera,
    factoria,
    inkor,
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
        title: "Full Stack Developer Bootcamp",
        company_name: "Factoria F5",
        icon: factoria,
        iconBg: "#DF01A5",
        date: "Feb 2022 - Ago 2022",
        points: [
            "Agile Methodology: Project methodology through group management tools, Collaborative work, Iterative and incremental development,Test Driven Development (TDD).",
            "UX/UI: User Experience (UX), Component-based interface design (UI), Prototyping and user testing, Knowledge of Design tools",
            "Front-end : Responsive web design and layout, Web development with HTML/CSS, Javascript and PHP frameworks and reactive programming.",
            "Back-end: Use of object-oriented languages, Design and implementation of REST APIs, Database development, Introduction of TEST.",
        ],
    },
    {
        title: "Google IT Support Professional Course",
        company_name: "Coursera Google",
        icon: coursera,
        iconBg: "#FF00BF",
        date: "Apr 2022 - Oct 2023",
        points: [
            "Basics of Technical Assistance in Technological field. The different facets of information technology such as computer hardware and software, the Internet, troubleshooting and customer service.",
            "The bits and bytes of Computer Networks. The fundamentals of modern networking technologies and protocols to an overview of the cloud, practical applications and network troubleshooting",
            "Operating Systems: Becoming an Advanced User. The main components of an operating system and how to perform critical tasks such as managing software and users, and configuring hardware",
            "IT infrastructure Systems and Services Management. The infrastructure services that keep all organizations, large and small, up and running. cloud configurations, infrastructure and resource management",
            "Cyber security: Defense against digital dark arts. The three information security systems: authentication, authorization and accounting. Network security solutions, ranging from firewalls to Wi-Fi encryption options.",
        ],
    },
    {
        title: "Java Backend Bootcamp",
        company_name: "Inkor Formación",
        icon: inkor,
        iconBg: "#DF01A5",
        date: "Nov 2022 - Mar 2023",
        points: [
            "Fundamental concepts such as data, algorithms and programs are learned, as well as programming paradigms and programming languages. Program quality is addressed and development tools and environments are explored.",
            "The structure and fundamental building blocks of Java, including characters, data types, literals and identifiers, such as variables, memory storage, constants and type conversions.",
            "History and basic principles of object orientation. Classes, objects and the creation of attributes, methods and constructors are explored. Analyzing access control and the use of inner classes.",
            "Characteristics, constructors and object instantiation. Comparison of objects, use of methods, handling of parameters and return values, and employability of static methods and predefined classes, destruction of objects and the release of memory.",
            "Use of control structures and exception handling, selection, repetition and jump structures. Exception handling, exception hierarchies and the use of assertions. Advanced class control, such as inheritance, method overwriting, polymorphism, interfaces and generic classes and types.",
        ],
    },
    {
        title: "Unity Game Programming",
        company_name: "Unity Learn",
        icon: unity,
        iconBg: "#DF01A5",
        date: "Mar 2023 - Today",
        points: [
            "Create the scene flow in an application state, implement data persistence across scenes and user sessions.",
            "Maximize code efficiency by correctly executing coding best practices and Debug performance issues.",
            "Analyze the principal pillars of object-oriented programming. Write efficient, organized, and comprehensible code by correctly implementing the principles of object-oriented programming",
            "Use common logic structures to control the execution of code, writen code that utilizes the various Unity APIs Implement appropriate data types and integrates into an existing system. Implementing a code style that is efficient and easy to read prototyping new concepts.",
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