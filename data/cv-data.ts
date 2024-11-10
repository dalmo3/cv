import { SkillList, WorkExperience } from 'components';

export const technicalSkills: SkillList = {
  title: 'Technical Skills',
  skills: [
    'Frontend - React & Typescript',
    'HTML5, CSS3, Javascript, Tailwind, CSS-in-JS',
    'Jest, Playwright, Cypress, Storybook',
    'Git, Github, Azure',
    'Backend - .NET and Springbook/Kotlin',
    'Node.js, REST APIs, GraphQL',
    'SQL, NoSQL, Postgres',
    'DevOps - AWS, Azure, Github, New Relic',
  ],
};

export const professionalSkills: SkillList = {
  title: 'Professional Skills',
  skills: [
    'Tech leadership and decision-making',
    'Self-management in remote work',
    'Autodidacticism & knowledge management',
    'Genius problem-solving abilities',
    'Delivers above and beyond the spec',
    'Great communication among tech and non-tech people',
  ],
};

export const workHistory: WorkExperience[] = [
  {
    title: 'Senior Fullstack Developer',
    period: '2023 - Present',
    company: 'Toitū Te Whenua LINZ',
    location: 'Wellington',
    about:
      'New Zealand authority for geographical information, surveying and land titles.',
    role: 'Building the new and shiny Landonline platform in React for modernising land title transactions.',
    skills: [
      {
        title: 'Frontend Engineering',
        description:
          'Building reusable React component frameworks for multiple internal squads.',
      },
      {
        title: 'UX Mastery',
        description:
          'Working closely with design and business to greatly improve the user experience.',
      },
      {
        title: 'Backend Engineering',
        description:
          'Writing business-critical services and APIs in Kotlin Springbook.',
      },
      {
        title: 'Performance Optimisation',
        description:
          'Building frontend monitoring in New Relic to enable data-driven performance optimisations.',
      },
      {
        title: 'Testing, Testing, Testing',
        description:
          'Unit tests with Jest; UI testing with Storybook; End-to-end testing with Playwright.',
      },
      {
        title: 'Problem solving',
        description:
          'Part of on-call squad, identifying and providing solutions to customer problems in real time.',
      },
      {
        title: 'Teamwork',
        description:
          'Helping out other devs by promoting best practices to ensure maintainability and reduce bugs.',
      },
    ],
  },
  {
    title: 'Senior Web Developer',
    period: '2022 – 2023',
    company: 'The Co-operative Bank',
    location: 'Wellington',
    about: 'Everyday personal banking serving 175k+ customers.',
    role: 'Building an awesome Internet Banking experience for tens of thousands of daily users.',
    skills: [
      {
        title: 'Software Architecture',
        description:
          'Led the inception of the Internet Banking rebuild in React from first principles.',
      },
      {
        title: 'Frontend Engineering',
        description:
          'Built a reusable component framework enabling quick development of new features.',
      },
      {
        title: 'DevOps',
        description:
          'Wrote and maintained CI/CD pipelines in Azure DevOps and Octopus Deploy.',
      },
      {
        title: 'Quick learning',
        description:
          'Picked up the old codebase for fixing bugs and refactoring in for the migration.',
      },
      {
        title: 'Force multiplying',
        description:
          'Applied general coding skills to help coworkers execute tasks faster.',
      },
      {
        title: 'Teambuilding',
        description:
          'Helped with recruiting and interviewing candidates for the team.',
      },
    ],
  },
  {
    title: 'Frontend Developer',
    period: '2020 – 2022',
    company: 'while and for',
    location: 'Auckland',
    about: 'Design and development of software solutions.',
    role: 'Engineering web applications from the ground up. Providing maintenance and developing new features.',
    skills: [
      {
        title: 'Frontend Engineering',
        description:
          'Built delightful UX in React; Designed complex app architecture and routing with Next.js.',
      },
      {
        title: 'Full Stack Engineering',
        description:
          'AWS Lambda; Database design with PostgreSQL and Hasura; Integration with 3rd-party services.',
      },
      {
        title: 'Pixel-perfect',
        description:
          'Built modern, responsive and accessible UI from mock designs. TailwindCSS, styled-components and more.',
      },
      {
        title: 'Code Quality',
        description:
          'Improved the codebase quality by pushing for the adoption of Typescript and ESLint.',
      },
      {
        title: 'Remote Work',
        description:
          'As a remote-first company, communication efficiency and self management are key.',
      },
    ],
  },
  {
    title: 'Web Developer',
    period: '2018 – 2020',
    company: 'Virtua',
    location: 'Wellington',
    about: 'Website and App development for small businesses.',
    role: 'Running the business: sales, design, execution, maintenance and support.',
    skills: [
      {
        title: 'Deliver Value',
        description:
          "Understanding the client's desires, and using my expertise to give them the solutions they need.",
      },
      {
        title: 'Client Touch',
        description:
          'Implemented an efficient user feedback workflow using web annotations.',
      },
      {
        title: 'Self Learning',
        description:
          'Taught myself modern web development. From HTML and CSS to TypeScript and React. ',
      },
    ],
  },
  {
    title: 'Industrial Automation Engineer',
    period: '2011 – 2017',
    company: 'Petrobras',
    location: 'Brazil',
    about:
      "Brazil's biggest company with over 50k employees is also one of the world's top 10 Oil companies.",
    role: 'Developed Instrumentation and Automation projects for over 30 offshore oil platforms.',
    skills: [
      {
        title: 'Project Design and Development',
        description:
          'Developed dozens of industrial projects of all sizes and varying complexities.',
      },
      {
        title: 'Testing',
        description:
          'Completed over 20 Factory Acceptancy Tests, helping develop and improve test scenarios.',
      },
      {
        title: 'Technical Writing',
        description:
          'Wrote, reviewed and translated project documentation and equipment datasheet. ',
      },
      {
        title: 'Teamwork and Communication',
        description:
          'Experienced in both small and big, multidisciplinary teams. Able to communicate clearly with multiple stakeholders such as plant operators, vendors, contractors, team leads and managers. ',
      },
    ],
  },
  // {
  //   title: 'Software Development Intern',
  //   period: 'Apr-Jun 2011',
  //   company: 'PoP-RN',
  //   location: 'Brazil',
  //   about: 'Internet Service Provider for Brazilian Universities.',
  //   role: 'Developed a Linux script for sending alarm reports to network administrators as mobile text messages.',
  //   skills: [],
  // },
];
