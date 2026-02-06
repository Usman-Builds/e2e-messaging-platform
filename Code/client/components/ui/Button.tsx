'use client';

import React from 'react';
import { useThemeColors } from '@/hooks/useThemeColors';

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  className?: string;
};

export default function Button({ children, onClick, variant = 'primary', className = '' }: ButtonProps) {
  const colors = useThemeColors();

  const base = 'px-4 py-2 rounded-lg font-medium transition focus:outline-none';

  const styles = {
    primary: {
      backgroundColor: colors.primary,
      color: colors.text,
    },
    secondary: {
      backgroundColor: 'transparent',
      borderColor: colors.borderChat,
      color: colors.text,
    },
  };

  return (
    <button
      onClick={onClick}
      style={variant === 'primary' ? styles.primary : styles.secondary}
      className={`${base} ${className}`}
    >
      {children}
    </button>
  );
}
