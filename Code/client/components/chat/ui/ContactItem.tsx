'use client';

import Avatar from '@/components/ui/Avatar';
import { useThemeColors } from '@/hooks/useThemeColors';
import Link from 'next/link';

type Props = {
  id: string; // add id to props
  name: string;
  lastMessage: string;
  time: string;
  avatar?: string;
};

export default function ContactItem({ id, name, lastMessage, time, avatar }: Props) {
  const colors = useThemeColors();

  return (
    <Link href={`/chats/${id}`} passHref>
      <div
        style={{ backgroundColor: 'transparent' }}
        className="flex items-center gap-3 px-4 py-3 cursor-pointer hover:brightness-95 transition"
      >
        <Avatar name={name} src={avatar} />

        <div className="flex-1 min-w-0">
          <p style={{ color: colors.text }} className="font-medium truncate">{name}</p>
          <p style={{ color: colors.textMuted }} className="text-sm truncate">{lastMessage}</p>
        </div>

        <span style={{ color: colors.textMuted }} className="text-xs">{time}</span>
      </div>
    </Link>
  );
}
