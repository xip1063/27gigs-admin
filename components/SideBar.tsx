import { FiBookmark } from 'react-icons/fi';
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
              <FiBookmark className='mr-4 size-6' />
              Home
            </a>
          </li>
          <li>
            <a
              className='group flex items-center lg:text-sm lg:leading-6 mb-4 font-medium text-slate-700 hover:text-slate-900'
              href='/'
            >
              <FiBookmark className='mr-4 size-6' />
              Pages
            </a>
          </li>
          <li>
            <a
              className='group flex items-center lg:text-sm lg:leading-6 mb-4 font-medium text-slate-700 hover:text-slate-900'
              href='/'
            >
              <FiBookmark className='mr-4 size-6' />
              Orders
            </a>
          </li>
          <li>
            <a
              className='group flex items-center lg:text-sm lg:leading-6 mb-4 font-medium text-slate-700 hover:text-slate-900'
              href='/'
            >
              <FiBookmark className='mr-4 size-6' />
              Contacts
            </a>
          </li>
          <li>
            <a
              className='group flex items-center lg:text-sm lg:leading-6 mb-4 font-medium text-slate-700 hover:text-slate-900'
              href='/'
            >
              <FiBookmark className='mr-4 size-6' />
              Reports
            </a>
          </li>
          <li>
            <a
              className='group flex items-center lg:text-sm lg:leading-6 mb-4 font-medium text-slate-700 hover:text-slate-900'
              href='/'
            >
              <FiBookmark className='mr-4 size-6' />
              Emails
            </a>
          </li>
          <li>
            <a
              className='group flex items-center lg:text-sm lg:leading-6 mb-4 font-medium text-slate-700 hover:text-slate-900'
              href='/'
            >
              <FiBookmark className='mr-4 size-6' />
              Reports
            </a>
          </li>
          <li>
            <a
              className='group flex items-center lg:text-sm lg:leading-6 mb-4 font-medium text-slate-700 hover:text-slate-900'
              href='/'
            >
              <FiBookmark className='mr-4 size-6' />
              Messages
            </a>
          </li>
          <li>
            <a
              className='group flex items-center lg:text-sm lg:leading-6 mb-4 font-medium text-slate-700 hover:text-slate-900'
              href='/'
            >
              <FiBookmark className='mr-4 size-6' />
              Extras
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
