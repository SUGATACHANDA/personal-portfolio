
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
    "https://drive.google.com/file/d/1id8s7pCeVV09OU1t_OaQhCkT_Qc_Bbdb/view?usp=sharing",
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
    link: "https://www.linkedin.com/in/sugata-chanda-194a95253/",
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
};
