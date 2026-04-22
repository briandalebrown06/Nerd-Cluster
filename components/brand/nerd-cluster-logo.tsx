import Image from 'next/image';

import { cn } from '@/lib/cn';

type NerdClusterLogoProps = {
  className?: string;
  label?: string;
  priority?: boolean;
};

export function NerdClusterLogo({
  className,
  label = 'Nerd Cluster logo',
  priority = false,
}: NerdClusterLogoProps) {
  return (
    <Image
      src="/brand/nerd-cluster-logo.png"
      alt={label}
      width={240}
      height={80}
      className={cn('logo-mark', className)}
      priority={priority}
    />
  );
}
