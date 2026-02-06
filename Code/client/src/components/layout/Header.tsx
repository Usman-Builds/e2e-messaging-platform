'use client';

import { useThemeColors } from '@/src/hooks/useThemeColors';

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
      <h1 style={{ color: colors.primary }} className="text-xl font-semibold">
        Privy
      </h1>

    </header>
  );
}
