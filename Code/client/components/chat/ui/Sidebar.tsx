'use client';

import ContactList from '@/components/chat/ui/ContactList';
import { useThemeColors } from '@/hooks/useThemeColors';

export default function ChatSidebar() {
  const colors = useThemeColors();

  return (
    <aside
      style={{ borderRight: `1px solid ${colors.borderChat}`, backgroundColor: colors.backgroundAlt }}
      className="w-80 h-full"
    >
      <ContactList />
    </aside>
  );
}
