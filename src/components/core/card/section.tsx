import { DefaultComponentProps } from "@/ts/interfaces/default-component-props";
import { FC } from "react";
import clsx from "clsx";

interface CardBodyProps extends DefaultComponentProps {}

export const Section: FC<CardBodyProps> = ({ children, className }) => {
  return <div className={clsx(`card-body`, className)}>{children}</div>;
};
