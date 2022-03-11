import { H2 } from 'components';
import { VFC } from 'react';

export const Additional: VFC = () => (
  <div>
    <H2>Additional Info</H2>
    <div>
      <h3 className="inline font-semibold">Programming Languages</h3>
      <p className="inline">
        {' – '}C, C#, C++, Java, ML, OCaml, JavaScript, TypeScript, Verilog
      </p>
    </div>
    <div>
      <h3 className="inline font-semibold">Spoken Languages</h3>
      <p className="inline">
        {' – '}English (Fluent), Portuguese (Native), Spanish (Intermediate)
      </p>
    </div>
    <div>
      <h3 className="inline font-semibold">Visa Status</h3>
      <p className="inline">{' – '}Permanent Resident</p>
    </div>
  </div>
);
