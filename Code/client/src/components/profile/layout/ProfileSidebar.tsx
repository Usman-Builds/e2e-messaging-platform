'use client';

import { useThemeColors } from '@/src/hooks/useThemeColors';
import ProfileItem from '../ui/ProfileItem';

export default function ProfileSidebar() {
  const colors = useThemeColors();

  return (
    <aside
      style={{
        borderRight: `1px solid ${colors.borderChat}`,
        backgroundColor: colors.backgroundAlt,
      }}
      className="w-80 h-full overflow-y-auto"
    >
      <div className="px-4 py-3 border-b"
        style={{ borderColor: colors.borderChat }}
      >
        <h2 className="text-lg font-semibold">Profile</h2>
      </div>

      <ProfileItem />
    </aside>
  );
}
