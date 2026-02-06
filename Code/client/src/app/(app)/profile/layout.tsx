import ProfileLayout from "@/src/components/profile/layout/ProfileLayout";

export default function CallsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ProfileLayout>{children}</ProfileLayout>;
}
