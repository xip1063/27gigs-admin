import { mergeClasses } from '@/helpers';
import type { PropsWithChildren } from 'react';

import { TextAlign } from './types';
import { convertAlignToClass } from './utils';

type HeaderCellProps = PropsWithChildren<{
  align?: TextAlign | 'char';
  size?: 'md' | 'sm';
}>;

export const HeaderCell = ({
  children,
  align = 'left',
  size = 'md',
}: HeaderCellProps) => (
  <th
    className={mergeClasses(
      'px-4 py-3.5 font-medium text-slate-900 border-r border-slate-300',
      convertAlignToClass(align),
      size === 'sm' ? 'text-xs' : 'text-sm',
      'last:border-r-0'
    )}
  >
    {children}
  </th>
);
