import { VFC } from 'react';
import { H2 } from 'components';

export const Additional: VFC = () => (
  <div>
    <H2>Additional Info</H2>
    {additional.map(({ title, description }) => (
      <div key={title}>
        <h3 className="inline font-semibold">{title}</h3>
        <p className="inline">
          {' – '}
          {description}
        </p>
      </div>
    ))}
  </div>
);

const additional = [
  {
    title: 'Programming Languages',
    description: 'C, C#, Kotlin, Java, OCaml, JavaScript, TypeScript',
  },
  {
    title: 'Spoken Languages',
    description:
      'English (Fluent), Portuguese (Native), Spanish (Intermediate)',
  },
  {
    title: 'Hobbies',
    description:
      'Playing football, bass guitar and point-and-click video games',
  },
  {
    title: 'Visa Status (NZ)',
    description: 'New Zealand Citizen',
  },
];
