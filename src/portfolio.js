
const settings = {
  isSplash: true,
};

//SEO Related settings
const seo = {
  title: "Sugata's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Sugata Chanda Portfolio",
    type: "website",
    url: "https://sugatachanda.vercel.app/",
  },
};

//Home Page
const greeting = {
  title: "Sugata Chanda",
  logo_name: "SugataChanda",
  // nickname: "",
  subTitle:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  // resumeLink:
  //   "https://1drv.ms/b/s!Al7_AaoQhRN_nNN5vmtB5SxP-T-ntQ?e=WoRNhN",
  resumeLink:
    "https://drive.google.com/file/d/1W8AAi3UPwt_rF5w4TH3DZEkIbqqiEnV6/view?usp=sharing",
  githubProfile: "https://github.com/SUGATACHANDA",
  portfolio_repository: "https://github.com/SUGATACHANDA/personal-portfolio",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/SUGATACHANDA",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/sugatachanda",
    fontAwesomeIcon: "fa-linkedin-in",
    backgroundColor: "#0077B5",
  },
  {
    name: "Gmail",
    link: "mailto:scbabai2704@gmail.com",
    fontAwesomeIcon: "fa-google",
    backgroundColor: "#D14836",
  },
  {
    name: "X-Twitter",
    link: "https://x.com/SugataChanda",
    fontAwesomeIcon: "fa-x-twitter",
    backgroundColor: "#000000",
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React-Redux",
        "⚡ Developing mobile applications using Flutter and React Native",
        "⚡ Creating application backend in Node, Express & Flask",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Tailwind CSS",
          fontAwesomeClassname: "simple-icons:tailwindcss",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ExpressJS",
          fontAwesomeClassname: "simple-icons:express",
          style: {
            // backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "PayloadCMS",
          fontAwesomeClassname: "simple-icons:payloadcms",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NextJS",
          fontAwesomeClassname: "simple-icons:nextdotjs",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Typescript",
          fontAwesomeClassname: "simple-icons:typescript",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Deploying deep learning models on cloud to use on mobile devices",
        "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },

      ],
    },
  ],
};


const degrees = {
  degrees: [
    {
      title: "Netaji Subhash Engineering College",
      subtitle: "B.Tech. in Computer Science and Engineering",
      logo_path: "nsec_logo.png",
      alt_name: "NSEC",
      duration: "2020 - 2026",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI, Object Oriented Programming etc.",
        "⚡ Apart from this, I have done courses on Machine Learning, Cloud Computing and Full Stack Development.",
        "⚡ I was selected for Class Representative which is a prestigious position in college.",
      ],
      website_link: "https://www.nsec.ac.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Ethics in Engineering Practice",
      subtitle: "Prof. Susmita Mukhopadhyay - IIT Kharagpur",
      logo_path: "nptel_logo.png",
      certificate_link:
        "https://archive.nptel.ac.in/content/noc/NOC24/SEM2/Ecertificates/110/noc24-mg131/Course/NPTEL24MG131S85230177104339848.pdf",
      alt_name: "NPTEL_LOGO",
      color_code: "#8C151599",
    },
    {
      title: "The Joy of Computing using Python",
      subtitle: " Prof. Sudarshan Iyengar, Prof. Yayati Gupta - IIT Ropar",
      logo_path: "nptel_logo.png",
      certificate_link:
        "https://archive.nptel.ac.in/content/noc/NOC24/SEM1/Ecertificates/106/noc24-cs57/Course/NPTEL24CS57S65970138130752012.pdf",
      alt_name: "nptel_logo",
      color_code: "#00000099",
    },
    {
      title: "Introduction to Internet of Things",
      subtitle: "Prof. Sudip Misra - IIT Kharagpur",
      logo_path: "nptel_logo.png",
      certificate_link:
        "https://archive.nptel.ac.in/content/noc/NOC23/SEM2/Ecertificates/106/noc23-cs83/Course/NPTEL23CS83S73970089020404161.pdf",
      alt_name: "nptel_logo",
      color_code: "#0C9D5899",
    },
    {
      title: "Google Cloud Computing Foundations",
      subtitle: " Prof. Soumya Kanti Ghosh, Multifaculty - IIT Kharagpur, Google Cloud",
      logo_path: "nptel_logo.png",
      certificate_link:
        "https://archive.nptel.ac.in/content/noc/NOC23/SEM2/Ecertificates/106/noc23-cs90/Course/NPTEL23CS90S83970174820404161.pdf",
      alt_name: "nptel_logo",
      color_code: "#1F70C199",
    },
    {
      title: "Cryptography and Network Security",
      subtitle: " Prof. Sourav Mukhopadhyay - IIT Kharagpur",
      logo_path: "nptel_logo.png",
      certificate_link:
        "https://internalapp.nptel.ac.in/NOC/NOC25/SEM1/Ecertificates/106/noc25-cs16/Course/NPTEL25CS16S54950105504280296.pdf",
      alt_name: "nptel_logo",
      color_code: "#0C9D5899",
    },
    {
      title: "AWS Academy Cloud Foundations",
      subtitle: "- AWS Academy",
      logo_path: "aws_logo.png",
      certificate_link:
        "https://smartexam-mum.s3.amazonaws.com/moocsnewdetails/ImageFile/TS033439410728981734417150.pdf",
      alt_name: "Amazon Web Services",
      color_code: "#D83B0199",
    },
    {
      title: "AWS Academy Machine Learning Foundations",
      subtitle: "- AWS Academy",
      logo_path: "aws_logo.png",
      certificate_link:
        "https://smartexam-mum.s3.amazonaws.com/moocsnewdetails/ImageFile/TS033439410769751743060604.pdf",
      alt_name: "Amazon Web Services",
      color_code: "#1F70C199",
    },

  ],
};

