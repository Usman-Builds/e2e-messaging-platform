import ChatHeader from '@/components/chat/ui/ChatHeader';
import MessageList from '@/components/chat/ui/MessageList';
import ChatInput from '@/components/chat/ui/ChatInput';

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
