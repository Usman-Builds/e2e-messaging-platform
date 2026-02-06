'use client';

import { FaComments } from 'react-icons/fa';
import { useThemeColors } from '@/src/hooks/useThemeColors';

export default function ChatsPage() {
  const colors = useThemeColors();

  return (
    <div
      style={{ backgroundColor: colors.backgroundAlt }}
      className="flex flex-1 flex-col items-center justify-center text-center gap-3"
    >
      <FaComments size={72} color={colors.textMuted} />

      <h2 className="text-lg font-medium" style={{ color: colors.text }}>
        Your messages
      </h2>

      <p className="text-sm text-text-muted max-w-xs">
        Select a chat to start messaging
      </p>
    </div>
  );
}
