import ProfileSidebar from './ProfileSidebar';

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Profile sidebar */}
      <ProfileSidebar />

      {/* Main content */}
      <main className="flex-1 flex flex-col bg-background dark:bg-background-dark">
        {children}
      </main>
    </>
  );
}
