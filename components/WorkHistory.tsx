import { VFC } from 'react';
import { H2, WorkExperience } from 'components';

type WorkHistory = { workHistory: WorkExperience[] };

export const WorkHistory: VFC<WorkHistory> = ({ workHistory }) => (
  <div>
    <H2 noBorder>Work Experience</H2>
    <div className="grid gap-y-10">
      {workHistory.map((work) => (
        <WorkExperience {...work} key={work.company} />
      ))}
    </div>
  </div>
);
