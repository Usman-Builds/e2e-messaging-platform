'use client';

import React from 'react';
import { useThemeColors } from '@/hooks/useThemeColors';

type IconButtonProps = {
  icon: React.ReactNode;
  onClick?: () => void;
  className?: string;
};

export default function IconButton({ icon, onClick, className = '' }: IconButtonProps) {
  const colors = useThemeColors();

  return (
    <button
      onClick={onClick}
      style={{
        color: colors.text,
      }}
      className={`p-2 rounded-full transition hover:brightness-90 ${className}`}
    >
      {icon}
    </button>
  );
}
