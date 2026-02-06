import ChatSidebar from './ChatSidebar';

export default function ChatLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    
      <div className="flex flex-1 overflow-hidden">
        
        {/* Contacts sidebar */}
        <ChatSidebar />

        {/* Main content */}
        <main className="flex-1 flex flex-col bg-background dark:bg-background-dark">
          {children}
        </main>
      </div>
  );
}
