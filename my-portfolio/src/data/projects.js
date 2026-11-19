// type must be one of: "Frontend" | "Full Stack" | "API"
// Screenshots go in public/projects_img/ (file names are case-sensitive).
//
// Featured projects (featured: true) appear first.
// Every project has a caseStudy, written from the project's README.
//   problem   - what the project is for (shown as "The goal")
//   built     - features you built
//   challenge - ONE real difficulty and how you solved it (fill in yourself)
//   learned   - what you practised
// Empty strings are hidden on the site.
const projects = [
  {
    number: "01",
    name: "BulkMail",
    type: "Full Stack",
    featured: true,
    category: "Full Stack Application",
    description:
      "A MERN application for sending bulk email campaigns. It removes duplicate addresses, sends in batches through the Brevo email API, and shows campaign history and dashboard analytics.",
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Brevo API",
      "Tailwind CSS",
    ],
    image: "/projects_img/bulkmail.png",
    live: "https://bulk-mail-app-xi-ten.vercel.app/login",
    github: "https://github.com/sivaraj-bit/Bulk_Mail_App",
    demoNote:
      "Create an account on the Register page to try it. Please send test emails only to your own addresses.",
    caseStudy: {
      problem:
        "Sending the same email to many people one by one is slow and easy to get wrong. BulkMail lets a signed-in user send one campaign to many recipients and then review how each campaign went.",
      built: [
        "Registration and login with JWT authentication, with Admin and User roles",
        "Bulk sending through the Brevo email API, in batches of 50, up to 500 unique recipients per campaign",
        "Duplicate removal, email validation and BCC to protect recipient privacy",
        "Dashboard with campaign statistics and daily activity charts",
        "Email history with search and status filters (Sent, Partial, Failed)",
      ],
      challenge: "",
      learned:
        "Practised building a full MERN application with JWT authentication and role-based access, integrating a third-party email API, and processing large recipient lists safely in batches.",
    },
  },
  {
    number: "02",
    name: "Blog Portfolio",
    type: "Full Stack",
    featured: true,
    category: "Full Stack Application",
    description:
      "A full stack blog and portfolio platform. Visitors can browse and search published articles, and an admin dashboard secured with Firebase Authentication lets the owner create, edit and delete posts with image uploads.",
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Firebase",
      "Cloudinary",
      "Tailwind CSS",
    ],
    image: "/projects_img/blog.png",
    live: "https://blog-portfolio-oq8q.vercel.app/",
    github: "https://github.com/sivaraj-bit/Blog_Portfolio",
    demoNote:
      "The blog is open to everyone. The admin dashboard (/admin/login) is private and is for the site owner only.",
    caseStudy: {
      problem:
        "A developer needs one place to show projects and write about what they learn, without editing code every time. This platform gives visitors a clean public site and the owner a private dashboard to manage the content.",
      built: [
        "Public site with category-based articles, search and responsive layouts",
        "Admin dashboard to create, edit and delete posts",
        "Firebase Authentication, with token verification on the backend through Firebase Admin and protected API routes",
        "Image uploads to Cloudinary, with image URLs stored in MongoDB Atlas",
        "REST API built with Express and Mongoose",
      ],
      challenge: "",
      learned:
        "Practised implementing Firebase Authentication and verifying tokens on the backend, connecting MongoDB Atlas with Mongoose, uploading images with Cloudinary, and deploying a full stack app with Vercel and Render.",
    },
  },
  {
    number: "03",
    name: "Planora",
    type: "Frontend",
    category: "Frontend Application",
    description:
      "A responsive event planning web app. Users create events with a date, venue, guests and budget, search and filter them by category, and see live statistics, with all data kept in the browser's LocalStorage.",
    technologies: ["HTML", "Tailwind CSS", "JavaScript", "LocalStorage"],
    image: "/projects_img/planora.png",
    live: "https://sivaraj-bit.github.io/Smart_Event_Web/",
    github: "https://github.com/sivaraj-bit/Smart_Event_Web",
    demoNote: "",
    caseStudy: {
      problem:
        "Keeping event details in one place by hand gets messy. Planora gives users one simple, organised place to plan their events.",
      built: [
        "Login form validation",
        "Event creation with name, category, date, time, venue, guests, budget and description",
        "Search, category filter and delete",
        "Live statistics: total events, guests, budget and completed tasks",
        "Events saved in LocalStorage so they stay after a refresh",
        "Responsive dark interface",
      ],
      challenge: "",
      learned:
        "Practised DOM manipulation, form validation, array methods such as filter and reduce, and saving and loading data with LocalStorage.",
    },
  },
  {
    number: "04",
    name: "Greenden",
    type: "Frontend",
    category: "Frontend Website",
    description:
      "A responsive three-page plant website with a hero section, popular plants, product cards and a contact form.",
    technologies: ["HTML", "CSS", "Tailwind CSS", "JavaScript"],
    image: "/projects_img/greenden.png",
    live: "https://sivaraj-bit.github.io/Greenden_Web/",
    github: "https://github.com/sivaraj-bit/Greenden_Web",
    caseStudy: {
      problem:
        "A plant seller needs a clear, good-looking website that works on phones, tablets and desktops. Greenden presents plants and products across three pages.",
      built: [
        "Home, Products and Contact pages",
        "Hero section, popular plants and product cards",
        "Mobile-friendly navigation and a responsive grid layout",
        "Contact form and hover effects",
      ],
      challenge: "",
      learned:
        "Practised building a multi-page responsive website with Tailwind CSS utilities.",
    },
  },
  {
    number: "05",
    name: "Nostra",
    type: "Frontend",
    category: "Frontend Website",
    description:
      "A responsive fashion shopping website with 32 products. Visitors search by name and filter by category and rating at the same time, and the contact form validates its input.",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: "/projects_img/nostra.png",
    live: "https://sivaraj-bit.github.io/Nostra-Wear-Your-Edge_web/",
    github: "https://github.com/sivaraj-bit/Nostra-Wear-Your-Edge_web",
    caseStudy: {
      problem:
        "Browsing a fashion catalogue should be quick. Nostra lets shoppers find products by name, category and rating on any screen size.",
      built: [
        "Home, Collections and Contact Us pages",
        "32 products with prices, ratings and New and Sale labels",
        "Search, category and rating filters that work together, with Clear Filters, a product count and a no-products message",
        "Contact form with JavaScript validation and a success message",
        "Responsive product grid with a two-column layout on small phones",
      ],
      challenge: "",
      learned:
        "Practised combining search and filters in JavaScript, validating forms, and building a responsive product grid.",
    },
  },
  {
    number: "06",
    name: "WeatherWise",
    type: "API",
    category: "React Application",
    description:
      "A React weather app. Search for a city to see its current temperature, conditions, feels-like temperature, humidity, wind speed and pressure, with loading and error states.",
    technologies: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Axios",
      "OpenWeatherMap",
    ],
    image: "/projects_img/weather.png",
    live: "https://weather-app-theta-jet.vercel.app/",
    github: "https://github.com/sivaraj-bit/Weather_App",
    caseStudy: {
      problem:
        "People want a quick answer to what the weather is like in a city. WeatherWise fetches live data and shows it in a clean, readable layout.",
      built: [
        "City search using the OpenWeatherMap Current Weather API through Axios",
        "Temperature in Celsius with weather icons and conditions",
        "Feels-like temperature, humidity, wind speed and pressure",
        "Loading indicators and error messages for invalid cities and API errors",
        "Responsive layout with a mobile menu",
      ],
      challenge: "",
      learned:
        "Practised calling an external API with Axios from React, handling loading and error states, and keeping the API key in an environment variable.",
    },
  },
  {
    number: "07",
    name: "NexaFlow Login",
    type: "Full Stack",
    category: "Authentication Application",
    description:
      "A React and Express login and signup app with password rules, a show or hide password toggle, clear error and success messages, and REST API endpoints.",
    technologies: ["React", "JavaScript", "Node.js", "Express.js", "REST API"],
    image: "/projects_img/nexaflow.png",
    live: "https://nexaflowloginpage.vercel.app/",
    github: "https://github.com/sivaraj-bit/Nexaflow_login_page",
    demoNote:
      "Sign up first, then log in. Passwords need at least 8 characters, an uppercase letter and three digits (for example Example123). Accounts are kept in server memory, so they can reset when the server restarts.",
    caseStudy: {
      problem:
        "Most apps begin with signing users up and logging them in. NexaFlow is a focused build of that flow, with validation on the form and a simple API behind it.",
      built: [
        "Signup and login pages connected to Express REST endpoints",
        "Password rules: at least 8 characters, one uppercase letter and three digits",
        "Confirm-password check and a show or hide password toggle",
        "Error and success messages with a responsive layout",
      ],
      challenge: "",
      learned:
        "Practised building a React form flow with validation, and creating signup and login REST endpoints with Express.",
    },
  },
  {
    number: "08",
    name: "Favourite Student List",
    type: "Frontend",
    featured: true,
    category: "React Application",
    description:
      "A React app for managing students. Add and delete students, mark favourites, and search, filter and sort the list, with data saved in localStorage.",
    technologies: [
      "React",
      "React Router",
      "Context API",
      "JavaScript",
      "Tailwind CSS",
      "LocalStorage",
    ],
    image: "/projects_img/fav_st.png",
    live: "https://fav-st-list.vercel.app/",
    github: "https://github.com/sivaraj-bit/Fav_St_List",
    caseStudy: {
      problem:
        "Managing a list of students, and a shorter list of favourites, should be quick and simple. This app does it in the browser and remembers the data after a refresh.",
      built: [
        "Add and delete students, with duplicate roll numbers prevented",
        "Favourites list that prevents duplicate entries",
        "Search by name or roll number, filter (all, favourites, not favourites) and sort ascending or descending",
        "Dashboard, Student List and Favourites pages with React Router",
        "Shared state with Context API, saved with localStorage",
        "Empty-state messages and a responsive layout",
      ],
      challenge: "",
      learned:
        "Practised state management with Context API and hooks (useState, useContext, useEffect, useMemo), client-side routing with React Router, and saving data in localStorage.",
    },
  },
  {
    number: "09",
    name: "NumberMatch",
    type: "Frontend",
    category: "React Game",
    description:
      "A React number matching game. Pick a target number from 1 to 100 and a number of chances, then generate random numbers to match it before your chances or the 30-second timer run out.",
    technologies: ["React", "JavaScript", "Tailwind CSS", "LocalStorage"],
    image: "/projects_img/numbermatch.png",
    live: "https://sivaraj-bit.github.io/NumberMatch-React-Game/",
    github: "https://github.com/sivaraj-bit/NumberMatch-React-Game",
    caseStudy: {
      problem:
        "A small game is a good way to practise state and rules. Players try to match a target number before their chances or the timer run out.",
      built: [
        "Target number from 1 to 100 and a custom number of chances",
        "Random number generation with a 30-second timer",
        "Win and lose conditions with an attempt history",
        "Score of remaining chances × 10, with games played and best score saved in localStorage",
        "Play Again and Reset Game, with a responsive layout",
      ],
      challenge: "",
      learned:
        "Practised useState and useEffect (for the timer), props, conditional rendering, and saving the best score in localStorage.",
    },
  },
];

export default projects;