'use client';

import { useThemeColors } from '@/src/hooks/useThemeColors';
import Image from 'next/image';
type AvatarProps = {
  src?: string;
  name: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
};

export default function Avatar({ src, name, size = 'md' }: AvatarProps) {
  const colors = useThemeColors();

  const sizes = {
    sm: 32,
    md: 40,
    lg: 56,
    xl: 96, // 🔥 real profile size
  };

  const dimension = sizes[size];

  if (!src) {
    return (
      <div
        className="flex items-center justify-center rounded-full font-semibold select-none"
        style={{
          width: dimension,
          height: dimension,
          backgroundColor: colors.primary,
          color: colors.text,
          fontSize: dimension / 2.5,
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
      width={dimension}
      height={dimension}
      className="rounded-full object-cover"
    />
  );
}
