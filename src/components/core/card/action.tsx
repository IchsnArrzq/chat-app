import { DefaultComponentProps } from "@/ts/interfaces/default-component-props";
import { FC } from "react";
import clsx from "clsx";

interface CardActionProps extends DefaultComponentProps {}

export const Action: FC<CardActionProps> = ({ className, children }) => {
  return <div className={clsx(``, className)}>{children}</div>;
};
