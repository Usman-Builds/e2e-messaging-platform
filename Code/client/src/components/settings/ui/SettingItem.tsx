// components/settings/SettingItem.tsx
'use client';

import { ReactNode } from 'react';

type Props = {
  icon: ReactNode;
  title: string;
  description?: string;
  right?: ReactNode;
};

export default function SettingItem({
  icon,
  title,
  description,
  right,
}: Props) {
  return (
    <div className="flex items-center justify-between px-4 py-3 hover:bg-black/5 dark:hover:bg-white/5">
      <div className="flex items-start gap-3">
        <div className="mt-1">{icon}</div>

        <div>
          <p className="font-medium text-sm">{title}</p>
          {description && (
            <p className="text-xs text-text-muted">{description}</p>
          )}
        </div>
      </div>

      {right}
    </div>
  );
}
