import type { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react';

import { cn } from '@/lib/cn';

type CardShellProps<T extends ElementType = 'div'> = {
  as?: T;
  children: ReactNode;
  className?: string;
} & Omit<ComponentPropsWithoutRef<T>, 'as' | 'children' | 'className'>;

export function CardShell<T extends ElementType = 'div'>({
  as,
  children,
  className,
  ...props
}: CardShellProps<T>) {
  const Component = as ?? 'div';

  return (
    <Component className={cn('card-shell', className)} {...props}>
      {children}
    </Component>
  );
}
