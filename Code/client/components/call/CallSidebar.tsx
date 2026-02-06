'use client';

import CallHistoryList from './CallHistoryList';

export default function CallSidebar() {
  return (
    <aside className="w-80 h-full border-r border-gray-200 dark:border-gray-700 bg-background dark:bg-background-dark">
      <div className="px-4 py-3 border-b border-gray-200 dark:border-gray-700">
        <h2 className="text-lg font-semibold text-text-light dark:text-text-dark">
          Calls
        </h2>
      </div>

      <CallHistoryList />
    </aside>
  );
}
