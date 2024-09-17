import { mergeClasses } from '@/helpers';
import { PropsWithChildren } from 'react';

type RowProps = PropsWithChildren<{
  subtle?: boolean;
}>;

export const Row = ({ children, subtle }: RowProps) => (
  <tr
    className={mergeClasses(
      'even:bg-slate-50',
      'even:[&_summary]:bg-element',
      subtle && 'opacity-50'
    )}
  >
    {children}
  </tr>
);
