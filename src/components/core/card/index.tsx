import { DefaultComponentProps } from "@/ts/interfaces/default-component-props";
import { FC } from "react";
import { Section } from "@/components/core/card/section";
import { Action } from "@/components/core/card/action";
import { Title } from "@/components/core/card/title";
import clsx from "clsx";

interface CardProps extends DefaultComponentProps {}

type CardTitle = {
  Title: typeof Title;
};
type CardSection = {
  Section: typeof Section;
};
type CardAction = {
  Action: typeof Action;
};

const Card: FC<CardProps> & CardSection & CardAction & CardTitle = ({
  children,
  className
}) => {
  return <div className={clsx(`card `, className)}>{children}</div>;
};

Card.Section = Section;
Card.Action = Action;
Card.Title = Title;

export { Card };
