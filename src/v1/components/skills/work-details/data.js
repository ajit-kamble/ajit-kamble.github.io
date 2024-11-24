const coyoteRoles = [
  {
    title: "Trainee Software Engineer",
    duration: "March 2014 - August 2014",
    company: "Emtec Technologies Pvt. Ltd. Pune",
  },
  {
    title: "Junior Software Engineer",
    duration: "September 2014 - March 2015",
    company: "Emtec Technologies Pvt. Ltd. Pune",
  },
  {
    title: "Associate Software Engineer",
    duration: "April 2015 - September 2015",
    company: "Emtec Technologies Pvt. Ltd. Pune",
  },
  {
    title: "Software Engineer",
    duration: "October 2015 - March 2018",
    company: "Emtec Technologies Pvt. Ltd. Pune",
  },
  {
    title: "Senior Software Engineer",
    duration: "April 2018 - April 2018",
    company: "Emtec Technologies Pvt. Ltd. Pune",
  },

  {
    title: "Technical Lead",
    duration: "Mar 2014 - Aug 2014",
    company: "Emtec Technologies Pvt. Ltd. Pune",
  },
];

const ermcoRoles = [
  {
    title: "Technical Lead",
    duration: "March 2023 - May 2023",
    company: "Emtec Technologies Pvt. Ltd. Pune",
  },
];

const masteryRoles = [
  {
    title: "System Devloper",
    duration: "May 2023 - June 2023",
    company: "Emtec Application Service, Chicago, IL",
  },
  {
    title: "Senior System Devloper",
    duration: "June 2023 - December 2023",
    company: "Emtec Application Service, Chicago, IL",
  },
  {
    title: "Associate Technical Manager",
    duration: "January 2024 - Present",
    company: "Bridgenext, Chicago, IL",
  },
];

const workData = [
  {
    sequence: 1,
    title: "Coyote Logistics LLC",
    subTitle: "March 2014 - February 2023",
    applicationPlatforms: [
      "Web App",
      "Desktop App",
      "SQL JOBs",
      "Microservices",
      "RabbitMQ",
      "Azure",
      "Elastic Search",
    ],
    details: [
      `Coyote is a leading global 3PL that combines a centralized marketplace with freight and supply chain solutions in USA`,
      `We built Web Application, Desktop Application, SQL Jobs, Microservices, Standalone Windows Services to manage freights.`,
      `These application are used by Customer Reps, Carrier Reps & Internal Employees to carry out frieght lifecycle.`,
    ],
    contibutions: [
      `UI/UX Desgining`,
      `DB Schema Desgining`,
      `Technical Approach`,
      `Code Reviews`,
      `Release Management`,
      `Code Optimistion`,
      `Performance Optimisation`,
      `Testing`,
      `Requirement Analysis`,
      `Team Management`,
    ],
    roles: coyoteRoles,
    technologies: [
      "C#",
      "ASP.NET",
      "Azure",
      "Web API",
      "REST API",
      "HTML",
      "CSS",
      "Javascript",
      "RabbitMQ",
      "Microservices",
      "SQL Server",
      "Elastic Search",
      "MongoDB",
      "Backbone & Marionette JS",
      "React JS",
      "Angular",
    ],
    domain: "Logistics",
    company: "Emtec Technologies Pvt. Ltd. Pune",
  },
  {
    sequence: 2,
    title: "EMRCO",
    subTitle: "February 2023 - May' 2023",
    details: [
      `EMRCO is a leading US manufacturer of oil-filled distribution transformers,`,
      `We built mobile application for Honeywell CK65 Handheld Computer for inventroy management.`,
      `This mobile application is used by ERMCO employees to scan 3D QR-Code to add new entry of production items.`,
    ],
    contibutions: [
      `UI/UX Desgining`,
      `Technical Approach`,
      `Code Reviews`,
      `Release Management`,
      `Code Optimistion`,
      `Performance Optimisation`,
      `Testing`,
      `Requirement Analysis`,
      `Team Management`,
    ],
    roles: ermcoRoles,
    technologies: ["C#", "Web API", "REST API", "React JS", "React Native"],
    domain: "Inventory",
    company: "Emtec Technologies Pvt. Ltd. Pune",
  },
  {
    sequence: 3,
    title: "Mastery Systems",
    subTitle: "May' 2023 - Present",
    details: [
      `Mastery System offers a tool called MasterMind through which user(customers) can manage their frieghts.`,
      `Mastery Mind is as multi-tenant web portal throught which customer/carrier/employees can manage there frieghts.`,
    ],
    contibutions: [
      `UI/UX Desgining`,
      `Technical Approach`,
      `Code Reviews`,
      `Release Management`,
      `Code Optimistion`,
      `Performance Optimisation`,
      `Testing`,
      `Requirement Analysis`,
      `Team Management`,
      `Root Cause Analysis`,
      `Bug Fixing`,
    ],
    roles: masteryRoles,
    technologies: [
      "C#",
      "Web API",
      "REST API",
      "Microservices",
      "React JS",
      "Azure",
      "GraphQL",
      "NodeJS",
      "ExpressJS",
      "Postgres SQL",
      "MongoDB",
    ],
    domain: "Logistics",
    company: "Bridgenext, Chicago, IL",
  },
];

export default workData;
