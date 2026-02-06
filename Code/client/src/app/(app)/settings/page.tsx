'use client';

import { FaCog } from 'react-icons/fa';
import { useThemeColors } from '@/src/hooks/useThemeColors';

export default function SettingsPage() {
  const colors = useThemeColors();

  return (
    <div
      style={{ backgroundColor: colors.backgroundAlt }}
      className="flex flex-1 flex-col items-center justify-center text-center gap-3"
    >
      <FaCog size={72} color={colors.textMuted} />

      <h2 className="text-lg font-medium" style={{ color: colors.text }}>
        Settings
      </h2>

      <p className="text-sm text-text-muted max-w-xs">
        Manage your preferences and privacy
      </p>
    </div>
  );
}
