import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";

const Cta = () => {
  return (
    <>
      <div className="flex justify-center items-center mt-[50px] md:mt-[100px]">
        <div className="w-full md:w-[1150px] flex justify-end pr-5 md:pr-32 items-center gap-8  bg-cta h-[40rem]">
          <div className="center-vertical gap-2">
            <h1 className="text-gray-800  md:text-black text-[30px] font-bold">
              The{" "}
              <span className="text-indigo-200 md:text-black">Ways We </span>
              Work
            </h1>
            <p className="text-[18px] shadow-md font-bold md:font-medium text-white md:text-black">
              <span className="text-white md:text-gray-800 font-bold">
                How has
              </span>{" "}
              our relationship with work changed?
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
