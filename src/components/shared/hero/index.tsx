import { Button } from "@/components/core";
import { DefaultComponentProps } from "@/ts/interfaces/default-component-props";
import { FC } from "react";

interface HeroProps extends DefaultComponentProps {
  title?: string;
  description?: string;
  action?: React.ReactNode;
}

export const Hero: FC<HeroProps> = ({ title, description, action }) => {
  return (
    <div className="min-h-screen hero bg-base-200">
      <div className="flex flex-col space-y-4 text-center hero-content">
        {title && (
          <h1 className="text-5xl font-bold tracking-tight md:text-6xl">
            {title}
          </h1>
        )}
        {description && (
          <p className="max-w-4xl text-lg tracking-normal">{description}</p>
        )}
        {action && <div>{action}</div>}
      </div>
    </div>
  );
};
