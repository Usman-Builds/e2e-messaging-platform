'use client';

import { useState } from 'react';
import {
  FaCamera,
  FaPencilAlt,
  FaCheck,
  FaEnvelope,
  FaHashtag,
  FaCopy,
} from 'react-icons/fa';
import Avatar from '../../ui/Avatar';
import IconButton from '../../ui/IconButton';
import { useThemeColors } from '@/src/hooks/useThemeColors';

export default function ProfileItem() {
  const colors = useThemeColors();

  const [name, setName] = useState('John Doe');
  const [bio, setBio] = useState('');

  const [editName, setEditName] = useState(false);
  const [editBio, setEditBio] = useState(false);

  const email = 'john.doe@email.com';
  const tag = '@johndoe';

  const copy = (text: string) => navigator.clipboard.writeText(text);

  const saveName = () => {
    if (!name.trim()) return;
    setEditName(false);
  };

  const saveBio = () => {
    setEditBio(false);
  };

  return (
    <div className="p-6 space-y-6 w-full">
      {/* Avatar */}
      <div className="flex justify-center">
        <div className="relative">
          <Avatar name={name} size="xl" />
          <button
            className="absolute bottom-2 right-2 p-2 rounded-full shadow"
            style={{ backgroundColor: colors.primary }}
          >
            <FaCamera size={14} color="#fff" />
          </button>
        </div>
      </div>

      {/* Name */}
      <div className="w-full">
        <p className="text-xs text-text-muted mb-1">Name</p>

        <div className="grid grid-cols-[1fr_auto] items-center gap-2">
          {editName ? (
            <input
              autoFocus
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-transparent border-b outline-none"
              style={{
                borderColor: colors.primary,
                color: colors.text,
              }}
            />
          ) : (
            <p className="font-medium truncate">{name}</p>
          )}

          <IconButton
            icon={editName ? <FaCheck /> : <FaPencilAlt />}
            onClick={editName ? saveName : () => setEditName(true)}
            disabled={editName && !name.trim()}
          />
        </div>
      </div>

      {/* Bio */}
      <div className="w-full">
        <p className="text-xs text-text-muted mb-1">About</p>

        <div className="grid grid-cols-[1fr_auto] items-center gap-2">
          {editBio ? (
            <input
              autoFocus
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              placeholder="Write something about yourself"
              className="bg-transparent border-b outline-none"
              style={{
                borderColor: colors.primary,
                color: colors.text,
              }}
            />
          ) : (
            <p className="text-sm truncate text-text-muted">
              {bio || 'Write something about yourself'}
            </p>
          )}

          <IconButton
            icon={editBio ? <FaCheck /> : <FaPencilAlt />}
            onClick={editBio ? saveBio : () => setEditBio(true)}
          />
        </div>
      </div>

      {/* Email */}
      <div className="grid grid-cols-[1fr_auto] items-center text-sm gap-2">
        <div className="flex items-center gap-2 truncate">
          <FaEnvelope />
          <span className="truncate">{email}</span>
        </div>
        <IconButton icon={<FaCopy />} onClick={() => copy(email)} />
      </div>

      {/* Tag */}
      <div className="grid grid-cols-[1fr_auto] items-center text-sm gap-2">
        <div className="flex items-center gap-2 truncate">
          <FaHashtag />
          <span className="truncate">{tag}</span>
        </div>
        <IconButton icon={<FaCopy />} onClick={() => copy(tag)} />
      </div>
    </div>
  );
}
