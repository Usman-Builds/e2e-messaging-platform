'use client';

import { useEffect, useState } from 'react';
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
import { UserService } from '@/src/services/user.service';
import { notify } from '@/src/utils/toast';
import { uploadToCloudinary } from '@/src/utils/cloudinary';

export default function ProfileItem() {
  const colors = useThemeColors();

  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);

  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [profilePhoto, setProfilePhoto] = useState('');

  const [editName, setEditName] = useState(false);
  const [editBio, setEditBio] = useState(false);

  // =====================
  // FETCH USER
  // =====================
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const user = await UserService.getMe();

        setName(user.name || '');
        setBio(user.bio || '');
        setEmail(user.email || '');
        setUsername(user.username || '');
        setProfilePhoto(user.avatar || '');
      } catch (err: any) {
        notify.error(err?.message || 'Failed to load user');
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  // =====================
  // COPY
  // =====================
  const copy = (text: string) => {
    navigator.clipboard.writeText(text);
    notify.success('Copied');
  };

  // =====================
  // UPLOAD PROFILE PHOTO
  // =====================
  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      return notify.error('Only images allowed');
    }

    if (file.size > 2 * 1024 * 1024) {
      return notify.error('Max 2MB allowed');
    }

    setUploading(true);

    try {
      const url = await uploadToCloudinary(file);

      setProfilePhoto(url);

      await UserService.update({ avatar: url });

      notify.success('Profile photo updated');
    } catch (err: any) {
      notify.error(err?.message || 'Upload failed');
    } finally {
      setUploading(false);
    }
  };

  // =====================
  // SAVE NAME
  // =====================
  const saveName = async () => {
    if (!name.trim()) return;

    const prev = name;
    setEditName(false);

    try {
      await UserService.update({ name });
      notify.success('Name updated');
    } catch (err: any) {
      setName(prev);
      notify.error(err?.message || 'Update failed');
    }
  };

  // =====================
  // SAVE BIO
  // =====================
  const saveBio = async () => {
    const prev = bio;
    setEditBio(false);

    try {
      await UserService.update({ bio });
      notify.success('Bio updated');
    } catch (err: any) {
      setBio(prev);
      notify.error(err?.message || 'Update failed');
    }
  };

  // =====================
  // LOADING STATE
  // =====================
  if (loading) {
    return (
      <div className="w-full h-full flex items-center justify-center text-white">
        Loading...
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6 w-full">

      {/* =====================
          AVATAR (FIXED CIRCLE)
      ===================== */}
      <div className="flex justify-center">
        <div className="relative w-[96px] h-[96px]">

          <Avatar
            name={name}
            src={profilePhoto}
            size="xl"
          />

          {/* Upload Button */}
          <label className="absolute bottom-2 right-2 cursor-pointer">
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleUpload}
            />

            <div
              className="p-2 rounded-full shadow"
              style={{ backgroundColor: colors.primary }}
            >
              <FaCamera size={14} color="#fff" />
            </div>
          </label>

          {/* Upload overlay */}
          {uploading && (
            <div className="absolute inset-0 flex items-center justify-center text-xs bg-black/60 rounded-full text-white">
              Uploading...
            </div>
          )}
        </div>
      </div>

      {/* =====================
          NAME
      ===================== */}
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

      {/* =====================
          BIO
      ===================== */}
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

      {/* =====================
          EMAIL
      ===================== */}
      <div className="grid grid-cols-[1fr_auto] items-center text-sm gap-2">
        <div className="flex items-center gap-2 truncate">
          <FaEnvelope />
          <span className="truncate">{email}</span>
        </div>
        <IconButton icon={<FaCopy />} onClick={() => copy(email)} />
      </div>

      {/* =====================
          USERNAME
      ===================== */}
      <div className="grid grid-cols-[1fr_auto] items-center text-sm gap-2">
        <div className="flex items-center gap-2 truncate">
          <FaHashtag />
          <span className="truncate">
            {username ? `@${username}` : 'No username'}
          </span>
        </div>

        <IconButton
          icon={<FaCopy />}
          onClick={() => username && copy(`@${username}`)}
        />
      </div>

    </div>
  );
}