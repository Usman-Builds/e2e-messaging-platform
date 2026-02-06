"use client";

import { useThemeColors } from "@/src/hooks/useThemeColors";
import CallHistoryList from "../ui/CallHistoryList";

export default function CallSidebar() {
  const colors = useThemeColors();
  return (
    <aside
      style={{
        borderRight: `1px solid ${colors.borderChat}`,
        backgroundColor: colors.backgroundAlt,
      }}
      className="w-80 h-full"
    >
      <CallHistoryList />
    </aside>
  );
}
