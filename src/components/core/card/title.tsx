import { DefaultComponentProps } from "@/ts/interfaces/default-component-props";
import { FC } from "react";
import clsx from "clsx";

interface CardTitleProps extends DefaultComponentProps {}

export const Title: FC<CardTitleProps> = ({ children, className }) => {
  return <span className={clsx(`card-title`, className)}>{children}</span>;
};
