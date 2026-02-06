// components/settings/ToggleSwitch.tsx
'use client';

import { useThemeColors } from "@/src/hooks/useThemeColors";

type Props = {
  checked: boolean;
  onChange: () => void;
  disabled?: boolean;
};

export default function ToggleSwitch({
  checked,
  onChange,
  disabled = false,
}: Props) {
  const colors = useThemeColors();

  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onChange}
      style={{
        backgroundColor: checked
          ? colors.primary
          : colors.borderChat,
      }}
      className={`
        relative flex items-center
        w-10 h-5 min-w-[40px]
        rounded-full
        transition-colors duration-200
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
      `}
    >
      <span
        style={{
          backgroundColor: colors.backgroundAlt,
          border: `1px solid ${colors.borderChat}`,
          transform: checked ? 'translateX(20px)' : 'translateX(0)',
        }}
        className="
          absolute left-0.5
          w-4 h-4
          rounded-full
          shadow-sm
          transition-transform duration-200
        "
      />
    </button>
  );
}
