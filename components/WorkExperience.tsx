import { VFC } from 'react';

type WorkSkill = { title: string; description: string };

export type WorkExperience = {
  title: string;
  period: string;
  company: string;
  location: string;
  about: string;
  role: string;
  skills: WorkSkill[];
};

export const WorkExperience: VFC<WorkExperience> = ({
  title,
  period,
  company,
  location,
  about,
  role,
  skills,
}) => (
  <div>
    <div className="flex justify-between gap-x-4 border-t pt-1">
      <h3 className="font-bold uppercase">{title}</h3>
      <span className="whitespace-nowrap font-semibold">{period}</span>
    </div>
    <p>
      <span className="uppercase">{company}</span>
      {`, ${location} – `}
      <i>{about}</i>
    </p>
    <div>
      <h4 className="inline font-semibold">Role: </h4>
      <p className="inline">{role}</p>
    </div>
    {!!skills.length && (
      <>
        <br />
        <h4 className="font-semibold">Demonstrated Skills:</h4>
        <ul className="list-inside list-disc">
          {skills.map(({ title, description }) => (
            <li key={title}>
              <h5 className="inline font-semibold"> {title}</h5>
              <p className="inline">
                {' – '}
                {description}
              </p>
            </li>
          ))}
        </ul>
      </>
    )}
  </div>
);
