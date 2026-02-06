'use client';

import CallHistoryItem from './CallHistoryItem';

const mockCalls = [
  {
    id: '1',
    name: 'John Doe',
    type: 'audio',
    direction: 'outgoing',
    status: 'answered',
    time: 'Today, 12:30',
  },
  {
    id: '2',
    name: 'Jane Smith',
    type: 'video',
    direction: 'incoming',
    status: 'missed',
    time: 'Yesterday, 9:10',
  },
  {
    id: '3',
    name: 'Alex Brown',
    type: 'audio',
    direction: 'incoming',
    status: 'answered',
    time: 'Yesterday, 6:45',
  },
];

export default function CallHistoryList() {
  return (
    <div className="flex-1 overflow-y-auto">
      <div className="px-4 py-3 border-b border-gray-200 dark:border-gray-700">
        <h2 className="text-lg font-semibold text-text-light dark:text-text-dark">
          Calls
        </h2>
      </div>
      {mockCalls.map((call) => (
        <CallHistoryItem key={call.id} {...call} />
      ))}
    </div>
  );
}
