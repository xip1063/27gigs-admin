import Link from 'next/link';

export default function Header() {
  return (
    <div className='sticky top-0 z-40 w-full backdrop-blur flex-none transition-colors duration-500 lg:z-50 border-b border-slate-900/10 dark:border-slate-50/[0.06] bg-white supports-backdrop-blur:bg-white/95 dark:bg-slate-900/75'>
      <div className='relative h-14 px-4 md:px-6 flex items-center'>
        <Link
          className='mr-3 font-bold font-heading text-xl text-slate-900'
          href='/'
        >
          TwentySevenGigs
        </Link>
        <div className='relative'></div>

        <div className='relative hidden lg:flex items-center ml-auto'>
          <nav className='text-sm leading-6 font-semibold text-slate-700 dark:text-slate-200'>
            <ul className='flex space-x-8'>
              <button>Create</button>
            </ul>
          </nav>
          <div className='flex items-center border-l border-slate-200 ml-6 pl-6'>
            <button type='button'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                className='size-6 text-slate-500 hover:text-slate-600'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M15 19a3 3 0 11-6 0m4.796-12.761a2.5 2.5 0 10-3.593 0M18 11.2c0-1.38-.632-2.702-1.758-3.677C15.117 6.548 13.591 6 12 6c-1.592 0-3.118.548-4.243 1.523C6.632 8.498 6 9.821 6 11.2c0 2.282-.566 3.95-1.272 5.145-.805 1.36-1.207 2.041-1.191 2.204.018.186.051.244.202.355.132.096.794.096 2.119.096h12.284c1.324 0 1.987 0 2.118-.096.151-.11.185-.17.203-.355.016-.163-.387-.843-1.191-2.204C18.566 15.15 18 13.482 18 11.2z'
                />
              </svg>
            </button>

            <img
              className='inline-block ml-6 h-8 w-8 rounded-full'
              src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
              alt=''
            />
          </div>
        </div>
        <button
          type='button'
          className='ml-auto text-slate-500 w-8 h-8 -my-1 flex items-center justify-center hover:text-slate-600 lg:hidden dark:text-slate-400 dark:hover:text-slate-300'
        >
          <span className='sr-only'>Search</span>
          <svg
            width={24}
            height={24}
            fill='none'
            stroke='currentColor'
            strokeWidth={2}
            strokeLinecap='round'
            strokeLinejoin='round'
            aria-hidden='true'
          >
            <path d='m19 19-3.5-3.5' />
            <circle cx={11} cy={11} r={6} />
          </svg>
        </button>
        <div className='ml-2  lg:hidden'>
          <button
            type='button'
            className='text-slate-500 w-8 h-8 flex items-center justify-center hover:text-slate-600'
          >
            <span className='sr-only'>Navigation</span>
            <svg width={24} height={24} fill='none' aria-hidden='true'>
              <path
                d='M12 6v.01M12 12v.01M12 18v.01M12 7a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z'
                stroke='currentColor'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
