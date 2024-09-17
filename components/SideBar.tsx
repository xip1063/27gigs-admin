import {
  Contact02Icon,
  CursorInWindowIcon,
  Files02Icon,
  Mail01Icon,
  Message01Icon,
  StickyNote02Icon,
} from 'hugeicons-react';
import { HiOutlineSquaresPlus } from 'react-icons/hi2';
import { Icons } from './Icons';

const navigation = [
  { title: 'Home', href: '/', icon: Icons.home },
  { title: 'Pages', href: '/pages', icon: CursorInWindowIcon },
  { title: 'Orders', href: '/orders', icon: StickyNote02Icon },
  { title: 'Contacts', href: '/contacts', icon: Contact02Icon },
  { title: 'Emails', href: '/emails', icon: Mail01Icon },
  { title: 'Reports', href: '/', icon: Files02Icon },
  { title: 'Messages', href: '/', icon: Message01Icon },
  { title: 'Extras', href: '/', icon: HiOutlineSquaresPlus },
];

export default function Sidebar() {
  return (
    <aside className='hidden lg:block fixed z-20 inset-0 bg-white  right-auto w-[16rem] pb-10 pr-6 border-r border-[#DFE3E6]'>
      <nav id='nav' className='lg:text-sm px-6 lg:leading-6 relative'>
        <ul className='mt-[82px]'>
          {navigation.map((navItem) => (
            <li key={navItem.title}>
              <a
                className='group flex items-center lg:text-sm lg:leading-6 mb-4 font-medium text-slate-700 hover:text-slate-900'
                href={navItem.href}
              >
                <navItem.icon className='size-6 mr-4 text-slate-500 hover:text-slate-600' />
                {navItem.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
