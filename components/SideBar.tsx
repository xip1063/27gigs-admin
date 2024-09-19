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
import Button from '@/ui/Button';
import { useRouter } from 'next/router';
import { mergeClasses } from '@/helpers';

const navigation = [
  { title: 'Home', href: '/', icon: Icons.home },
  { title: 'Pages', href: '/pages', icon: CursorInWindowIcon },
  { title: 'Orders', href: '/orders', icon: StickyNote02Icon },
  { title: 'Contacts', href: '/contacts', icon: Contact02Icon },
  { title: 'Emails', href: '/emails', icon: Mail01Icon },
  { title: 'Reports', href: '/reports', icon: Files02Icon },
  { title: 'Messages', href: '/messages', icon: Message01Icon },
  { title: 'Extras', href: '/extras', icon: HiOutlineSquaresPlus },
];

export default function Sidebar() {
  const { pathname } = useRouter();

  return (
    <aside className='hidden lg:block fixed z-20 inset-0 bg-white  right-auto w-[16rem] pb-10 pr-6 border-r border-[#DFE3E6]'>
      <nav id='nav' className='lg:text-sm px-6 lg:leading-6 relative'>
        <ul className='mt-24'>
          {navigation.map((navItem) => (
            <li key={navItem.title}>
              <Button
                href={navItem.href}
                leftSlot={
                  <navItem.icon
                    className={mergeClasses(
                      'size-5 mr-2',
                      navItem.href === pathname
                        ? ''
                        : 'text-slate-500 hover:text-slate-600'
                    )}
                  />
                }
                className={mergeClasses(
                  'w-full mb-4',
                  pathname === navItem.href
                    ? 'btn-gradient border-0'
                    : 'bg-transparent border-0 text-slate-700'
                )}
              >
                {navItem.title}
              </Button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
