'use client';

import { usePathname, useRouter } from 'next/navigation';
import {
  FaComments,
  FaPhone,
  FaUser,
  FaCog,
} from 'react-icons/fa';
import { useThemeColors } from '@/hooks/useThemeColors';

const navItems = [
  {
    label: 'Chats',
    icon: FaComments,
    path: '/chats',
  },
  {
    label: 'Calls',
    icon: FaPhone,
    path: '/calls',
  },
  {
    label: 'Profile',
    icon: FaUser,
    path: '/settings', // profile lives in settings
  },
  {
    label: 'Settings',
    icon: FaCog,
    path: '/settings',
  },
];

export default function AppNav() {
  const pathname = usePathname();
  const router = useRouter();
  const colors = useThemeColors();

  return (
    <nav
      style={{ backgroundColor: colors.background }}
      className="
        w-16
        flex flex-col items-center
        py-4
        border-r border-gray-200 dark:border-gray-700
        gap-4
      "
    >
      {navItems.map(({ label, icon: Icon, path }) => {
        const active = pathname.startsWith(path);

        return (
          <button
            key={label}
            onClick={() => router.push(path)}
            title={label}
            style={{
              color: active ? colors.primary : colors.textMuted,
              backgroundColor: active
                ? colors.chatIncoming
                : 'transparent',
            }}
            className="
              p-3 rounded-xl
              transition
              hover:bg-gray-200 dark:hover:bg-gray-700
            "
          >
            <Icon size={20} />
          </button>
        );
      })}
    </nav>
  );
}
