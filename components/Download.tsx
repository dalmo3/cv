import { VFC } from 'react';

export const Download: VFC = () => (
  <a
    className="block relative z-10 py-4 px-10 -mr-10 -mb-3 ml-auto  w-fit font-semibold text-neutral-500 hover:text-current hover:decoration-neutral-500  underline-offset-4 rounded"
    role="button"
    href="/Dalmo-Mendonca-CV-latest.pdf"
    target="_blank"
  >
    Download
  </a>
);
