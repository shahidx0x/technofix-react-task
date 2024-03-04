import { tabs_one } from "@/constant/tabsheader";

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
      </div>
    </div>
  );
};

export default WorkTab;
