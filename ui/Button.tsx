import { mergeClasses, titleCase } from '@/helpers';
import React, {
  cloneElement,
  type ButtonHTMLAttributes,
  type ReactElement,
} from 'react';
import { LinkBase, LinkBaseProps } from './Link';

export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
export type Variant =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'destructive'
  | 'default';

export type ButtonBaseProps = ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonProps = ButtonBaseProps &
  LinkBaseProps & {
    size?: ButtonSize;
    variant?: Variant;
    leftSlot?: ReactElement;
    rightSlot?: ReactElement;
    skipCapitalization?: boolean;
  };

export function ButtonBase({
  children,
  className,
  onClick,
  type = 'button',
  disabled = false,
  ...rest
}: ButtonBaseProps) {
  return (
    <button
      className={mergeClasses('flex cursor-pointer', className)}
      disabled={disabled}
      type={type}
      onClick={disabled ? undefined : onClick}
      {...rest}
    >
      {children}
    </button>
  );
}

function getSizeClasses(size: ButtonSize) {
  switch (size) {
    case 'xs':
      return 'h-7 px-3 text-xs';
    case 'sm':
      return 'h-8 px-3 text-sm';
    case 'md':
      return 'h-9 px-3 text-sm';
    case 'lg':
      return 'h-10 px-6 text-base';
    case 'xl':
      return 'h-11 px-6 text-base';
    case '2xl':
      return 'h-12 px-6 text-lg';
  }
}

function getThemeClasses(theme: Variant, disabled = false) {
  switch (theme) {
    case 'primary':
      return mergeClasses(
        'border-[#0D99FF] bg-[#0D99FF] dark:bg-[#0C8CE9] dark:border-[#0C8CE9] text-white shadow-xs',
        !disabled && 'hocus:bg-[#007BE5] active:scale-98',
        disabled && 'bg-[#A8D4FF] border-[#A8D4FF] text-white'
      );
    case 'destructive':
      return mergeClasses(
        'border-red-600 bg-red-600 text-white shadow-xs',
        !disabled && 'hocus:bg-red-700 active:scale-98',
        disabled && 'bg-red-300 border-red-300'
      );
    case 'secondary':
      return mergeClasses(
        'border-btn-secondary bg-btn-secondary text-btn-secondary shadow-xs',
        !disabled && 'hocus:bg-btn-secondary-hover active:scale-98',
        disabled &&
          'bg-btn-secondary-disabled border-btn-secondary-disabled text-btn-secondary-disabled'
      );
    case 'success':
      return mergeClasses(
        'border-green-600 bg-green-600 text-white shadow-xs',
        !disabled && 'hocus:bg-green-700 active:scale-98',
        disabled && 'bg-green-300 border-green-300 text-white'
      );
    case 'default':
      return mergeClasses(
        'border-black bg-black text-white dark:bg-white dark:text-black dark:border-white/5 shadow-xs',
        !disabled && 'hocus:bg-black/80 hocus:dark:bg-white/90 active:scale-98',
        disabled && 'bg-[#4A4A4A] border-[#4A4A4A] text-white'
      );
  }
}

function getIconSizeClasses(size: ButtonSize) {
  switch (size) {
    case 'xs':
      return 'size-[0.875rem]';
    case 'sm':
      return 'size-4';
    case 'md':
      return 'size-5';
    case 'lg':
      return 'size-6';
    case 'xl':
      return 'size-7';
    case '2xl':
      return 'size-8';
  }
}

function getThemedIconClasses(theme: Variant) {
  switch (theme) {
    case 'primary':
      return 'text-white';
    case 'destructive':
      return 'text-red-300 hocus:text-red-200';
    case 'secondary':
      return 'text-button-secondary-icon';
    case 'success':
      return 'text-button-success-icon';
  }
}

function getButtonIconClasses(size: ButtonSize) {
  switch (size) {
    case 'xs':
      return 'px-0  justify-center items-center';
    case 'sm':
      return 'px-0 justify-center items-center';
    case 'md':
      return 'px-0 justify-center items-center';
    case 'lg':
      return 'px-0 justify-center items-center';
    case 'xl':
      return 'px-0 justify-center items-center';
    case '2xl':
      return 'px-0 justify-center items-center';
  }
}

function isIconElement(element: ReactElement) {
  if (React.isValidElement(element)) {
    // @ts-ignore React Portal did not have `displayName` prop, but it is a valid element
    return element.type?.displayName?.endsWith('Icon') ?? false;
  }
  return false;
}

function getIconProps(element: ReactElement, classNames: string) {
  return {
    ...element.props,
    className: mergeClasses(classNames, element.props.className),
  };
}

export default function Button({
  children,
  size = 'md',
  variant = 'primary',
  skipCapitalization = false,
  href,
  disabled,
  className,
  leftSlot,
  rightSlot,
  openInNewTab,
  ...rest
}: ButtonProps) {
  const isLeftSlotIcon = leftSlot && isIconElement(leftSlot);
  const isRightSlotIcon = rightSlot && isIconElement(rightSlot);
  const iconClasses =
    (isLeftSlotIcon || isRightSlotIcon) &&
    mergeClasses(
      getIconSizeClasses(size),
      getThemedIconClasses(variant),
      disabled && 'opacity-60'
    );
  const isSingleIconButton = (leftSlot || rightSlot) && !children;

  const twClasses = mergeClasses(
    `inline-flex border border-solid rounded font-medium gap-2 items-center whitespace-nowrap transition`,
    getSizeClasses(size),
    getThemeClasses(variant, disabled),
    isSingleIconButton && getButtonIconClasses(size),
    disabled && 'cursor-default opacity-80 pointer-event-none',
    className
  );

  const content = (
    <>
      {isLeftSlotIcon
        ? cloneElement(leftSlot, getIconProps(leftSlot, iconClasses))
        : leftSlot}
      {children && (
        <span
          className={mergeClasses(
            'flex self-center text-inherit leading-none',
            href && 'select-none'
          )}
        >
          {typeof children === 'string' && !skipCapitalization
            ? titleCase(children)
            : children}
        </span>
      )}
      {isRightSlotIcon
        ? cloneElement(rightSlot, getIconProps(rightSlot, iconClasses))
        : rightSlot}
    </>
  );

  if (href) {
    return (
      <LinkBase
        href={href}
        className={twClasses}
        disabled={disabled}
        openInNewTab={openInNewTab}
        {...rest}
      >
        {content}
      </LinkBase>
    );
  } else {
    return (
      <ButtonBase className={twClasses} disabled={disabled} {...rest}>
        {content}
      </ButtonBase>
    );
  }
}
