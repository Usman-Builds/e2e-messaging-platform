import AuthGuard from "@/src/components/guards/AuthGuard";
import ChatLayout from "../../../components/chat/layout/Chatlayout";

export default function ChatsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>
      <ChatLayout>{children}</ChatLayout>
    
  </>;
}
