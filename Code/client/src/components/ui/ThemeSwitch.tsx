// components/settings/ThemeSwitch.tsx
'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import ToggleSwitch from './ToggleSwitch';

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return <div className="w-10 h-5" />;

  const isDark = resolvedTheme === 'dark';

  return (
    <ToggleSwitch
      checked={isDark}
      onChange={() => setTheme(isDark ? 'light' : 'dark')}
    />
  );
}
