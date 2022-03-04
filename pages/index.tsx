import type { NextPage } from 'next';
import Head from 'next/head';
import { FC, VFC } from 'react';
import clsx from 'clsx';

const Home: NextPage = () => (
  <>
    <Head>
      <title>Dalmo Mendonça | Web Developer</title>
      <meta name="description" content="Hire Me :)" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className="absolute inset-0 px-2 w-full h-fit min-h-screen bg-neutral-300 sm:px-4 md:px-6 lg:px-10">
      <main className="relative px-8 pt-20 pb-10 my-40  mx-auto max-w-5xl bg-white rounded drop-shadow-md sm:px-10 md:px-12 lg:px-16">
        <div className="grid gap-y-10">
          <header className="w-full text-center">
            <h1 className="text-2xl font-bold uppercase">Dalmo Mendonça</h1>
            <p>+64 21 067 3815 – hire@dalmo.dev</p>
            <p>Wellington, NZ – Permanent Resident</p>
            <p>linkedin.com.in/dalmo3 – github.com/dalmo3</p>
          </header>
          <div>
            <H2>Summary</H2>
            <p>
              Senior Frontend Developer exploring the latest web technologies.
              Full stack experience. Bachelor of Computer Engineering with
              strong background in Computer Science and extensive experience in
              developing the most diverse software projects.
            </p>
          </div>
          <SkillList {...technicalSkills} />
          <SkillList {...professionalSkills} />
          <WorkHistory {...{ workHistory }} />
        </div>
      </main>
      <footer className="text-sm text-center text-neutral-600">
        <p>Built with TailwindCSS 🙂</p>
        <a
          className="underline"
          href="https://github.com/dalmo3/cv-page"
          target="_blank"
          rel="noreferrer"
        >
          Source
        </a>
      </footer>
    </div>
  </>
);

export default Home;

type H2 = { noBorder?: boolean };
const H2: FC<H2> = ({ noBorder, children }) => (
  <h2 className={clsx('text-lg font-bold uppercase', !noBorder && 'border-b')}>
    {children}
  </h2>
);

type SkillList = { title: string; skills: string[] };
const SkillList: VFC<SkillList> = ({ title, skills }) => (
  <div>
    <H2>{title}</H2>
    <ul className="sm:column-2 list-disc list-inside">
      {skills.map((skill) => (
        <li key={skill}>{skill}</li>
      ))}
    </ul>
  </div>
);

const technicalSkills: SkillList = {
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

const professionalSkills: SkillList = {
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

type WorkSkill = { title: string; description: string };
type WorkExperience = {
  title: string;
  period: string;
  company: string;
  location: string;
  about: string;
  role: string;
  skills: WorkSkill[];
};

const WorkExperience: FC<WorkExperience> = ({
  title,
  period,
  company,
  location,
  about,
  role,
  skills,
}) => (
  <div>
    <div className="flex gap-x-4 justify-between border-t">
      <h3 className="mt-1 font-bold uppercase">{title}</h3>
      <span className="whitespace-nowrap">{period}</span>
    </div>
    <p>
      <span className="uppercase">{company}</span>, {location} {' – '}
      <i>{about}</i>
    </p>
    <p>
      <strong>Role: </strong>
      {role}
    </p>
    <br />
    {!!skills.length && (
      <>
        <p>
          <strong>Demonstrated Skills:</strong>
        </p>
        <ul className="list-disc list-inside">
          {skills.map(({ title, description }) => (
            <li key={title}>
              <strong> {title}</strong>
              {' – '}
              {description}
            </li>
          ))}
        </ul>
      </>
    )}
  </div>
);

type WorkHistory = { workHistory: WorkExperience[] };
const WorkHistory: VFC<WorkHistory> = ({ workHistory }) => (
  <div>
    <H2 noBorder>Work Experience</H2>
    <div className="grid gap-y-10">
      {workHistory.map((work) => (
        <WorkExperience {...work} key={work.company} />
      ))}
    </div>
  </div>
);

const workHistory: WorkExperience[] = [
  {
    title: 'Frontend Developer',
    period: '2020 - Present',
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
    period: '2018-2020',
    company: 'Virtua',
    location: 'Wellington',
    about: 'Website and App development for small businesses.',
    role: 'Running the business: sales, design, execution, maintenance and support.',
    skills: [
      {
        title: 'Deliver Value',
        description:
          'Understanding the client’s desires, and using my expertise to give them the solutions they need.',
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
    period: '2011 - 2017',
    company: 'Petrobras',
    location: 'Brazil',
    about:
      'Brazil’s biggest company with over 50k employees is also one of the world’s top 10 Oil companies.',
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
