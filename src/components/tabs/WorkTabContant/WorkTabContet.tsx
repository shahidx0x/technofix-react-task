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
            <span className="text-gray-500">Build low-fi wireframes</span>
          </p>
          <p className="flex gap-2 items-center">
            <Check size={20} />
            <span className="text-gray-500">
              Involve stakeholders in the design process
            </span>
          </p>
          <p className="flex gap-2 items-center">
            <Check size={20} />
            <span className="text-gray-500">Run engaging design workshops</span>
          </p>

          <div className="pl-6">
            <span className="text-blue-500 flex items-center gap-2">
              Learn more <ArrowRight size={20} className="pt-1" />
            </span>
          </div>
          <div className="flex flex-col gap-4 mt-4 md:mt-36 pl-2">
            <p className="text-md text-gray-500">
              Integrate your favorite tools
            </p>
            <div className="flex gap-8">
              <div className="flex gap-5">
                <img
                  src="../../../../public/assets/image/tools/diamond.svg"
                  alt=""
                />
              </div>
              <div className="bg-[url('../../../../public/assets/image/tools/Vector.svg')] bg-no-repeat pr-2 flex justify-center items-center">
                <div className="flex justify-center items-center">
                  <img
                    src="../../../../public/assets/image/tools/X.svg"
                    alt=""
                  />
                  <img
                    src="../../../../public/assets/image/tools/d.svg"
                    alt=""
                  />
                </div>
              </div>
              <div>
                <img
                  src="../../../../public/assets/image/tools/figma.svg"
                  alt=""
                />
              </div>
              <div>
                <img
                  src="../../../../public/assets/image/tools/notion.svg"
                  alt=""
                />
              </div>
            </div>
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
