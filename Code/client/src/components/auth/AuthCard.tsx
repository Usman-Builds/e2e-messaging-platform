// components/auth/AuthCard.tsx
'use client';

import { useThemeColors } from '@/src/hooks/useThemeColors';
import { ReactNode } from 'react';
export default function AuthCard({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: ReactNode;
}) {
  const colors = useThemeColors();

  return (
    <div
      style={{
        backgroundColor: colors.backgroundAlt,
        boxShadow: colors.shadowChat,
      }}
      className="w-full max-w-md rounded-2xl p-8"
    >
      <h1 className="text-2xl font-semibold mb-1">{title}</h1>
      {subtitle && (
        <p className="text-sm text-text-muted mb-6">{subtitle}</p>
      )}

      {children}
    </div>
  );
}
