import { DefaultComponentProps } from "@/ts/interfaces/default-component-props";
import { FC } from "react";
import clsx from "clsx";

interface TextProps extends DefaultComponentProps {
  align?:
    | "text-left"
    | "text-center"
    | "text-right"
    | "text-justify"
    | "text-start"
    | "text-end";
  decoration?: "underline" | "overline" | "line-through" | "no-underline";
  transfom?: "uppercase" | "lowercase" | "capitalize" | "normal-case";
}

export const Text: FC<TextProps> = ({
  className,
  children,
  align = "text-left",
  decoration,
  transfom
}) => {
  return (
    <span
      className={clsx(
        `${align} ${decoration ?? ""} ${transfom ?? ""}`,
        className
      )}
    >
      {children}
    </span>
  );
};
