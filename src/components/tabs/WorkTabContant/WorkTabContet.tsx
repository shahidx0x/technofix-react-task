import { Content } from "@/types";
import { ArrowRight, Check } from "lucide-react";

const WContent = ({ reverse }: Content) => {
  return (
    <div>
      <div
        className={
          !reverse
            ? "w-full flex flex-col md:flex-row justify-between"
            : "w-full flex flex-col-reverse md:flex-row-reverse justify-between"
        }
      >
        <div className="flex flex-col gap-5 max-w-[400px] p-5 pt-6">
          <p className="flex gap-2 items-center">
            <Check size={20} />
            <span>Build low-fi wireframes</span>
          </p>
          <p className="flex gap-2 items-center">
            <Check size={20} />
            <span>Involve stakeholders in the design process</span>
          </p>
          <p className="flex gap-2 items-center">
            <Check size={20} />
            <span>Run engaging design workshops</span>
          </p>

          <div className="pl-6">
            <span className="text-blue-500 flex items-center gap-2">
              Learn more <ArrowRight size={20} className="pt-1" />
            </span>
          </div>
        </div>
        <div>
          <img
            className="h-full md:h-[500px]"
            src="../../../../public/assets/image/tabs/uxdesignwithoutshadow.jpg.png"
            alt="worktab"
          />
        </div>
      </div>
    </div>
  );
};

export default WContent;
