import { Button } from "@/components/core";
import { TextInput } from "@/components/core/text-input";
import { ChatList } from "@/components/shared/content/chat-list";
import { FloatInput } from "@/components/shared/content/float-input";
import { ProfileHeader } from "@/components/shared/content/profile-header";
import { IconSend } from "@tabler/icons-react";
import { FC } from "react";

export const Content: FC = () => {
  return (
    <>
      <div className="h-[10vh]">
        <ProfileHeader />
      </div>
      <div className="h-[80vh] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 overflow-y-scroll">
        <ChatList />
      </div>
      <div className="flex items-center h-[10vh]">
        <FloatInput />
      </div>
    </>
  );
};
