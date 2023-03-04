import Avatar from "@/components/core/avatar";
import { FC } from "react";

export const SidebarFoot: FC = () => {
  return (
    <div className="h-[10vh] p-3 absolute bottom-0 z-50 flex items-center w-full border-t border-base-300 bg-base-100">
      <div className="flex items-center space-x-3">
        <Avatar />
        <div className="flex flex-col justify-around w-full">
          <div className="flex items-center justify-between w-full">
            <span className="text-sm font-bold">Ichsan Arrizqi</span>
          </div>
        </div>
      </div>
    </div>
  );
};
