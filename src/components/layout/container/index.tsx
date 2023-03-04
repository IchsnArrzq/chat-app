import { DefaultComponentProps } from "@/ts/interfaces/default-component-props";
import { FC } from "react";
import clsx from "clsx";
interface ContainerProps extends DefaultComponentProps {}

const Container: FC<ContainerProps> = ({ className, children }) => {
  return <div className={clsx(`container`, className)}>{children}</div>;
};

export default Container;
