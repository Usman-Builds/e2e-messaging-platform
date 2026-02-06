import Header from '@/components/layout/Header';
import AppNav from '@/components/layout/AppNav';

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen flex flex-col">
      <Header />

      <div className="flex flex-1 overflow-hidden">
        {/* Global left nav (always visible) */}
        <AppNav />
        
        {/* Route-specific layout */}
        {children}
      </div>
    </div>
  );
}
