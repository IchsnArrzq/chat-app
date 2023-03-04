import { DefaultComponentProps } from "@/ts/interfaces/default-component-props";
import type { FC } from "react";
import clsx from "clsx";
interface GridProps extends DefaultComponentProps {
  columns:
    | "grid-cols-1"
    | "grid-cols-2"
    | "grid-cols-3"
    | "grid-cols-4"
    | "grid-cols-5"
    | "grid-cols-6"
    | "grid-cols-7"
    | "grid-cols-8"
    | "grid-cols-9"
    | "grid-cols-10"
    | "grid-cols-11"
    | "grid-cols-12"
    | "grid-cols-none";
  placeContent:
    | "place-content-center"
    | "place-content-start"
    | "place-content-end"
    | "place-content-between"
    | "place-content-around"
    | "place-content-evenly"
    | "place-content-baseline"
    | "place-content-stretch";
  placeItem:
    | "place-items-start"
    | "place-items-end"
    | "place-items-center"
    | "place-items-baseline"
    | "place-items-stretch";
}

const Grid: FC<GridProps> = ({
  children,
  className,
  columns = "grid-cols-none",
  placeContent = "place-content-start",
  placeItem = "place-items-start"
}) => {
  return (
    <div
      className={clsx(
        `grid ${columns} ${placeContent} ${placeItem}`,
        className
      )}
    >
      {children}
    </div>
  );
};

export default Grid;
