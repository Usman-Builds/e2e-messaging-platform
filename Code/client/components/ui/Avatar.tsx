'use client';

import Image from 'next/image';
import { useThemeColors } from '@/hooks/useThemeColors';

type AvatarProps = {
  src?: string;
  name: string;
  size?: 'sm' | 'md' | 'lg';
};

export default function Avatar({ src, name, size = 'md' }: AvatarProps) {
  const colors = useThemeColors();

  const sizes = {
    sm: 32,
    md: 40,
    lg: 48,
  };

  if (!src) {
    return (
      <div
        className="flex items-center justify-center rounded-full font-semibold"
        style={{
          width: sizes[size],
          height: sizes[size],
          backgroundColor: colors.primary,
          color: colors.text,
        }}
      >
        {name.charAt(0).toUpperCase()}
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={name}
      width={sizes[size]}
      height={sizes[size]}
      className="rounded-full object-cover"
    />
  );
}
