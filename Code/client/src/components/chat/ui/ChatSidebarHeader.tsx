"use client";

import { useThemeColors } from "@/src/hooks/useThemeColors";
import { useState, useRef, useEffect } from "react";
import { FaEllipsisV, FaUserPlus, FaUsers, FaSignOutAlt } from "react-icons/fa";
import AddFriendModal from "../../modals/AddFriendModal";
export default function ChatSidebarHeader() {
  const colors = useThemeColors();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const [addFriendOpen, setAddFriendOpen] = useState(false);

  // Close menu on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div
      ref={ref}
      className="relative px-4 py-3 flex items-center justify-between border-b"
      style={{ borderColor: colors.borderChat }}
    >
      <h2 className="text-lg font-semibold" style={{ color: colors.text }}>
        Chats
      </h2>

      {/* 3-dot button */}
      <button
        onClick={() => setOpen(!open)}
        className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition"
      >
        <FaEllipsisV color={colors.textMuted} />
      </button>

      {/* Dropdown menu */}
      {open && (
        <div
          className="absolute right-4 top-14 w-56 rounded-lg shadow-lg z-50 overflow-hidden"
          style={{
            backgroundColor: colors.backgroundAlt,
            border: `1px solid ${colors.borderChat}`,
          }}
        >
          <MenuItem
            icon={<FaUsers />}
            label="Add group members"
            onClick={() => {
              setOpen(false);
              alert("Add group members");
            }}
          />

          <MenuItem
            icon={<FaUserPlus />}
            label="Add a friend"
            onClick={() => {
              setOpen(false);
              setAddFriendOpen(true);
            }}
          />

          <div
            className="h-px"
            style={{ backgroundColor: colors.borderChat }}
          />

          <MenuItem
            icon={<FaSignOutAlt />}
            label="Logout"
            danger
            onClick={() => {
              setOpen(false);
              alert("Logout");
            }}
          />
        </div>
      )}
      <AddFriendModal
        open={addFriendOpen}
        onClose={() => setAddFriendOpen(false)}
        onSubmit={(tag) => {
          console.log("Add friend:", tag);
          setAddFriendOpen(false);
        }}
      />
    </div>
  );
}

/* ---------------- Menu Item ---------------- */

function MenuItem({
  icon,
  label,
  onClick,
  danger = false,
}: {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
  danger?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      className={`
        w-full flex items-center gap-3 px-4 py-3 text-sm
        transition text-left
        ${
          danger
            ? "hover:bg-red-50 dark:hover:bg-red-500/10 hover:text-red-600"
            : "hover:bg-black/5 dark:hover:bg-white/10"
        }
      `}
    >
      <span className={danger ? "text-red-500" : ""}>{icon}</span>
      <span>{label}</span>
    </button>
  );
}
