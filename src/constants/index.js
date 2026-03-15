import {
    mobile,
    backend,
    web,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    fitx,
    unstuff,
    unitydraw
   
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "skills",
      title: "Skills",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    }
  ];
  
  const services = [
    {
      title: "Full Stack Developer",
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

  const skills = [
    {
      category: "Frontend",
      color: "#56ccf2",
      items: ["TypeScript", "Angular JS", "React JS", "Redux", "Three JS", "Tailwind CSS", "HTML5"],
    },
    {
      category: "Backend",
      color: "#6ee7b7",
      items: ["Python", "Java", "Node JS", "Kotlin", "Socket.io"],
    },
    {
      category: "Database",
      color: "#f9a8d4",
      items: ["MySQL", "PostgreSQL", "MongoDB", "DynamoDB", "Firebase", "Convex"],
    },
    {
      category: "Frameworks",
      color: "#c4b5fd",
      items: ["Next JS", "Express JS", "Ktor", "Django", "Flask", "FastAPI"],
    },
    {
      category: "Cloud Services",
      color: "#fcd34d",
      items: ["AWS", "Microsoft Azure", "Heroku"],
    },
    {
      category: "DevOps & Tools",
      color: "#fb923c",
      items: ["AWS Lambda", "Docker", "AWS CodePipeline", "CodeBuild", "CloudWatch"],
    },
  ];
  
  const experiences = [
    {
      title: "Software Developer Engineer",
      company_name: "DZYLO",
      icon: shopify,
      iconBg: "#ffffff",
      date: "June 2024 - Present",
      type: "work",
      points: [
        "Joined as a Software Developer, initially focused on developing frontend UI using AngularJS and building APIs with Node.js and Ktor, using MySQL and DynamoDB as databases.",
        "Implemented license renewal API integrated with PhonePe SDK and automated account deactivation using AWS EventBridge, Lambda, and SES templated emails.",
        "Led development of a complex inventory management system utilizing PostgreSQL (for weighted full-text search), DynamoDB (for transactional data), Ktor, AWS RDS, OpenAI API, S3, and export generation (PDF/Excel).",
        "Gained hands-on experience with AWS CodePipeline, CodeBuild, CloudWatch, and cost optimization across AWS services.",
        "Promoted to Team Lead for one of the development teams, now managing a 5-member team, conducting daily scrums, and guiding system architecture and development workflows.",
        "Successfully led production database migration from MySQL RDS to PostgreSQL RDS, integrating Exposed ORM into the Ktor service for improved data operations.",
      ],
    },
    {
      title: "Master of Computer Applications",
      company_name: "Amity University, Noida",
      icon: tesla,
      iconBg: "#050816",
      date: "Aug 2024 - May 2026",
      type: "education",
      points: [
        "Pursuing MCA with focus on advanced software engineering, distributed systems, and cloud computing.",
        "Balancing academics alongside a full-time role as Software Developer Engineer at DZYLO.",
      ],
    },
    {
      title: "Bachelor of Computer Applications",
      company_name: "SICSR, Pune",
      icon: starbucks,
      iconBg: "#383E56",
      date: "Sept 2021 - May 2024",
      type: "education",
      points: [
        "Learned various programming languages and technologies including Java, Python, HTML, CSS, JavaScript, React.js, Node.js, MongoDB, and more.",
        "Developed and deployed multiple web applications and projects using the MERN stack and other related technologies.",
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
      name: "UnityDraw",
      description:
        "Realtime Collaborative whiteboard with video calling to create and edit objects and images with clerk for authentication.",
      site: "https://unitydraw.tech",
      tags: [
        { name: "next.js", color: "blue-text-gradient" },
        { name: "socket.io", color: "green-text-gradient" },
        { name: "express.js", color: "pink-text-gradient" },
      ],
      image: unitydraw,
      source_code_link: "https://github.com/Samyak-J7/unitydraw",
    },
    {
      name: "ImagifAI",
      description:
        "AI-powered SaaS platform for image editing with background removal, object removal, credit system via Stripe, and search query features.",
      site: "https://imagif-ai.vercel.app/",
      tags: [
        { name: "next.js", color: "blue-text-gradient" },
        { name: "mongodb", color: "green-text-gradient" },
        { name: "stripe", color: "pink-text-gradient" },
      ],
      image: carrent,
      source_code_link: "https://github.com/Samyak-J7/imagifAI",
    },
    {
      name: "UnStuff",
      description:
        "Simple and easy file storage web app to save and share files with others, fully responsive, built with Next.js and Convex.",
      site: "https://unstuff.vercel.app/",
      tags: [
        { name: "next.js", color: "blue-text-gradient" },
        { name: "convex", color: "green-text-gradient" },
        { name: "shadcn", color: "pink-text-gradient" },
      ],
      image: unstuff,
      source_code_link: "https://github.com/Samyak-J7/unstuff",
    },
    {
      name: "OI CHARTS",
      description:
        "Android app and website providing option chain charts for stocks and indices, with historical data and analysis tools.",
      site: "https://bit.ly/oicharts",
      tags: [
        { name: "Android/Java", color: "blue-text-gradient" },
        { name: "AWS", color: "green-text-gradient" },
        { name: "FastAPI", color: "pink-text-gradient" },
      ],
      image: tripguide,
      source_code_link: "https://github.com/Samyak-J7/OI-CHART-APP-android",
    },
    {
      name: "FitX",
      description:
        "Frontend web application providing personalized workout plans, nutrition advice, expert tips and motivational content.",
      site: "https://fitness-web-j8n5.vercel.app/",
      tags: [
        { name: "next.js", color: "blue-text-gradient" },
        { name: "Aceternity UI", color: "green-text-gradient" },
        { name: "TypeScript", color: "pink-text-gradient" },
      ],
      image: fitx,
      source_code_link: "https://github.com/Samyak-J7/fitness_web",
    },
    {
      name: "Simple Post App",
      description:
        "React app for creating, reading, updating, and deleting posts with Firebase authentication and Firestore database.",
      site: "https://react-post-app-three.vercel.app/",
      tags: [
        { name: "react", color: "blue-text-gradient" },
        { name: "firebase", color: "green-text-gradient" },
        { name: "typescript", color: "pink-text-gradient" },
      ],
      image: jobit,
      source_code_link: "https://github.com/Samyak-J7/react-post-app",
    },
  ];
  
  export { services, skills, experiences, testimonials, projects };