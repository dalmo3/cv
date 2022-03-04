import { VFC } from 'react';

export const Download: VFC = () => (
  <a
    className="block relative z-10 py-4 px-10 -mr-10 -mb-3 ml-auto  w-fit font-semibold hover:text-neutral-600 hover:underline decoration-transparent hover:decoration-neutral-500 decoration-2 underline-offset-4 rounded duration-200 hover:ease-in"
    role="button"
    href="/Dalmo-Mendonca-CV-latest.pdf"
    target="_blank"
  >
    Download
  </a>
);
