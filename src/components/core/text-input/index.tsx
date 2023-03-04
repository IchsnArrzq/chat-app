import { DefaultComponentProps } from "@/ts/interfaces/default-component-props";
import clsx from "clsx";
import { FC, forwardRef } from "react";

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  bordered?: boolean;
  sizes?: "input-xs" | "input-sm" | "input-md" | "input-lg";
}

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ className, bordered, sizes, ...props }, ref) => {
    return (
      <input
        className={clsx(
          `input ${bordered && "input-bordered"} ${sizes ?? ""} rounded-3xl`,
          className
        )}
        {...props}
        ref={ref}
      />
    );
  }
);

TextInput.displayName = "@/components/core/text-input";
