import ChatHeader from '@/src/components/chat/ui/ChatHeader';
import ChatInput from '@/src/components/chat/ui/ChatInput';
import MessageList from '@/src/components/chat/ui/MessageList';

export default function ChatPage({
  params,
}: {
  params: { chatId: string };
}) {
  // mock user for now
  const user = {
    name: 'John Doe',
  };

  return (
    <>
      <ChatHeader name={user.name} />
      <MessageList />
      <ChatInput />
    </>
  );
}
