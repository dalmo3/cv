import { VFC } from 'react';

export const Footer: VFC = () => (
  <footer className="text-center text-sm text-neutral-600 print:hidden">
    <p>Built with TailwindCSS 🙂</p>
    <a
      className="underline"
      href="https://github.com/dalmo3/cv-page"
      target="_blank"
      rel="noreferrer"
    >
      Source
    </a>
  </footer>
);
