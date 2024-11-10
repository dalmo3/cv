import { VFC } from 'react';
import { H2, WorkExperience } from 'components';

type WorkHistory = { workHistory: WorkExperience[] };

export const WorkHistory: VFC<WorkHistory> = ({ workHistory }) => (
  <div>
    <H2 noBorder>Work Experience</H2>
    <ul className="grid gap-y-10">
      {workHistory.map((work, i) => (
        <li key={i}>
          {i == 2 && <div className="print-break-before" />}
          <WorkExperience {...work} key={work.company} />
        </li>
      ))}
    </ul>
  </div>
);
