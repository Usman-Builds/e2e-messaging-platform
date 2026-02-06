'use client';

import React from 'react';
import { useThemeColors } from '@/hooks/useThemeColors';

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Card({ children, className = '' }: CardProps) {
  const colors = useThemeColors();

  return (
    <div
      style={{
        backgroundColor: colors.backgroundAlt,
        color: colors.text,
        borderColor: colors.borderChat,
        boxShadow: colors.shadowChat,
      }}
      className={`rounded-xl p-4 max-w-sm w-fit ${className}`}
    >
      {children}
    </div>
  );
}
