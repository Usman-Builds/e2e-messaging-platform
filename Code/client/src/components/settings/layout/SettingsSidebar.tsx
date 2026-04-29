'use client';

import { useEffect, useState } from 'react';
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
import { UserService } from '@/src/services/user.service';
import { notify } from '@/src/utils/toast';

export default function SettingsSidebar() {
  const colors = useThemeColors();

  const [loading, setLoading] = useState(true);

  const [allowGroups, setAllowGroups] = useState(false);
  const [readReceipts, setReadReceipts] = useState(false);
  const [onlineStatus, setOnlineStatus] = useState(false);

  // ✅ Fetch user settings
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const user = await UserService.getMe();

        setAllowGroups(user.groupAdd);
        setReadReceipts(user.readReciepts);
        setOnlineStatus(user.onlineStatus);
      } catch (err) {
        notify.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  // ✅ Generic update handler
  const updateSetting = async (key, value, setter) => {
    setter(value); // optimistic UI

    try {
      await UserService.update({ [key]: value });
    } catch (err) {
      setter(!value); // rollback
      notify.error(err);
    }
  };

  if (loading) {
    return (
      <aside className="w-80 h-full flex items-center justify-center text-white">
        Loading...
      </aside>
    );
  }

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

      {/* Dark Mode */}
      <SettingItem
        icon={<FaMoon />}
        title="Dark mode"
        description="Reduce eye strain"
        right={<ThemeSwitch />}
      />

      {/* Groups */}
      <SettingItem
        icon={<FaUsers />}
        title="Groups"
        description="Allow others to add you to groups"
        right={
          <ToggleSwitch
            checked={allowGroups}
            onChange={() =>
              updateSetting("groupAdd", !allowGroups, setAllowGroups)
            }
          />
        }
      />

      {/* Read Receipts */}
      <SettingItem
        icon={<FaCheckDouble />}
        title="Read receipts"
        description="Show when you’ve read messages"
        right={
          <ToggleSwitch
            checked={readReceipts}
            onChange={() =>
              updateSetting("readReciepts", !readReceipts, setReadReceipts)
            }
          />
        }
      />

      {/* Online Status */}
      <SettingItem
        icon={<FaEye />}
        title="Online status"
        description="Show when you are online"
        right={
          <ToggleSwitch
            checked={onlineStatus}
            onChange={() =>
              updateSetting("onlineStatus", !onlineStatus, setOnlineStatus)
            }
          />
        }
      />
    </aside>
  );
}