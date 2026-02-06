'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { lightColors, darkColors } from '@/styles/theme';

export function useThemeColors() {
  const { resolvedTheme } = useTheme();
  const [colors, setColors] = useState(lightColors);

  useEffect(() => {
    if (!resolvedTheme) return;

    if (resolvedTheme === 'dark') {
      setColors(darkColors);
    } else {
      setColors(lightColors);
    }
  }, [resolvedTheme]);

  return colors;
}
