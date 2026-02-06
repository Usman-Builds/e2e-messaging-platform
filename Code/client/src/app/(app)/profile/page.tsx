'use client';

import { FaUserCircle } from 'react-icons/fa';
import { useThemeColors } from '@/src/hooks/useThemeColors';

export default function ProfilePage() {
  const colors = useThemeColors();

  return (
    <div
      style={{ backgroundColor: colors.backgroundAlt }}
      className="flex flex-1 flex-col items-center justify-center text-center gap-3"
    >
      <FaUserCircle size={72} color={colors.textMuted} />

      <h2 className="text-lg font-medium" style={{ color: colors.text }}>
        Your profile
      </h2>

      <p className="text-sm text-text-muted max-w-xs">
        View and edit your personal information
      </p>
    </div>
  );
}
