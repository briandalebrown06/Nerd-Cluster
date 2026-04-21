import type { ReactNode } from 'react';

import { cn } from '@/lib/cn';

type CardShellProps = {
  children: ReactNode;
  className?: string;
};

export function CardShell({ children, className }: CardShellProps) {
  return <article className={cn('card-shell', className)}>{children}</article>;
}
