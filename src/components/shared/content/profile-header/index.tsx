import { Button } from "@/components/core";
import Avatar from "@/components/core/avatar";
import { IconDotsVertical } from "@tabler/icons-react";
import { FC } from "react";

export const ProfileHeader: FC = () => {
  return (
    <div className="w-full px-8  h-[10vh] flex items-center justify-between bg-base-100 border-b border-base-300">
      <div className="flex items-center space-x-4">
        <Avatar />
        <span className="text-lg font-bold">Ichsan Arrizqi</span>
      </div>
      <div>
        <Button modifier="btn-ghost">
          <IconDotsVertical />
        </Button>
      </div>
    </div>
  );
};
