import { VFC } from 'react';
import { H2 } from 'components';

export const Education: VFC = () => (
  <div>
    <H2>Education</H2>
    <div className="flex justify-between gap-x-4 pt-1">
      <h3 className="font-bold uppercase">
        Bachelor of Engineering (Computer Engineering)
      </h3>
      <span className="whitespace-nowrap font-semibold">2006 – 2011</span>
    </div>
    <h4 className="font-semibold">Major in Industrial Automation</h4>
    <p>Federal University of Rio Grande do Norte (UFRN) – Natal, Brazil</p>
    <br />
    <div className="flex justify-between gap-x-4 pt-1">
      <h4 className="font-semibold">
        Computer Engineering Exchange Student Scholarship
      </h4>
      <span className="whitespace-nowrap font-semibold">2009 – 2010</span>
    </div>
    <p>McMaster University – Hamilton, Canada</p>
  </div>
);