const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked with many evolving startups as Full Stack Developer, Designer and Software Architect.",
  header_image_path: "experience.svg",
  sections: [
    // {
    //   title: "Work",
    //   work: true,
    //   experiences: [
    //     {
    //       title: "Machine Learning Engineer",
    //       company: "TikTok Inc.",
    //       company_url: "https://www.tiktok.com/en/",
    //       logo_path: "tiktok_logo.png",
    //       duration: "June 2023 - Present",
    //       location: "San Jose, CA, USA",
    //       description:
    //         "Improving ads ranking models on the core TikTok product. Experience working on modeling two-tower architectures like DeepFM, Wide & deep learning, etc. Working on Large Language Models (LLM) pretraining and Large Multi-modal Model (LMM) finetuning strategies.",
    //       color: "#000000",
    //     },
    //     {
    //       title: "Associate AI Engineer",
    //       company: "Legato Health Technology",
    //       company_url: "https://legatohealthtech.com/",
    //       logo_path: "legato_logo.png",
    //       duration: "June 2020 - Aug 2021",
    //       location: "Hyderabad, Telangana",
    //       description:
    //         "I am working on automating healthcare products. The projects involve automation for process improvements and for significantly enhancing the profits. I am currently working on Cancer Survival and Reoccurence Prediction. Our goal is to make AI system which scales and removes doctor dependency as much as possible.",
    //       color: "#0879bf",
    //     },
    //     {
    //       title: "Android and ML Developer",
    //       company: "Muffito Incorporation",
    //       company_url: "https://www.linkedin.com/company/muffito-inc/about/",
    //       logo_path: "muffito_logo.png",
    //       duration: "May 2018 - Oct 2018",
    //       location: "Pune, Maharashtra",
    //       description:
    //         "I have created complete Android Application for locating Pub, Bar and beverage shops around you. I have also worked on implementation of algorithms for Face Detection, Text extraction from Image. I was involved in a team for creating complete software architecure of mobile and web application as well as admin panel for company.",
    //       color: "#9b1578",
    //     },
    //     {
    //       title: "Android Developer",
    //       company: "FreeCopy Pvt. Ltd.",
    //       company_url: "https://www.linkedin.com/company/freecopy/about/",
    //       logo_path: "freecopy_logo.png",
    //       duration: "Nov 2017 - Dec 2017",
    //       location: "Ahmedabad, Gujarat",
    //       description:
    //         "FreeCopy is the Start up from Indian Institute of Management, Ahmedabad. I have changed the integration of the whole app from Google to Firebase. I learnt the efﬁcient ways of Data communications like Retroﬁt, Eventbus etc. I experienced the real time start up. I learnt the Design thinking of UI on perspective of People.",
    //       color: "#fc1f20",
    //     },
    //   ],
    // },
    {
      title: "Internships",
      experiences: [
        {
          title: "Web Developer Intern",
          company: "EazyByts",
          company_url: "https://eazybyts.com",
          logo_path: "eazybyts_logo.png",
          duration: "June 2025 - July 2025",
          location: "Remote",
          description:
            "As a Web Developer Intern at EazyByts, I'm contributing to the development of scalable, full-stack web applications using technologies like React.js, Node.js, Express.js, and MongoDB. My work involves building responsive UI components, integrating RESTful APIs, and optimizing performance across devices. I collaborate with the team in an agile environment, participate in code reviews, and follow best practices in version control using Git and GitHub. This role is enhancing my practical understanding of modern web development and preparing me for real-world challenges in the tech industry.",
          color: "#000000",
        },
        {
          title: "Software Development Engineer Intern",
          company: "Bluestock Fintech",
          company_url: "https://bluestock.in",
          logo_path: "bluestock_logo.jpeg",
          duration: "June 2025 - Present",
          location: "Remote",
          description:
            "Developed a responsive IPO web application compatible with all devices, enhancing user accessibility. Implemented custom authentication using Google reCAPTCHA, improving security measures for user data. Utilized React and PostgreSQL to create a robust backend, ensuring efficient data management and retrieval. Contributed to Bluestock™, a dynamic startup focused on innovative tech solutions, fostering a collaborative remote work environment.",
          color: "#4285F4",
        },
      ],
    },
    // {
    //   title: "Volunteerships",
    //   experiences: [
    //     {
    //       title: "Google Explore ML Facilitator",
    //       company: "Google",
    //       company_url: "https://about.google/",
    //       logo_path: "google_logo.png",
    //       duration: "June 2019 - April 2020",
    //       location: "Hyderabad, Telangana",
    //       description:
    //         "Explore Machine Learning (ML) is a Google-sponsored program for university students to get started with Machine Learning. The curriculum offers 3 tracks of ML Content (Beginner, Intermediate, Advanced) and relies on university student facilitators to train other students on campus and to build opensource projects under this program.",
    //       color: "#4285F4",
    //     },
    //     {
    //       title: "Microsoft Student Partner",
    //       company: "Microsoft",
    //       company_url: "https://www.microsoft.com/",
    //       logo_path: "microsoft_logo.png",
    //       duration: "Aug 2019 - May 2020",
    //       location: "Hyderabad, Telangana",
    //       description:
    //         "Microsoft Student Partner is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I have organised hands on workshops and seminars to teach Cloud Computing concepts to students.",
    //       color: "#D83B01",
    //     },
    //     {
    //       title: "Mozilla Campus Captain",
    //       company: "Mozilla",
    //       company_url: "https://www.mozilla.org/",
    //       logo_path: "mozilla_logo.png",
    //       duration: "Oct 2019 - May 2020",
    //       location: "Kurnool, Andhra Pradesh",
    //       description:
    //         "My responsibility for this program was to create opensource environment in college and in the city. We have organised multiple hackathons on the problems collected by ordinary people from Kurnool city. We have build opensource community of our own college. The community is available at dsc_iiitdmk on github.",
    //       color: "#000000",
    //     },
    //     {
    //       title: "Developer Students Club Member",
    //       company: "DSC IIITDM Kurnool",
    //       company_url:
    //         "https://www.linkedin.com/company/developer-students-club-iiitdm-kurnool",
    //       logo_path: "dsc_logo.png",
    //       duration: "Jan 2018 - May 2020",
    //       location: "Kurnool, Andhra Pradesh",
    //       description:
    //         "We have well established developer club in college which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Android Application Development, Flutter and React JS.",
    //       color: "#0C9D58",
    //     },
    //     {
    //       title: "Developer Program Member",
    //       company: "Github",
    //       company_url: "https://github.com/",
    //       logo_path: "github_logo.png",
    //       duration: "July 2019 - PRESENT",
    //       location: "Work From Home",
    //       description:
    //         "I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
    //       color: "#181717",
    //     },
    //   ],
    // },
  ],
};



// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Full Stack Web Application projects and deploy them using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "sugata_chanda.jpeg",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with React, Express, NextJS, Cloud and Opensource Development.",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  projectsHeader,
  contactPageData,
  experience
};
