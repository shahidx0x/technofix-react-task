import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";

const Feature = () => {
  return (
    <div className="flex justify-center items-center lg:mt-2 xl:mt-[100px] 2xl:mt-[50px]">
      <div className="w-[1400px] flex flex-col gap-[48px] justify-center">
        <div className="flex flex-col gap-10 justify-center items-center">
          <div className="flex flex-row-reverse w-[350px] xl:w-[700px] ">
            <img
              src="../../../public/assets/image/group.svg"
              alt=""
              className=""
            />
          </div>
          <div className="-mt-16">
            <h1 className="text-center font-bold text-[35px] xl:text-[48px] break-all">
              Collaborate without
            </h1>
            <h1 className="text-center font-bold text-[35px] xl:text-[48px] break-all">
              constraints
            </h1>
          </div>
          <div className="flex flex-wrap flex-col md:flex-row md gap-5">
            <div className="w-[350px] h-[200px]">
              <div className="flex flex-col gap-5 p-2">
                <h1 className="text-[24px] font-bold">Free Forever</h1>
                <p className="text-[18px] font-thin">
                  Our free plan gives you unlimited team members, 3 boards, and
                  300+ expert-made templates. Signing up with your work email
                  lets you bring in your team faster. See our pricing plans for
                  more features.
                </p>
              </div>
            </div>
            <div className="w-[350px] h-[200px]">
              <div className="flex flex-col gap-5 p-2">
                <h1 className="text-[24px] font-bold">Easy integrations</h1>
                <p className="text-[18px] font-thin">
                  Miro has 100+ powerful integrations with tools you already use
                  like G Suite, Slack, and Jira, so your workflow is seamless.
                  View the full list in our Marketplace .
                </p>
              </div>
            </div>
            <div className="w-[350px] h-[200px]">
              <div className="flex flex-col gap-5 p-2">
                <h1 className="text-[24px] font-bold">Security first</h1>
                <p className="text-[18px] font-thin">
                  We treat your data like you would — with the utmost care. We
                  follow industry-leading security standards and give you tools
                  to protect intellectual property. Learn more at our Trust
                  Center .
                </p>
              </div>
            </div>
          </div>
          <div>
            <Button className="w-48 rounded-full p-7 flex gap-5 items-center bg-[#4262FF]">
              <span className="text-[18px]">Sign up free</span>
              <ArrowRight />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
