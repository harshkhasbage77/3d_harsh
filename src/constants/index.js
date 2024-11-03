import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
    whatsapp,
    rikaar,
    dynamite,
    bvision,
    songdew,
    metadrob,
    remotion,
    threejs
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: remotion,
        name: "Remotion",
        type: "Animation",
    },
    {
        imageUrl: threejs,
        name: "Three.js",
        type: "3D Graphics",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Frontend Developer",
        company_name: "Rikaar Films",
        icon: rikaar,
        iconBg: "#d2b48c",
        date: "October 2022 - Jan 2023",
        points: [
            "Created a captivating portfolio website for the photographer and successfully served as a front-end developer",
            "Utilized HTML, CSS, and JavaScript to develop the website, ensuring it showcased the photographer's stunning work",
            "To enhance the design process, I employed Figma for understanding the design requirements",
            "Used Bootstrap framework to assure that the website seamlessly adapted to different devices, ensuring an enhanced user experience",
            "Diligently tracked the website's progress across various versions using Git and GitHub",
            "After completing the development phase, I ensured the website was accessible to users and had a unique online presence",
            "Deployed the website on GoDaddy hosting platform, with the domain obtained from the same",
        ]
    },
    {
        title: "Full Stack Developer",
        company_name: "Dynamite Technology Pvt Ltd",
        icon: dynamite,
        iconBg: "#fbc3bc",
        date: "December 2022 - April 2023",
        points: [
            "Collaborated as a full stack developer at Dynamite Technology Pvt Limited, focused on developing a robust Learning Management System (LMS).",
            "Utilized React.js for the frontend and Node.js for the backend, revamping the frontend interface and seamlessly integrating it with the backend.",
            "Designed and implemented key frontend components, including a visually appealing landing page, user-friendly login/signup pages, interactive dashboards, engaging courses/games pages, and an edit personal info details page.",
            "Integrated various React libraries, such as Zalter Identity for user authentication, Emotion for styling, Testing Library to ensure application reliability, React-countdown-circle-timer for visual enhancements, React-hook-form for efficient form integration, React-player for educational content playback, Recharts for displaying student progress charts, Sweetalert for responsive alerts, Web-vitals for performance analysis, and React Redux for state management.",
            "Ensured a seamless user experience by incorporating a performance card displaying students' scores and progress details.",
            "Employed Web-vitals to measure and optimize the application's performance, enhancing overall user satisfaction.",
            "Contributed to a comprehensive Learning Management System, facilitating effective education delivery and improving student engagement.",
        ],
    },
    {
        title: "React Native Developer",
        company_name: "Bvision Technologies",
        icon: bvision,
        iconBg: "#89cff0",
        date: "May 2023 - June 2023",
        points: [
            "Developed community emergency application using React Native for public safety, enabling instant PUSH notifications to user groups",
            "Utilized Firebase for Authentication, Messaging, and real-time emergency alerts, effectively enhancing security during critical situations",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Product Developer",
        company_name: "Songdew",
        icon: songdew,
        iconBg: "#0037ff",
        date: "May 2024 - July 2024",
        points: [
            "Developed an online video editor for the Track Tales feature using the Next.js framework, enabling artists to create videos sharing their song inspirations.",
            "Utilized MobX and Context API for efficient state management, and integrated React/ffmpeg and MediaRecorder API for video processing, recording, and editing.",
            "Implemented HTML5 Canvas for custom video rendering and developed real-time video preview and playback features to enhance user experience.",
            "Created custom video filters and effects, ensuring high-quality video output and creative flexibility.",
            "Ensured code scalability and maintainability through proper documentation, code reviews, and Agile collaboration, using Git for version control.",
        ],
    },
    {
        title: "Three.js Developer",
        company_name: "Metadrob",
        icon: metadrob,
        iconBg: "#000000",
        date: "July 2024 - Present",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
];

    const phoneNumber = '7030067932';
    const defaultMessage = `Hi Harsh! I saw your 3D portfolio. I would like to talk to you about a project. My name is [Your Name].`;


export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: `tel:+91${phoneNumber}`,
    },
    {
        name: 'WhatsApp',
        iconUrl: whatsapp,
        link: `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`,
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/harshkhasbage77',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/harshkhasbage77',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Amazon Price Tracker',
        description: 'Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.',
        link: 'https://github.com/adrianhajdin/pricewise',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Full Stack Threads Clone',
        description: 'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
        link: 'https://github.com/adrianhajdin/threads',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Car Finding App',
        description: 'Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.',
        link: 'https://github.com/adrianhajdin/project_next13_car_showcase',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Full Stack Instagram Clone',
        description: 'Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.',
        link: 'https://github.com/adrianhajdin/social_media_app',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Real-Estate Application',
        description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
        link: 'https://github.com/adrianhajdin/projects_realestate',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'AI Summarizer Application',
        description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
        link: 'https://github.com/adrianhajdin/project_ai_summarizer',
    }
];