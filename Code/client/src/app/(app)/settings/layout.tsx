import SettingsLayout from "@/src/components/settings/layout/SettingsLayout";

export default function CallsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SettingsLayout>{children}</SettingsLayout>;
}
