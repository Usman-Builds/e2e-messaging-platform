// components/settings/SettingsSidebar.tsx
'use client';

import { useState } from 'react';
import SettingItem from '../ui/SettingItem';
import ThemeSwitch from '../../ui/ThemeSwitch';
import ToggleSwitch from '../../ui/ToggleSwitch';
import {
  FaMoon,
  FaUsers,
  FaEye,
  FaCheckDouble,
} from 'react-icons/fa';
import { useThemeColors } from '@/src/hooks/useThemeColors';

export default function SettingsSidebar() {
  const colors = useThemeColors();

  const [allowGroups, setAllowGroups] = useState(true);
  const [readReceipts, setReadReceipts] = useState(true);
  const [onlineStatus, setOnlineStatus] = useState(true);
  const [notifications, setNotifications] = useState(true);

  return (
    <aside
      style={{
        borderRight: `1px solid ${colors.borderChat}`,
        backgroundColor: colors.backgroundAlt,
      }}
      className="w-80 h-full overflow-y-auto"
    >
      <div
        className="px-4 py-3 border-b"
        style={{ borderColor: colors.borderChat }}
      >
        <h2 className="text-lg font-semibold">Settings</h2>
      </div>

      <SettingItem
        icon={<FaMoon />}
        title="Dark mode"
        description="Reduce eye strain"
        right={<ThemeSwitch />}
      />

      <SettingItem
        icon={<FaUsers />}
        title="Groups"
        description="Allow others to add you to groups"
        right={
          <ToggleSwitch
            checked={allowGroups}
            onChange={() => setAllowGroups(!allowGroups)}
          />
        }
      />

      <SettingItem
        icon={<FaCheckDouble />}
        title="Read receipts"
        description="Show when you’ve read messages"
        right={
          <ToggleSwitch
            checked={readReceipts}
            onChange={() => setReadReceipts(!readReceipts)}
          />
        }
      />

      <SettingItem
        icon={<FaEye />}
        title="Online status"
        description="Show when you are online"
        right={
          <ToggleSwitch
            checked={onlineStatus}
            onChange={() => setOnlineStatus(!onlineStatus)}
          />
        }
      />
    </aside>
  );
}
