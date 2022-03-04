import { H2 } from 'components';
import { VFC } from 'react';

export const Education: VFC = () => (
  <div>
    <H2>Education</H2>
    <div className="flex gap-x-4 justify-between pt-1">
      <h3 className="font-bold uppercase">
        Bachelor of Engineering (Computer Engineering)
      </h3>
      <span className="font-semibold whitespace-nowrap">2006 – 2011</span>
    </div>
    <h4 className="font-semibold">Major in Industrial Automation</h4>
    <p>Federal University of Rio Grande do Norte (UFRN) – Natal, Brazil</p>
    <br />
    <div className="flex gap-x-4 justify-between pt-1">
      <h4 className="font-semibold">
        Computer Engineering Exchange Student Scholarship
      </h4>
      <span className="font-semibold whitespace-nowrap">2009 – 2010</span>
    </div>
    <p>McMaster University – Hamilton, Canada</p>
  </div>
);
