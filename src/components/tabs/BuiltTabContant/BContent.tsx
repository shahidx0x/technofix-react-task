import { Content } from "@/types";
import { ArrowRight } from "lucide-react";

const BContent = ({ reverse }: Content) => {
  return (
    <div>
      <div
        className={
          !reverse
            ? "w-full flex flex-col md:flex-row justify-between"
            : "w-full flex flex-col-reverse md:flex-row-reverse justify-between"
        }
      >
        <div className="flex flex-col gap-10 max-w-[400px] pt-5 p-5">
          <h1 className="tab-title">Brainstorming</h1>
          <p className="break-all text-gray-500 ">
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
  );
};

export default BContent;
