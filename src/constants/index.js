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
  figma,
  docker,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  devsinc,
  upwork,
  govt,
  ted,
  islamic,
  unicef
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
    icon: web,
  },
  {
    title: "UI/UX Designer",
    icon: mobile,
  },
  {
    title: "SQA Engineer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
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
    name: "Redux Toolkit",
    icon: redux,
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
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Data Analyst",
    company_name: "Govt. Of Pakistan",
    icon: govt,
    iconBg: "#383E56",
    date: "August 2020 - November 2020",
    points: [
      "Worked at Ministry of Health as a software engineer.",
      "Worked for Sehat Sahulat Program.",
      "Done Data Analysis and Verification of 30,000+ Citizens in 3 Months",
    ],
  },
  // {
  //   title: "Trainee",
  //   company_name: "UNICEF Pakistan",
  //   icon: unicef,
  //   iconBg: "#383E56",
  //   date: "August 2020 - November 2020",
  //   points: [
  //     "Worked at Ministry of Health as a software engineer.",
  //     "Worked for Sehat Sahulat Program.",
  //     "Done Data Analysis and Verification of 30,000+ Citizens in 3 Months",
  //   ],
  // },
  {
    title: "React.js Developer",
    company_name: "DevHub",
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
    title: "IT & Media Consultant",
    company_name: "Islamic Aid",
    icon: islamic,
    iconBg: "#383E56",
    date: "April 2020 - November 2021",
    points: [
      "Assess and enhance IT infrastructure for improved operations.",
      "Develop impactful media strategies to raise awareness and attract support.",
      "Provide technical training and support for staff members.",
      "Ensure robust data security and privacy measures are in place.",
    ],
  },
  {
    title: "Director IT",
    company_name: "TEDx",
    icon: ted,
    iconBg: "#383E56",
    date: "April 2021 - July 2021",
    points: [
      "Oversee and manage the IT infrastructure and operations for TEDx events.",
      "Develop and implement innovative technology solutions to enhance the attendee experience.",
      "Ensure seamless audiovisual and technical support during TEDx talks and presentations.",
      "Collaborate with internal teams and external partners to integrate technology for effective event management and livestreaming.",
    ],
  },
  {
    title: "IT Consultant",
    company_name: "DreamCursor",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining website of the company",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Also handled all IT related work like Email Marketing, Database Management etc.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Antixsol",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Present",
    points: [
      "Developed a 10,000+ pages website with rich local SEO",
      "Developed 8 Websites having 40,000+ Pages and maintained them.",
      "Worked as React JS as well as WordPress Developer.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Top Rated Freelancer",
    company_name: "Upwork",
    icon: upwork,
    iconBg: "#E6DEDD",
    date: "Jan 2020 - Present",
    points: [
      "Top Rated Freelancer on Upwork.",
      "100% Job Success Rate",
      "Developed websites using React JS, Wordpress, Next JS, .NET Core",
      "Also provided additional services like SEO, UI/UX, NFT websites etc.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Working with Abubakar has been a game-changer for our business. He helped us implement new technology that has improved our productivity.",
    name: "Hamna Kamran",
    designation: "Founder",
    company: "iVolunteer",
    image: "https://buhtech.com/assets/images/hamna.jpeg",
  },
  {
    testimonial:
      "Abubakar has been a true partner to our business. He is always available when we need him, and his solutions are tailored to our specific needs and requirments.",
    name: "Anwar Aletani",
    designation: "CEO",
    company: "FREC",
    image: "https://i.ibb.co/kXHcS8g/Anwar-aletani-FREC.png",
  },
  {
    testimonial:
      "We hired Abubakar to help us with a major software migration, and he exceeded our expectations. He was able to seamlessly transition us to the new system.",
    name: "Thomas Donahue",
    designation: "Director",
    company: "Brandust",
    image: "https://i.ibb.co/P6mHmYm/900285e0-59f5-4ef6-9ef2-b96f3b8a089a.jpg",
  },
];

const projects = [
  {
    name: "Agency Mnagement Website",
    description:
      "A web-based users and agency management app is a software application that allows organizations to manage their users and agency relationships online. It provides a centralized platform for businesses to track their clients, contacts, and other stakeholders. ",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: ".NET Core",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://ivolunteerpk.com/",
  },
  {
    name: "Distribution System Website",
    description:
      "A Distribution System is a web-based platform designed to manage the distribution of goods or services. The system automates many processes such as order management, inventory tracking and shipping logistics with real-time data verification.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: ".NET Core",
        color: "green-text-gradient",
      },
      {
        name: "Signal-R",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://aecl.com/",
  },
  {
    name: "Consultancy Firm Website",
    description:
      "A consultancy firm site is a website that showcases the services and expertise of a consultancy firm. The site serves as the online presence of the consultancy firm, allowing potential clients to learn more about the firm, its capabilities, and its areas of expertise.",
    tags: [
      {
        name: ".NET Core",
        color: "blue-text-gradient",
      },
      {
        name: "React",
        color: "green-text-gradient",
      },
      {
        name: "GraphQL",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://dreamcursor.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
