'use client';
import { mergeClasses } from '@/helpers';
import {
  Description as HeadlessDescription,
  Dialog as HeadlessDialog,
  DialogPanel as HeadlessDialogPanel,
  DialogTitle as HeadlessDialogTitle,
  Transition as HeadlessTransition,
  TransitionChild as HeadlessTransitionChild,
  type DialogProps as HeadlessDialogProps,
} from '@headlessui/react';
import type React from 'react';
import { Fragment } from 'react';

const sizes = {
  xs: 'sm:max-w-xs',
  sm: 'sm:max-w-sm',
  md: 'sm:max-w-md',
  lg: 'sm:max-w-lg',
  xl: 'sm:max-w-xl',
  '2xl': 'sm:max-w-2xl',
  '3xl': 'sm:max-w-3xl',
  '4xl': 'sm:max-w-4xl',
  '5xl': 'sm:max-w-5xl',
};

export default function Modal({
  open,
  onClose,
  size = 'lg',
  className,
  children,
  ...props
}: {
  size?: keyof typeof sizes;
  children: React.ReactNode;
} & HeadlessDialogProps) {
  return (
    <HeadlessTransition appear as={Fragment} show={open} {...props}>
      <HeadlessDialog onClose={onClose} className='relative z-50'>
        <HeadlessTransitionChild
          as={Fragment}
          enter='ease-out duration-100'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-100'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 z-40 flex w-screen justify-center overflow-y-auto bg-slate-950/25 px-2 py-2 focus:outline-0 dark:bg-gray-950/50 sm:px-6 sm:py-8 lg:px-8 lg:py-16' />
        </HeadlessTransitionChild>

        <HeadlessTransitionChild
          //@ts-ignore
          className='fixed inset-0 z-50 w-screen overflow-y-auto pt-4 sm:pt-0'
          enter='ease-out duration-100'
          enterFrom='opacity-0 translate-y-12 sm:translate-y-0'
          enterTo='opacity-100 translate-y-0'
          leave='ease-in duration-100'
          leaveFrom='opacity-100 translate-y-0'
          leaveTo='opacity-0 translate-y-12 sm:translate-y-0'
        >
          <div className='grid min-h-full  justify-items-center grid-rows-[1fr_auto_3fr] p-4'>
            <HeadlessTransitionChild
              as={HeadlessDialogPanel}
              className={mergeClasses(
                className,
                sizes[size],
                'row-start-2 w-full min-w-0 rounded-t-sm border border-default bg-white shadow-sm [--gutter:theme(spacing.8)] sm:mb-auto sm:rounded-sm forced-colors:outline'
              )}
              enter='ease-out duration-100'
              enterFrom='sm:scale-95'
              enterTo='sm:scale-100'
              leave='ease-in duration-100'
              leaveFrom='sm:scale-100'
              leaveTo='sm:scale-100'
            >
              {children}
            </HeadlessTransitionChild>
          </div>
        </HeadlessTransitionChild>
      </HeadlessDialog>
    </HeadlessTransition>
  );
}

export function ModalTitle({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div className='flex items-center justify-between border-b border-default px-4 py-3'>
      <HeadlessDialogTitle
        {...props}
        className={mergeClasses(
          className,
          'my-0 text-balance font-semibold text-slate-900 sm:text-base/6'
        )}
      />
    </div>
  );
}

export function ModalDescription({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <HeadlessDescription
      {...props}
      className={mergeClasses(className, 'mt-2 text-pretty p-4')}
    />
  );
}

export function ModalBody({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'>) {
  return <div {...props} className={mergeClasses(className, 'p-4')} />;
}

export function ModalActions({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div
      {...props}
      className={mergeClasses(
        className,
        'mt-5 flex flex-col-reverse items-center justify-end gap-3 overflow-hidden border-t border-default bg-subtle px-4 py-2.5 *:w-full sm:flex-row sm:*:w-auto'
      )}
    />
  );
}
