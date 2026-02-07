'use client';

import { useThemeColors } from '@/src/hooks/useThemeColors';
import { useState, useEffect } from 'react';
import { FaTimes, FaUserPlus } from 'react-icons/fa';

interface Props {
  open: boolean;
  onClose: () => void;
  onSubmit: (tag: string) => void;
}

export default function AddFriendModal({ open, onClose, onSubmit }: Props) {
  const colors = useThemeColors();
  const [tag, setTag] = useState('');

  useEffect(() => {
    if (!open) setTag('');
  }, [open]);

  if (!open) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 z-40"
        style={{ backgroundColor: 'rgba(0,0,0,0.4)' }}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div
          className="w-full max-w-sm rounded-xl p-5"
          style={{
            backgroundColor: colors.backgroundAlt,
            boxShadow: colors.shadowChat,
            border: `1px solid ${colors.borderChat}`,
            color: colors.text,
          }}
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2 font-semibold">
              <FaUserPlus />
              Add Friend
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full"
              style={{ color: colors.textMuted }}
            >
              <FaTimes />
            </button>
          </div>

          {/* Input */}
          <div className="mb-4">
            <label
              className="text-sm mb-1 block"
              style={{ color: colors.textMuted }}
            >
              Friend tag
            </label>

            <input
              value={tag}
              onChange={(e) => setTag(e.target.value)}
              placeholder="username#1234"
              className="w-full px-3 py-2 rounded-lg outline-none bg-transparent"
              style={{
                border: `1px solid ${colors.borderChat}`,
                color: colors.text,
              }}
            />
          </div>

          {/* Actions */}
          <div className="flex justify-end gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg text-sm"
              style={{ color: colors.textMuted }}
            >
              Cancel
            </button>

            <button
              disabled={!tag.trim()}
              onClick={() => onSubmit(tag)}
              className="px-4 py-2 rounded-lg text-sm font-medium"
              style={{
                backgroundColor: colors.primary,
                color: '#fff',
                opacity: tag.trim() ? 1 : 0.5,
              }}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
