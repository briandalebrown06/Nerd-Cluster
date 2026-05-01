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
      src="/brand/nerd-cluster-logo.jpg"
      alt={label}
      width={269}
      height={254}
      className={cn('logo-mark', className)}
      priority={priority}
    />
  );
}
