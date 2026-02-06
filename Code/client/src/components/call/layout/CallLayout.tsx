import CallSidebar from "./CallSidebar";

export default function CallLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Calls sidebar */}
      <CallSidebar />

      {/* Main content */}
      <main className="flex-1 flex flex-col bg-background dark:bg-background-dark">
        {children}
      </main>
    </>
  );
}
