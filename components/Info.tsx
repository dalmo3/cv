import { VFC } from 'react';

export const Info: VFC = () => (
  <>
    <div className="w-full text-center">
      <h1 className="text-2xl font-bold uppercase">Dalmo Mendonça</h1>
      <h2 className="sr-only">Location</h2>
      <p>Wellington, NZ – NZ Citizen</p>
    </div>
    <div>
      <h2 className="sr-only">Contact Information</h2>
      <ul className="sm:column-2 font-semibold">
        <li>
          <a href="tel:+64 21 067 3815" target="_blank" rel="noreferrer">
            +64 21 067 3815
          </a>
        </li>
        <li>
          <a href="mailto:hire@dalmo.dev" target="_blank" rel="noreferrer">
            hire@dalmo.dev
          </a>
        </li>
        <li className="sm:text-right">
          <a
            href="https://linkedin.com/in/dalmo3"
            target="_blank"
            rel="noreferrer"
          >
            linkedin/dalmo3
          </a>
        </li>
        <li className="sm:text-right">
          <a href="https://github.com/dalmo3" target="_blank" rel="noreferrer">
            github/dalmo3
          </a>
        </li>
      </ul>
    </div>
  </>
);
