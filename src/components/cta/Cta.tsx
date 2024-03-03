import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";

const Cta = () => {
  return (
    <>
      <div className="flex justify-center items-center mt-[50px] md:mt-[100px]">
        <div className="w-[1150px] flex justify-end pr-32 items-center gap-8  bg-cta h-[40rem]">
          <div className="center-vertical gap-2">
            <h1 className="text-[30px] font-bold">The Ways We Work</h1>
            <p className="text-[18px] ">
              How has our relationship with work changed?
            </p>
            <Button className="bg-[#4262ff] flex gap-3 rounded-full p-8 px-26 py-4">
              <span>View The Report</span>
              <ArrowRight />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cta;
