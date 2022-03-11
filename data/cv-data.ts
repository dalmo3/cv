import { SkillList, WorkExperience } from 'components';

export const technicalSkills: SkillList = {
  title: 'Technical Skills',
  skills: [
    'React & Next.js',
    'TypeScript & JavaScript',
    'Node.js, GraphQL, REST APIs',
    'HTML5, CSS3, SASS, CSS-in-JS',
    'SQL, NoSQL, Postgres',
    'AWS Lambda, Serverless',
    'Git goodness',
    'Jest, Cypress, Storybook',
  ],
};

export const professionalSkills: SkillList = {
  title: 'Professional Skills',
  skills: [
    'Self-management in remote work',
    'Autodidacticism & knowledge management',
    'Great teamwork and communication',
    'Genius problem-solving abilities',
    'Delivers above and beyond the spec',
    'Excellent technical writing',
  ],
};

export const workHistory: WorkExperience[] = [
  {
    title: 'Frontend Developer',
    period: '2020 – Present',
    company: 'while and for',
    location: 'Auckland',
    about: 'Design and development of software solutions.',
    role: 'Engineering web applications from the ground up. Providing maintenance and developing new features.',
    skills: [
      {
        title: 'Pixel-perfect',
        description:
          'Built modern, responsive and accessible UI from mock designs. TailwindCSS, Material-UI and more.',
      },
      {
        title: 'Frontend Engineering',
        description:
          'Built delightful UX in React; Designed complex app architecture and routing with Next.js.',
      },
      {
        title: 'Code Quality',
        description:
          'Improved the codebase quality by pushing for the adoption of Typescript and ESLint.',
      },
      {
        title: 'Full Stack Engineering',
        description:
          'AWS Lambda; Database design with PostgreSQL and Hasura; Integration with 3rd-party services.',
      },
      {
        title: 'Automation Testing',
        description:
          'Unit testing with Jest; UI testing with Storybook; End-to-end testing with Cypress.',
      },
      {
        title: 'Agile Remote Work',
        description:
          'As a remote-first company, communication efficiency and task management are key.',
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
        title: 'Autodidacticism',
        description:
          'Taught myself modern web development. From HTML and CSS to TypeScript and React. ',
      },
    ],
  },
  {
    title: 'Automation Engineer',
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
  {
    title: 'Software Development Intern',
    period: 'Apr-Jun 2011',
    company: 'PoP-RN',
    location: 'Brazil',
    about: 'Internet Service Provider for Brazilian Universities.',
    role: 'Developed a Linux script for sending alarm reports to network administrators as mobile text messages.',
    skills: [],
  },
];
