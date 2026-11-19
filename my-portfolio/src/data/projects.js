// type must be one of: "Frontend" | "Full Stack" | "API"
// Screenshots go in public/projects_img/ (file names are case-sensitive).
//
// Featured projects (featured: true) appear first and show a "Read Case Study" button.
// Empty strings are hidden on the site, so fill them in only with true details.
const projects = [
  {
    number: "01",
    name: "BulkMail",
    type: "Full Stack",
    featured: true,
    category: "Full Stack Application",
    description:
      "A MERN application for sending bulk emails with recipient management, delivery tracking, email history and dashboard analytics.",
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "Nodemailer"],
    image: "/projects_img/bulkmail.png",
    live: "https://bulk-mail-app-xi-ten.vercel.app/login",
    github: "https://github.com/sivaraj-bit/Bulk_Mail_App",
    demoNote: "", // e.g. "Create a free account to try it." Stops visitors getting stuck at the login screen.
    caseStudy: {
      problem: "", // 1-2 sentences: what problem does it solve?
      built: [
        "Recipient management",
        "Bulk email sending with Nodemailer",
        "Delivery tracking and email history",
        "Dashboard analytics",
      ],
      challenge: "", // one real difficulty you hit and how you solved it
      learned: "", // what this project taught you
    },
  },
  {
    number: "02",
    name: "Blog Portfolio",
    type: "Full Stack",
    featured: true,
    category: "Full Stack Application",
    description:
      "A blog application with authentication and blog management features.",
    technologies: ["React", "Firebase", "Node.js", "Express.js"],
    image: "/projects_img/blog.png",
    live: "https://blog-portfolio-oq8q.vercel.app/",
    github: "https://github.com/sivaraj-bit/Blog_Portfolio",
    demoNote: "",
    caseStudy: {
      problem: "",
      built: ["User authentication", "Blog management features"],
      challenge: "",
      learned: "",
    },
  },
  {
    number: "03",
    name: "Planora",
    type: "Frontend",
    category: "Frontend Application",
    description:
      "An event planning application that helps users organize events and manage details using browser storage.",
    technologies: ["HTML", "CSS", "JavaScript", "LocalStorage"],
    image: "/projects_img/planora.png",
    live: "https://sivaraj-bit.github.io/Smart_Event_Web/",
    github: "https://github.com/sivaraj-bit/Smart_Event_Web",
  },
  {
    number: "04",
    name: "Greenden",
    type: "Frontend",
    category: "Frontend Website",
    description:
      "A responsive plant website designed to showcase greenery and plant products.",
    technologies: ["HTML", "CSS", "Tailwind CSS"],
    image: "/projects_img/greenden.png",
    live: "https://sivaraj-bit.github.io/Greenden_Web/",
    github: "https://github.com/sivaraj-bit/Greenden_Web",
  },
  {
    number: "05",
    name: "Nostra",
    type: "Frontend",
    category: "Frontend Website",
    description:
      "A fashion website featuring a clean shopping-inspired layout and responsive design.",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: "/projects_img/nostra.png",
    live: "https://sivaraj-bit.github.io/Nostra-Wear-Your-Edge_web/",
    github: "https://github.com/sivaraj-bit/Nostra-Wear-Your-Edge_web",
  },
  {
    number: "06",
    name: "WeatherWise",
    type: "API",
    category: "React Application",
    description:
      "A weather application that displays weather information using a weather API.",
    technologies: ["React", "JavaScript", "OpenWeatherMap"],
    image: "/projects_img/weather.png",
    live: "https://weather-app-theta-jet.vercel.app/",
    github: "https://github.com/sivaraj-bit/Weather_App",
  },
  {
    number: "07",
    name: "NexaFlow Login",
    type: "Full Stack",
    featured: true,
    category: "Authentication Application",
    description:
      "A login and signup application with authentication and protected routes.",
    technologies: ["React", "Node.js", "Express.js", "JWT"],
    image: "/projects_img/nexaflow.png",
    live: "https://nexaflowloginpage.vercel.app/",
    github: "https://github.com/sivaraj-bit/Nexaflow_login_page",
    demoNote: "",
    caseStudy: {
      problem: "",
      built: [
        "Login and signup with JWT authentication",
        "Protected routes",
      ],
      challenge: "",
      learned: "",
    },
  },
  {
    number: "08",
    name: "Favourite Student List",
    type: "Frontend",
    category: "Web Application",
    description: "A web application for managing a favourite student list.",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: "/projects_img/fav_st.png",
    live: "https://fav-st-list.vercel.app/",
    github: "https://github.com/sivaraj-bit/Fav_St_List",
  },
  {
    number: "09",
    name: "NumberMatch",
    type: "Frontend",
    category: "React Game",
    description:
      "A number matching game where players try to match a target number within limited chances.",
    technologies: ["React", "JavaScript", "Tailwind CSS"],
    image: "/projects_img/numbermatch.png",
    live: "https://number-match-react-game.vercel.app/",
    github: "https://github.com/sivaraj-bit/NumberMatch-React",
  },
];

export default projects;