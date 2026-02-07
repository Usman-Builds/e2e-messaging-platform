'use client';

import { Irish_Grover } from 'next/font/google';
import { useThemeColors } from '@/src/hooks/useThemeColors';

const irishGrover = Irish_Grover({
  subsets: ['latin'],
  weight: '400',
});

export default function Header() {
  const colors = useThemeColors();

  return (
    <header
      style={{
        backgroundColor: colors.backgroundAlt,
        borderBottom: `1px solid ${colors.borderChat}`,
      }}
      className="h-14 flex items-center justify-between px-4"
    >
      <h1
        style={{ color: colors.primary }}
        className={`text-2xl ${irishGrover.className}`}
      >
        Privy
      </h1>
    </header>
  );
}
