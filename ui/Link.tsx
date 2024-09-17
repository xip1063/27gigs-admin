import { DataInteractive } from '@headlessui/react';
import NextLink, { type LinkProps } from 'next/link';
import type { AnchorHTMLAttributes } from 'react';

export default function Link(props: LinkProps) {
  return (
    <DataInteractive>
      <NextLink {...props} />
    </DataInteractive>
  );
}

export type LinkBaseProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  openInNewTab?: boolean;
  disabled?: boolean;
  skipNextLink?: boolean;
};

export function LinkBase({
  children,
  href,
  openInNewTab,
  onClick,
  target,
  disabled,
  skipNextLink,
  rel,
  ...rest
}: LinkBaseProps) {
  if (disabled) {
    return <a {...rest}>{children}</a>;
  }

  if (!href || href.startsWith('#')) {
    return (
      <a href={href} onClick={onClick} {...rest}>
        {children}
      </a>
    );
  }

  const Tag = skipNextLink ? 'a' : Link;

  return (
    <Tag
      href={href}
      onClick={onClick}
      target={openInNewTab ? '_blank' : target}
      rel={openInNewTab ? 'noopener noreferrer' : rel}
      {...rest}
    >
      {children}
    </Tag>
  );
}
