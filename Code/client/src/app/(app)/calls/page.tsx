'use client';

import { FaPhoneAlt } from 'react-icons/fa';
import { useThemeColors } from '@/src/hooks/useThemeColors';

export default function CallsPage() {
  const colors = useThemeColors();

  return (
    <div
      style={{ backgroundColor: colors.backgroundAlt }}
      className="flex flex-1 flex-col items-center justify-center text-center gap-3"
    >
      <FaPhoneAlt size={72} color={colors.textMuted} />

      <h2 className="text-lg font-medium" style={{ color: colors.text }}>
        Call history
      </h2>

      <p className="text-sm text-text-muted max-w-xs">
        Select a call to view details
      </p>
    </div>
  );
}
