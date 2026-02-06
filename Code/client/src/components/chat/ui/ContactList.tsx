'use client';

import { useState } from 'react';
import ContactItem from './ContactItem';
import ContactSearch from './ContactSearch';
import { useThemeColors } from '@/src/hooks/useThemeColors';
const mockContacts = [
  { id: '1', name: 'John Doe', lastMessage: 'Hey, what’s up?', time: '10:30 AM' },
  { id: '2', name: 'Jane Smith', lastMessage: 'See you later', time: '9:15 AM' },
];

export default function ContactList() {
  const [search, setSearch] = useState('');
  const colors = useThemeColors();

  const filtered = mockContacts.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div
      style={{ borderRight: `1px solid ${colors.borderChat}`, backgroundColor: colors.backgroundAlt }}
      className="h-full flex flex-col"
    >
      <ContactSearch value={search} onChange={setSearch} />

      <div className="flex-1 overflow-y-auto">
        {filtered.map((contact) => (
          <ContactItem
            key={contact.id}
            {...contact}
            onClick={() => console.log('Open chat', contact.id)}
          />
        ))}
      </div>
    </div>
  );
}
