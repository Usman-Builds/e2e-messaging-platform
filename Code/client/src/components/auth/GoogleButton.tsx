// components/auth/GoogleButton.tsx
'use client';

import { useThemeColors } from '@/src/hooks/useThemeColors';
import { FaGoogle } from 'react-icons/fa';
export default function GoogleButton({
  onClick,
}: {
  onClick?: () => void;
}) {
  const colors = useThemeColors();

  return (
    <button
      onClick={onClick}
      style={{ borderColor: colors.borderChat }}
      className="
        w-full flex items-center justify-center gap-3
        border rounded-lg px-4 py-2
        hover:bg-black/5 dark:hover:bg-white/10
        transition
      "
    >
      <FaGoogle />
      Continue with Google
    </button>
  );
}
