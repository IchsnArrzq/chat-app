import clsx from "clsx";
import React, { FC } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  modifier?:
    | "btn-primary"
    | "btn-secondary"
    | "btn-accent"
    | "btn-info"
    | "btn-success"
    | "btn-warning"
    | "btn-error"
    | "btn-ghost"
    | "btn-link"
    | "btn-outline"
    | "btn-active"
    | "btn-disabled"
    | "loading"
    | "no-animation";
  responsive?:
    | "btn-lg"
    | "btn-md"
    | "btn-sm"
    | "btn-xs"
    | "btn-wide"
    | "btn-block"
    | "btn-circle"
    | "btn-square";
}

export const Button: FC<ButtonProps> = ({
  children,
  className,
  modifier,
  responsive,
  ...props
}) => {
  return (
    <button
      className={clsx(
        `btn${" " + modifier ?? ""}${" " + responsive ?? ""}`,
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
