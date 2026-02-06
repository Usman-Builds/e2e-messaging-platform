'use client';

import { useThemeColors } from '@/src/hooks/useThemeColors';
import { FaSearch } from 'react-icons/fa';

type Props = {
  value: string;
  onChange: (value: string) => void;
};

export default function ContactSearch({ value, onChange }: Props) {
  const colors = useThemeColors();

  return (
    <div className="relative px-3 py-2">
      <FaSearch
        className="absolute left-6 top-1/2 -translate-y-1/2 text-sm"
        style={{ color: colors.textMuted }}
      />
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search or start new chat"
        style={{
          backgroundColor: colors.background,
          color: colors.text,
          borderColor: colors.borderChat,
        }}
        className="w-full pl-10 pr-4 py-2 rounded-full border focus:outline-none"
      />
    </div>
  );
}
