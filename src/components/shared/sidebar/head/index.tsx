import { Button } from "@/components/core";
import { TextInput } from "@/components/core/text-input";
import { IconAlignJustified } from "@tabler/icons-react";
import { FC } from "react";

export const SidebarHead: FC = () => {
  return (
    <div className="h-[10vh] p-3 absolute top-0 z-50 w-full flex items-center border-b border-base-300 bg-base-100">
      <div className="flex items-center">
        <Button modifier="btn-ghost" responsive="btn-circle">
          <IconAlignJustified />
        </Button>
        <TextInput bordered placeholder="search" />
      </div>
    </div>
  );
};
