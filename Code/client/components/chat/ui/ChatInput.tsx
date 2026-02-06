'use client';

import { useState } from 'react';
import AttachmentPicker from './AttachmentPicker';
import VoiceRecorder from './VoiceRecorder';
import { FaPaperPlane } from 'react-icons/fa';
import IconButton from '@/components/ui/IconButton';
import { useThemeColors } from '@/hooks/useThemeColors';

export default function ChatInput() {
  const [message, setMessage] = useState('');
  const colors = useThemeColors();

  return (
    <div
      style={{ borderTop: `1px solid ${colors.borderChat}`, backgroundColor: colors.backgroundAlt }}
      className="flex items-center gap-2 px-4 py-3"
    >
      <AttachmentPicker />

      <input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message"
        style={{
          backgroundColor: colors.background,
          color: colors.text,
          borderColor: colors.borderChat,
        }}
        className="flex-1 px-4 py-2 rounded-full focus:outline-none"
      />

      {message ? (
        <IconButton
          icon={<FaPaperPlane />}
          onClick={() => setMessage('')}
        />
      ) : (
        <VoiceRecorder />
      )}
    </div>
  );
}
