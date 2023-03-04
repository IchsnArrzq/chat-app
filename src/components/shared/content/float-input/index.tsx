import { Button } from "@/components/core";
import { TextInput } from "@/components/core/text-input";
import { IconSend } from "@tabler/icons-react";
import { FC, FormEvent } from "react";

export const FloatInput: FC = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit} className="flex w-full px-4 space-x-4">
      <TextInput placeholder="type here" bordered className="w-full" />
      <Button type="submit">
        <IconSend />
      </Button>
    </form>
  );
};
