// export const initialState = {
//   personalInfo: {
//     name: "Yash Kumar Singh",
//     email: "yk664782gmail.com",
//     phone: "8869927409",
//     linkedIn: "LinkedIn",
//     gitHub: "GitHub",
//     portfolio: "Portfolio",
//   },
//   education: [],
//   experience: [],
//   skills: [
//     {
//       skillTitle: "technology",
//       skillList: "mongodb,css,html,react,expree,node",
//     },
//     {
//       skillTitle: "technology",
//       skillList: "mongodb,css,html,react,expree,node",
//     },
//   ],
//   projects: [],
//   honors: [],
// };

export const initialState = {
  template: 1,
  personalInfo: {
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "1234567890",
    location: "New York, USA",
    linkedIn: "https://linkedin.com/in/johndoe",
    gitHub: "https://github.com/johndoe",
    portfolio: "https://johndoeportfolio.com",
    summary:
      "A driven and accomplished software engineer with a proven track record of delivering high-quality software solutions. Adept at problem-solving, teamwork, and exceeding expectations in dynamic work environments.",
  },
  education: [
    {
      school: "Massachusetts Institute of Technology",
      degree: "Bachelors in Computer Science",
      fieldOfStudy: "Artificial Intelligence",
      startDate: "2020-09-01",
      endDate: "2024-06-01",
    },
    {
      school: "Springfield High School",
      degree: "High School Diploma",
      fieldOfStudy: "",
      startDate: "2016-09-01",
      endDate: "2020-06-01",
    },
  ],
  experience: [
    {
      company: "Tech Solutions Inc.",
      position: "Software Developer",
      startDate: "2024-07-01",
      endDate: "",
      isPresent: true,
      description: [
        "Developed and deployed scalable web applications used by over 10,000 users monthly.",
        "Collaborated with cross-functional teams to optimize existing software, resulting in a 25% increase in system performance.",
        "Integrated third-party APIs and improved system reliability by 30%.",
      ],
    },
    {
      company: "Tech Solutions Inc.",
      position: "Software Developer",
      startDate: "2024-07-01",
      endDate: "",
      isPresent: true,
      description: [
        "Developed and deployed scalable web applications used by over 10,000 users monthly.",
        "Collaborated with cross-functional teams to optimize existing software, resulting in a 25% increase in system performance.",
        "Integrated third-party APIs and improved system reliability by 30%.",
      ],
    },
  ],
  skills: [
    {
      skillTitle: "Frontend Development",
      skillList: "HTML, CSS, JavaScript, React",
    },
    {
      skillTitle: "Backend Development",
      skillList: "Node.js, Express, MongoDB, SQL",
    },
    {
      skillTitle: "Tools & Platforms",
      skillList: "Git, Docker, AWS, Jenkins",
    },
  ],
  projects: [
    {
      title: "E-Shopper - Online Store",
      description: [
        "Developed a fully responsive e-commerce platform with a seamless user interface, supporting over 500 products.",
        "Implemented a secure payment system, resulting in a 40% increase in transaction reliability.",
        "Optimized database queries to improve page load times by 50%.",
      ],
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      link: "https://eshopper.example.com",
    },
    {
      title: "SmartFit - Fitness Tracker",
      description: [
        "Built a fitness tracking application that integrates wearable devices and provides real-time health analytics.",
        "Designed a user-friendly dashboard with personalized recommendations, increasing user retention by 20%.",
        "Ensured data security and compliance with GDPR guidelines.",
      ],
      technologies: ["Next.js", "Firebase", "TypeScript", "Redux"],
      link: "https://smartfit.example.com",
    },
  ],
  honors: [
    { text: "Hackathon Winner | CodeFest 2023: Best App Award" },
    { text: "Dean's List | MIT 2020-2024" },
    { text: "Certified AWS Solutions Architect" },
  ],
};

export const resumeReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_TEMPLATE":
      return {
        ...state,
        template: action.payload,
      };
    case "LOAD_SAVED_STATE":
      return {
        ...action.payload,
      };

    case "UPDATE_PERSONAL_INFO":
      return {
        ...state,
        personalInfo: { ...state.personalInfo, ...action.payload },
      };

    case "ADD_EDUCATION":
      return {
        ...state,
        education: [...state.education, action.payload],
      };

    case "UPDATE_EDUCATION":
      return {
        ...state,
        education: state.education.map((edu, index) =>
          index === action.payload.index ? action.payload.data : edu
        ),
      };

    case "DELETE_EDUCATION":
      return {
        ...state,
        education: state.education.filter(
          (_, index) => index !== action.payload
        ),
      };

    case "ADD_EXPERIENCE":
      return {
        ...state,
        experience: [...state.experience, action.payload],
      };

    case "UPDATE_EXPERIENCE":
      return {
        ...state,
        experience: state.experience.map((exp, index) =>
          index === action.payload.index ? action.payload.data : exp
        ),
      };

    case "DELETE_EXPERIENCE":
      return {
        ...state,
        experience: state.experience.filter(
          (_, index) => index !== action.payload
        ),
      };

    case "UPDATE_SKILLS":
      return {
        ...state,
        skills: action.payload,
      };

    case "ADD_PROJECT":
      return {
        ...state,
        projects: [...state.projects, action.payload],
      };

    case "UPDATE_PROJECT":
      return {
        ...state,
        projects: state.projects.map((proj, index) =>
          index === action.payload.index ? action.payload.data : proj
        ),
      };

    case "DELETE_PROJECT":
      return {
        ...state,
        projects: state.projects.filter((_, index) => index !== action.payload),
      };

    case "ADD_HONOR":
      return {
        ...state,
        honors: [...state.honors, action.payload],
      };

    case "UPDATE_HONOR":
      return {
        ...state,
        honors: state.honors.map((honor, index) =>
          index === action.payload.index ? action.payload.data : honor
        ),
      };

    case "DELETE_HONOR":
      return {
        ...state,
        honors: state.honors.filter((_, index) => index !== action.payload),
      };

    default:
      return state;
  }
};
