'use client';

import MessageBubble from './MessageBubble';

const mockMessages = [
  { id: 1, text: 'Hey!', isOwn: false },
  { id: 2, text: 'Hi 👋', isOwn: true },
  { id: 3, text: 'How are you?', isOwn: false },
];

export default function MessageList() {
  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-3">
      {mockMessages.map((msg) => (
        <MessageBubble key={msg.id} text={msg.text} isOwn={msg.isOwn} />
      ))}
    </div>
  );
}
