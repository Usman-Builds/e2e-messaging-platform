'use client';

import { useThemeColors } from '@/src/hooks/useThemeColors';
import { FaCheck } from 'react-icons/fa';

type Props = {
  text?: string;
  isOwn?: boolean;
  time?: string;
  status?: 'sent' | 'delivered' | 'read';
};

export default function MessageBubble({
  text,
  isOwn = false,
  time = '12:45',
  status = 'read',
}: Props) {
  const colors = useThemeColors();
  const TICK_SIZE = 10;

  const tickColor =
    status === 'read' ? '#34b7f1' : colors.textMuted;

  const renderTicks = () => {
    if (!isOwn) return null;

    // Single tick (sent)
    if (status === 'sent') {
      return (
        <FaCheck size={TICK_SIZE} color={colors.textMuted} />
      );
    }

    // Double tick (delivered / read)
    return (
      <div className="relative w-[18px] h-[14px]">
        <FaCheck
          size={TICK_SIZE}
          color={tickColor}
          className="absolute left-0 top-0"
        />
        <FaCheck
          size={TICK_SIZE}
          color={tickColor}
          className="absolute left-[4px] top-0"
        />
      </div>
    );
  };

  return (
    <div className={`flex ${isOwn ? 'justify-end' : 'justify-start'}`}>
      <div
        style={{
          backgroundColor: isOwn ? colors.chatOutgoing : colors.chatIncoming,
          color: colors.text,
          boxShadow: colors.shadowChat,
          borderRadius: isOwn
            ? '16px 16px 4px 16px'
            : '16px 16px 16px 4px',
        }}
        className="
          max-w-[60%]
          w-fit
          px-3 py-2
          break-words
        "
      >
        {/* Message text */}
        <p className="text-sm leading-relaxed">{text}</p>

        {/* Footer */}
        <div className="flex items-center justify-end gap-1 mt-1">
          <span
            style={{ color: colors.textMuted }}
            className="text-[11px]"
          >
            {time}
          </span>

          {renderTicks()}
        </div>
      </div>
    </div>
  );
}
