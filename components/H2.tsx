import clsx from 'clsx';
import { FC } from 'react';

type H2 = { noBorder?: boolean };

export const H2: FC<H2> = ({ noBorder, children }) => (
  <h2 className={clsx('text-lg font-bold uppercase', !noBorder && 'border-b')}>
    {children}
  </h2>
);
