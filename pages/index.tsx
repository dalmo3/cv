import {
  Footer,
  SkillList,
  WorkHistory,
  Additional,
  Education,
  Info,
  Summary,
} from 'components';
import { professionalSkills, technicalSkills, workHistory } from 'data';
import type { NextPage } from 'next';
import Head from 'next/head';

const CV: NextPage = () => (
  <>
    <Head>
      <title>Dalmo Mendonça | Web Developer</title>
      <meta name="description" content="Hire Me :)" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className="absolute inset-0 px-2 w-full h-fit min-h-screen bg-neutral-300 sm:px-4 md:px-6 lg:px-10">
      <main className="relative py-20 px-8 my-40  mx-auto max-w-5xl bg-white rounded drop-shadow-md sm:px-10 md:px-12 lg:px-16">
        <div className="grid gap-y-10">
          <Info />
          <Summary />
          <SkillList {...technicalSkills} />
          <SkillList {...professionalSkills} />
          <WorkHistory {...{ workHistory }} />
          <Education />
          <Additional />
        </div>
      </main>
      <Footer />
    </div>
  </>
);

export default CV;
