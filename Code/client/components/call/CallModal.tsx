'use client';

import Avatar from '@/components/ui/Avatar';
import Button from '@/components/ui/Button';
import { useThemeColors } from '@/hooks/useThemeColors';

type Props = {
  open: boolean;
  name: string;
  onEnd: () => void;
};

export default function CallModal({ open, name, onEnd }: Props) {
  const colors = useThemeColors();
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div
        style={{ backgroundColor: colors.backgroundAlt }}
        className="rounded-xl p-6 text-center w-80"
      >
        <Avatar name={name} size="lg" />
        <h2 style={{ color: colors.text }} className="mt-4 text-lg font-semibold">{name}</h2>
        <p style={{ color: colors.textMuted }} className="mt-1">Calling...</p>

        <div className="mt-6">
          <Button onClick={onEnd} className="bg-red-600 text-white">
            End Call
          </Button>
        </div>
      </div>
    </div>
  );
}
