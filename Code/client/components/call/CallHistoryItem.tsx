'use client';

import Avatar from '@/components/ui/Avatar';
import IconButton from '@/components/ui/IconButton';
import { FaPhone, FaVideo, FaArrowDown, FaArrowUp } from 'react-icons/fa';
import { useThemeColors } from '@/hooks/useThemeColors';

type Props = {
  name: string;
  type: 'audio' | 'video';
  direction: 'incoming' | 'outgoing';
  status: 'answered' | 'missed';
  time: string;
};

export default function CallHistoryItem({
  name,
  type,
  direction,
  status,
  time,
}: Props) {
  const colors = useThemeColors();

  const arrow =
    direction === 'incoming' ? <FaArrowDown /> : <FaArrowUp />;

  const statusColor =
    status === 'missed' ? 'text-red-500' : 'text-green-500';

  const callIcon = type === 'audio' ? <FaPhone /> : <FaVideo />;

  return (
    <div
      className="
        flex items-center gap-3 px-4 py-3
        hover:bg-gray-100 dark:hover:bg-gray-800
        cursor-pointer
      "
    >
      <Avatar name={name} />

      <div className="flex-1 min-w-0">
        <p className="font-medium text-text-light dark:text-text-dark truncate">
          {name}
        </p>

        <div className="flex items-center gap-1 text-sm text-text-muted">
          <span className={statusColor}>{arrow}</span>
          <span>{time}</span>
        </div>
      </div>

      <IconButton
        icon={callIcon}
        className="text-primary"
        onClick={() => console.log('Call', name)}
      />
    </div>
  );
}
