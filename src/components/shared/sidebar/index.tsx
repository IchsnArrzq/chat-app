import { Button } from "@/components/core";
import { TextInput } from "@/components/core/text-input";
import { SidebarBody } from "@/components/shared/sidebar/body";
import { SidebarFoot } from "@/components/shared/sidebar/foot";
import { SidebarHead } from "@/components/shared/sidebar/head";
import { IconAlignJustified } from "@tabler/icons-react";
import dayjs from "dayjs";
import { FC } from "react";

export const Sidebar: FC = () => {
  return (
    <>
      <div className="h-[10vh]">
        <SidebarHead />
      </div>
      <div className="overflow-y-scroll h-[80vh]">
        <SidebarBody />
      </div>
      <div className="h-[10vh]">
        <SidebarFoot />
      </div>
    </>
  );
};
