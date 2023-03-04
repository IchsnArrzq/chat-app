import { Button, Text } from "@/components/core";
import { TextInput } from "@/components/core/text-input";
import { Center } from "@/components/layout/center";
import { Content } from "@/components/shared/content";
import { Sidebar } from "@/components/shared/sidebar";
import { IconAlignJustified, IconDoor, IconSend } from "@tabler/icons-react";
import dayjs from "dayjs";
import type { FC, ReactNode } from "react";

interface ChatLayoutProps {
  children: ReactNode;
}

const ChatLayout: FC<ChatLayoutProps> = ({ children }) => {
  return (
    <Center>
      <div
        className="w-full max-w-full min-h-screen text-base antialiased bg-base-content"
        data-theme="dark"
      >
        <div className="flex">
          <div className="relative w-1/3 h-screen border-r border-base-300 bg-base-100">
            <Sidebar />
          </div>
          <div className="relative w-full h-screen border-r border-base-300 bg-base-300">
            <Content />
          </div>
        </div>
      </div>
    </Center>
  );
};

export default ChatLayout;
