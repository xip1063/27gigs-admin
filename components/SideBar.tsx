import {
  BookOpen01Icon,
  BookOpen02Icon,
  Contact01Icon,
  CursorInWindowIcon,
  Files02Icon,
  FileVerifiedIcon,
  Home02Icon,
  Mail01Icon,
  Message01Icon,
  StickyNote02Icon,
} from 'hugeicons-react';
import { FiHome } from 'react-icons/fi';
import { HiOutlineSquaresPlus } from 'react-icons/hi2';

export default function Sidebar() {
  return (
    <aside className='hidden lg:block fixed z-20 inset-0 top-[3.8125rem] right-auto w-[16rem] pb-10 pr-6 border-r'>
      <nav id='nav' className='lg:text-sm px-6 lg:leading-6 relative'>
        <div className='sticky top-0 -ml-0.5 pointer-events-none'>
          <div className='bg-white' />
          <div className='h-8 bg-gradient-to-b from-white dark:from-slate-900' />
        </div>
        <ul>
          <li>
            <a
              className='group flex items-center lg:text-sm lg:leading-6 mb-4 font-medium text-slate-700 hover:text-slate-900'
              href='/'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                className='size-6 mr-4'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M12.982 2.764c-.351-.273-.527-.41-.72-.462a1 1 0 00-.523 0c-.194.052-.37.189-.721.462L4.235 8.039c-.453.353-.68.53-.843.75a2 2 0 00-.318.65C3 9.704 3 9.991 3 10.565V17.8c0 1.12 0 1.68.218 2.108a2 2 0 00.874.874C4.52 21 5.08 21 6.2 21h2c.28 0 .42 0 .527-.055a.5.5 0 00.218-.218C9 20.62 9 20.48 9 20.2v-6.6c0-.56 0-.84.109-1.054a1 1 0 01.437-.437C9.76 12 10.04 12 10.6 12h2.8c.56 0 .84 0 1.054.109a1 1 0 01.437.437C15 12.76 15 13.04 15 13.6v6.6c0 .28 0 .42.055.527a.5.5 0 00.218.218c.107.055.247.055.527.055h2c1.12 0 1.68 0 2.108-.218a2 2 0 00.874-.874C21 19.48 21 18.92 21 17.8v-7.235c0-.574 0-.861-.074-1.126a2.002 2.002 0 00-.318-.65c-.163-.22-.39-.397-.843-.75l-6.783-5.275z'
                />
              </svg>
              Home
            </a>
          </li>
          <li>
            <a
              className='group flex items-center lg:text-sm lg:leading-6 mb-4 font-medium text-slate-700 hover:text-slate-900'
              href='/'
            >
              <CursorInWindowIcon className='mr-4 size-6' />
              Pages
            </a>
          </li>
          <li>
            <a
              className='group flex items-center lg:text-sm lg:leading-6 mb-4 font-medium text-slate-700 hover:text-slate-900'
              href='/'
            >
              <StickyNote02Icon className='mr-4 size-6' />
              Orders
            </a>
          </li>
          <li>
            <a
              className='group flex items-center lg:text-sm lg:leading-6 mb-4 font-medium text-slate-700 hover:text-slate-900'
              href='/'
            >
              <Contact01Icon className='mr-4 size-6' />
              Contacts
            </a>
          </li>

          <li>
            <a
              className='group flex items-center lg:text-sm lg:leading-6 mb-4 font-medium text-slate-700 hover:text-slate-900'
              href='/'
            >
              <Mail01Icon className='mr-4 size-6' />
              Emails
            </a>
          </li>
          <li>
            <a
              className='group flex items-center lg:text-sm lg:leading-6 mb-4 font-medium text-slate-700 hover:text-slate-900'
              href='/'
            >
              <Files02Icon className='mr-4 size-6' />
              Reports
            </a>
          </li>
          <li>
            <a
              className='group flex items-center lg:text-sm lg:leading-6 mb-4 font-medium text-slate-700 hover:text-slate-900'
              href='/'
            >
              <Message01Icon className='mr-4 size-6' />
              Messages
            </a>
          </li>
          <li>
            <a
              className='group flex items-center lg:text-sm lg:leading-6 mb-4 font-medium text-slate-700 hover:text-slate-900'
              href='/'
            >
              <HiOutlineSquaresPlus className='mr-4 size-6' />
              Extras
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
