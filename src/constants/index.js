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
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    fitx,
    python,
    java,
    aws,
    graphql,
    express, 
    mysql
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
      id: "projects",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    }
  ];
  
  const services = [
    {
      title: "FrontEnd Developer",
      icon: web,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "App Developer",
      icon: mobile,
    }
    
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "Express JS",
      icon: express,
    },
    {
      name: "AWS",
      icon: aws,
    },
    {
      name: "GraphQL",
      icon: graphql,
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
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    }
  ];
  
  const experiences = [
    {
      title: "CBSE 12th Grade",
      company_name: " Ramjas School Pusa Road, New Delhi",
      icon: starbucks,
      iconBg: "#383E56",
      date: "Feb 2020 - July 2021",
      points: [
        "Passed with 95% in Commerce Stream with Information Practices.",
      ],
    },
    {
      title: "Bachelor of Computer Applications",
      company_name: "SICSR , Pune",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Sept 2021 - May 2024",
      points: [
        "Learned about various programming languages and technologies including Java, Python, HTML, CSS, JavaScript, React.js, Node.js, MongoDB, and more.",
        "Developed and deployed multiple web applications and projects using the MERN stack and other related technologies."
      ],
    },
    {
      title: "Web Developer Intern",
      company_name: "Orion Marine Concepts , Gurugram",
      icon: shopify,
      iconBg: "#ffffff",
      date: "Jan 2024 - June 2024",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    }
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
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
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "ImagifAI",
      description:
        "AI-powered SaaS platform that enables users to edit images with some cool features like background removal, object removal, and more.",
        site: "https://imagif-ai.vercel.app/",
      tags: [
        {
          name: "next.js",
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
      source_code_link: "https://github.com/Samyak-J7/imagifAI",
    },
    {
      name: "Simple Post App",
      description:
        "React app that allows users to create, read, update, and delete posts .It uses firebase for authentication and firestore for storing data and all operations.",
        site: "https://react-post-app-three.vercel.app/",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "firebase",
          color: "green-text-gradient",
        },
        {
          name: "typescript",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/Samyak-J7/react-post-app",
    },
    {
      name: "OI CHARTS",
      description:
        "Android app and website that provides option chain charts for stocks and indices. It also provides historical data and other related information.",
        site: "https://bit.ly/oicharts",
      tags: [
        {
          name: "Android Studio Java",
          color: "blue-text-gradient",
        },
        {
          name: "AWS",
          color: "green-text-gradient",
        },
        {
          name: "FastAPI",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/Samyak-J7/OI-CHART-APP-android",
    },
    {
      name: "FitX",
      description:
        "Front end web application to provide personalized workout plans, nutrition advice, expert tips and motivational content",
        site: "https://fitness-web-j8n5.vercel.app/",
      tags: [
        {
          name: "next.js",
          color: "blue-text-gradient",
        },
        {
          name: "Aceternity UI",
          color: "green-text-gradient",
        },
        {
          name: "Typescript",
          color: "pink-text-gradient",
        },
      ],
      image: fitx,
      source_code_link: "https://github.com/Samyak-J7/fitness_web",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };