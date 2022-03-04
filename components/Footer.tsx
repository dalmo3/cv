import { VFC } from 'react';

export const Footer: VFC = () => (
  <footer className="text-sm text-center text-neutral-600">
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
