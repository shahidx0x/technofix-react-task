import { tabs_two } from "@/constant/tabsheader";
import { useState } from "react";
import WContent from "./WorkTabContant/WorkTabContet";

const BuiltTab = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  return (
    <div className="flex justify-center items-center mt-36 md:mt-0">
      <div className="flex flex-col gap-10 w-[1200px] h-[800px]">
        <h1 className="text-4xl text-center md:text-start md:text-[48px] font-bold">
          Built for all kinds of teams
        </h1>
        <div>
          <div className="flex justify-center md:justify-start flex-wrap gap-5 font-medium">
            {tabs_two.map((e, index) => (
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
        {tabs_two.map((e, index: number) => {
          const position = index % 2;
          return (
            activeIndex === index && (
              <WContent key={index} reverse={!!position} />
            )
          );
        })}
      </div>
    </div>
  );
};

export default BuiltTab;
