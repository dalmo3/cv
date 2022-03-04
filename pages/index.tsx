import {
  Additional,
  Download,
  Education,
  Footer,
  Info,
  SkillList,
  Summary,
  WorkHistory,
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
      <div className="overflow-x-hidden mx-auto mt-2 mb-16 max-w-5xl sm:my-16  lg:mb-32">
        <Download />
        <main className="relative py-20 px-8  bg-white rounded drop-shadow-md sm:px-10 md:px-12 lg:px-16">
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
      </div>
      <Footer />
    </div>
  </>
);

export default CV;
