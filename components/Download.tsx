import { VFC } from 'react';

export const Download: VFC = () => (
  <a
    className="relative z-10 -mr-10 -mb-3 ml-auto block w-fit rounded  py-4 px-10 font-semibold text-neutral-500 underline-offset-4  hover:text-current hover:decoration-neutral-500 print:hidden"
    role="button"
    href="/Dalmo-Mendonca-CV-latest.pdf"
    target="_blank"
  >
    Download
  </a>
);
