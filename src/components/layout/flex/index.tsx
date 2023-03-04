import { DefaultComponentProps } from "@/ts/interfaces/default-component-props";
import clsx from "clsx";
import { FC } from "react";

interface FlexProps extends DefaultComponentProps {
  justify?:
    | "justify-start"
    | "justify-end"
    | "justify-center"
    | "justify-between"
    | "justify-around"
    | "justify-evenly";
  items?:
    | "items-start"
    | "items-end"
    | "items-center"
    | "items-baseline"
    | "items-stretch";
}

const Flex: FC<FlexProps> = ({
  children,
  className,
  justify = "justify-start",
  items = "items-start"
}) => {
  return (
    <div className={clsx(`flex ${justify} ${items}`, className)}>
      {children}
    </div>
  );
};

export default Flex;
