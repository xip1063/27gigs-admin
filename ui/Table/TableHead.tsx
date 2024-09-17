import { PropsWithChildren } from 'react';

type TableHeadProps = PropsWithChildren<object>;

export const TableHead = ({ children }: TableHeadProps) => (
  <thead className='bg-slate-50 border-b border-b-slate-200'>{children}</thead>
);
