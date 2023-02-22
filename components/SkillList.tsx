import { VFC } from 'react';
import { H2 } from 'components';

export type SkillList = { title: string; skills: string[] };

export const SkillList: VFC<SkillList> = ({ title, skills }) => (
  <div>
    <H2>{title}</H2>
    <ul className="sm:column-2 list-inside list-disc">
      {skills.map((skill) => (
        <li key={skill}>{skill}</li>
      ))}
    </ul>
  </div>
);
