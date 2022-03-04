import { H2 } from 'components';
import { VFC } from 'react';

export type SkillList = { title: string; skills: string[] };

export const SkillList: VFC<SkillList> = ({ title, skills }) => (
  <div>
    <H2>{title}</H2>
    <ul className="sm:column-2 list-disc list-inside">
      {skills.map((skill) => (
        <li key={skill}>{skill}</li>
      ))}
    </ul>
  </div>
);
