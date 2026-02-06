import Sidebar from '../ui/Sidebar';

export default function ChatLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    
      <div className="flex flex-1 overflow-hidden">
        
        {/* Contacts sidebar */}
        <Sidebar />

        {/* Main content */}
        <main className="flex-1 flex flex-col bg-background dark:bg-background-dark">
          {children}
        </main>
      </div>
  );
}
