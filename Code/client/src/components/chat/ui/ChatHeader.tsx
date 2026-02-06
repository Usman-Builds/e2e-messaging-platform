'use client';

import { FaPhone, FaVideo } from 'react-icons/fa';
import Avatar from '../../ui/Avatar';
import IconButton from '../../ui/IconButton';
import { useThemeColors } from '@/src/hooks/useThemeColors';
type Props = {
  name: string;
  avatar?: string;
};

export default function ChatHeader({ name, avatar }: Props) {
  const colors = useThemeColors();

  return (
    <div
      style={{ borderBottom: `1px solid ${colors.borderChat}`, backgroundColor: colors.backgroundAlt }}
      className="flex items-center justify-between px-4 py-3"
    >
      <div className="flex items-center gap-3">
        <Avatar name={name} src={avatar} />
        <div>
          <p style={{ color: colors.text }} className="font-semibold">{name}</p>
          <p style={{ color: colors.textMuted }} className="text-xs">online</p>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <IconButton icon={<FaPhone />} />
        <IconButton icon={<FaVideo />} />
      </div>
    </div>
  );
}
