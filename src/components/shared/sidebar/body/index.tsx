import dayjs from "dayjs";
import { FC } from "react";

type PersonType = {
  name: string;
  time: string;
  message: string;
  count: number;
}[];

const persons: PersonType = [
  {
    name: "Ichsan Arrizqi",
    time: dayjs().format("HH:mm"),
    message: "Halo Ngf",
    count: 2
  },
  {
    name: "Joe",
    time: dayjs().format("HH:mm"),
    message: "Halo",
    count: 1
  },
  {
    name: "Joe",
    time: dayjs().format("HH:mm"),
    message: "Halo",
    count: 1
  },
  {
    name: "Joe",
    time: dayjs().format("HH:mm"),
    message: "Halo",
    count: 1
  },
  {
    name: "Joe",
    time: dayjs().format("HH:mm"),
    message: "Halo",
    count: 1
  },
  {
    name: "Joe",
    time: dayjs().format("HH:mm"),
    message: "Halo",
    count: 1
  },
  {
    name: "Joe",
    time: dayjs().format("HH:mm"),
    message: "Halo",
    count: 1
  },
  {
    name: "Joe",
    time: dayjs().format("HH:mm"),
    message: "Halo",
    count: 1
  },
  {
    name: "Joe",
    time: dayjs().format("HH:mm"),
    message: "Halo",
    count: 1
  },
  {
    name: "Joe",
    time: dayjs().format("HH:mm"),
    message: "Halo",
    count: 1
  },
  {
    name: "Joe",
    time: dayjs().format("HH:mm"),
    message: "Halo",
    count: 1
  },
  {
    name: "Joe",
    time: dayjs().format("HH:mm"),
    message: "Halo",
    count: 1
  },
  {
    name: "Joe",
    time: dayjs().format("HH:mm"),
    message: "Halo",
    count: 1
  },
  {
    name: "Joe",
    time: dayjs().format("HH:mm"),
    message: "Halo",
    count: 1
  },
  {
    name: "Joe",
    time: dayjs().format("HH:mm"),
    message: "Halo",
    count: 1
  },
  {
    name: "Joe",
    time: dayjs().format("HH:mm"),
    message: "Halo",
    count: 1
  },
  {
    name: "Joe",
    time: dayjs().format("HH:mm"),
    message: "Halo",
    count: 1
  },
  {
    name: "Joe",
    time: dayjs().format("HH:mm"),
    message: "Halo",
    count: 1
  },
  {
    name: "Joe",
    time: dayjs().format("HH:mm"),
    message: "Halo",
    count: 1
  },
  {
    name: "Joe",
    time: dayjs().format("HH:mm"),
    message: "Halo",
    count: 1
  },
  {
    name: "Joe",
    time: dayjs().format("HH:mm"),
    message: "Halo",
    count: 1
  },
  {
    name: "Joe",
    time: dayjs().format("HH:mm"),
    message: "Halo",
    count: 1
  },
  {
    name: "Joe",
    time: dayjs().format("HH:mm"),
    message: "Halo",
    count: 1
  },
  {
    name: "Joe",
    time: dayjs().format("HH:mm"),
    message: "Halo",
    count: 1
  },
  {
    name: "Joe",
    time: dayjs().format("HH:mm"),
    message: "Halo",
    count: 1
  },
  {
    name: "Joe",
    time: dayjs().format("HH:mm"),
    message: "Halo",
    count: 1
  },
  {
    name: "Joe",
    time: dayjs().format("HH:mm"),
    message: "Halo",
    count: 1
  }
];

export const SidebarBody: FC = () => {
  return (
    <>
      {persons.map((person, key) => {
        return (
          <div className="px-2 snap-center" key={key}>
            <div className="flex items-center px-3 py-2 space-x-2 cursor-pointer select-none hover:bg-base-300 rounded-3xl">
              <div className="avatar">
                <div className="w-16 mask mask-squircle">
                  <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </div>
              <div className="flex flex-col justify-around w-full">
                <div className="flex items-center justify-between w-full">
                  <span className="font-bold">{person.name}</span>
                  <span className="text-xs">{person.time}</span>
                </div>
                <div className="flex items-center justify-between w-full">
                  <span className="text-sm font-semibold">
                    {person.message}
                  </span>
                  <span className="badge badge-primary ">{person.count}</span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};
