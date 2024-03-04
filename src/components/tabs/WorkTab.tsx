import { tabs_one } from "@/constant/tabsheader";
import { useState } from "react";
import BContent from "./BuiltTabContant/BContent";

const WorkTab = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col gap-10 w-[1200px] h-[800px]">
        <h1 className="text-4xl text-center md:text-start md:text-[48px] font-bold">
          Built for the way you work
        </h1>
        <div>
          <div className="flex justify-center md:justify-start flex-wrap gap-5 font-medium">
            {tabs_one.map((e, index) => (
              <div
                onClick={() => setActiveIndex(index)}
                key={index}
                className={
                  activeIndex === index
                    ? "px-5 h-[50px] border rounded-full flex justify-center items-center bg-[#F1F3FD]"
                    : "px-5 h-[50px] border rounded-full flex justify-center items-center hover:bg-[#F1F3FD]"
                }
              >
                <p className="font-sans cursor-pointer">{e.title}</p>
              </div>
            ))}
          </div>
        </div>
        {tabs_one.map((e, index: number) => {
          const position = index % 2;
          return (
            activeIndex === index && (
              <BContent key={index} reverse={!!position} />
            )
          );
        })}
      </div>
    </div>
  );
};

export default WorkTab;
