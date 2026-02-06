import CallLayout from "@/components/call/layout/CallLayout";

export default function CallsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <CallLayout>{children}</CallLayout>;
}
