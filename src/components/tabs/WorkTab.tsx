import { tabs_one } from "@/constant/tabsheader";
import { ArrowRight } from "lucide-react";

const WorkTab = () => {
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
                key={index}
                className="px-5 h-[50px] border rounded-full flex justify-center items-center hover:bg-[#F1F3FD]"
              >
                <p className="font-sans cursor-pointer">{e.title}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row justify-between">
          <div className="flex flex-col gap-10 max-w-[400px] pt-5 p-5">
            <h1 className="tab-title">Brainstorming</h1>
            <p className="break-all ">
              Unleash creative ideas and build on them with the help of sticky
              notes, images, mind maps, videos, drawing capabilities — the list
              goes on.
            </p>
            <div>
              <span className="text-blue-500 flex items-center gap-2">
                Learn more <ArrowRight size={20} className="pt-1" />
              </span>
            </div>
          </div>
          <div>
            <img
              className="h-full md:h-[500px]"
              src="../../../public/assets/image/tabs/Brainstormwithoutshadow.jpg.png"
              alt="worktab"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkTab;
