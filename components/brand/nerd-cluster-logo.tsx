import Image from 'next/image';

import { cn } from '@/lib/cn';

type NerdClusterLogoProps = {
  className?: string;
  label?: string;
};

export function NerdClusterLogo({
  className,
  label = 'Nerd Cluster logo mark',
}: NerdClusterLogoProps) {
  return (
    <Image
      src="/brand/nerd-cluster-logo.jpg"
      alt={label}
      width={96}
      height={96}
      className={cn('logo-mark', className)}
      priority
    />
  );
}
