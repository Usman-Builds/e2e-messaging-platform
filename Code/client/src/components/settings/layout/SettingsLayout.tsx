import SettingsSidebar from "./SettingsSidebar";

export default function SettingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Settings sidebar */}
      <SettingsSidebar />

      {/* Main content */}
      <main className="flex-1 flex flex-col bg-background dark:bg-background-dark">
        {children}
      </main>
    </>
  );
}
