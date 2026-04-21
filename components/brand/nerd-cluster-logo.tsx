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
    <svg viewBox="0 0 120 120" role="img" aria-label={label} className={cn('logo-mark', className)}>
      <circle cx="60" cy="60" r="56" fill="#f4f4f4" />
      <text
        x="60"
        y="47"
        textAnchor="middle"
        fontSize="10"
        letterSpacing="4"
        fontFamily="Inter, ui-sans-serif, system-ui"
        fill="#111"
      >
        NERD
      </text>
      <text
        x="60"
        y="69"
        textAnchor="middle"
        fontSize="10"
        letterSpacing="4"
        fontFamily="Inter, ui-sans-serif, system-ui"
        fill="#111"
      >
        CLUSTER
      </text>
    </svg>
  );
}
