import type { NextPage } from 'next';
import Head from 'next/head';
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

const CV: NextPage = () => (
  <>
    <Head>
      <title>Dalmo Mendonça | Web Developer</title>
      <meta name="description" content="Hire Me :)" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className="absolute inset-0 h-fit min-h-screen w-full bg-neutral-300 px-2 print:px-0 sm:px-4 md:px-6 lg:px-10">
      <div className="mx-auto mt-2 mb-16 max-w-5xl overflow-x-hidden print:my-0 print:max-w-none sm:my-16 lg:mb-32">
        <Download />
        <main className="relative rounded bg-white py-20 px-8 drop-shadow-md print:p-0 print:drop-shadow-none sm:px-10 md:px-12 lg:px-16">
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
