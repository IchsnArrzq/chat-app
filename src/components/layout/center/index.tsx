import { DefaultComponentProps } from "@/ts/interfaces/default-component-props";
import { FC } from "react";

interface CenterProps extends DefaultComponentProps {}

export const Center: FC<CenterProps> = ({ className, children }) => {
  return <center>{children}</center>;
};
