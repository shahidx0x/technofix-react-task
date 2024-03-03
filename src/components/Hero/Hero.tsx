import { header } from "@/constant/header";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";

const Hero = () => {
  return (
    <>
      <div className="w-full flex justify-center pt-2 md:pt-[100px] lg:pt-5">
        <div className="flex gap-5 md:gap-[60px] items-center flex-col lg:flex-row lg:w-[1000px] xl:w-[1200px] 2xl:w-[1400px] h-[700px]">
          <div className="">
            <div>
              <p className="text-[#050038] text-5xl text-center lg:text-left md:text-[60px] md:mb-5 font-bold leading-[60px]">
                {header.header_title}
              </p>
              <p className="pt-5 p-2 md:p-0 md:w-full text-gray-600 md:flex text-md md:text-[1.4rem] lg:text-left text-center">
                {header.header_paragraph}
              </p>
              <div className="flex md:px-7 lg:px-0 justify-center flex-col items-center w-full">
                <div className="pt-5 w-96 md:w-full">
                  <Input
                    className="p-6 w-full rounded-full"
                    type="email"
                    placeholder="Enter your work email"
                  />
                </div>
                <Button className="bg-[#4262FF] mt-4 mb-2 rounded-full p-6 w-96 md:w-full lg:w-full">
                  Sign up free
                </Button>
              </div>
              <p className="font-sans md:px-8 lg:px-2 text-center md:text-left text-gray-500 text-sm p-2">
                Collaborate with your team within minutes
              </p>
              <div className="p-2 md:p-8 lg:p-0">
                <div className=" w-full lg:w-[400px] md:h-[100px] mt-[20px] bg-[#F5F5F7] rounded-md flex justify-center items-center gap-2 p-5">
                  <div className="md:w-[200px] md:h-[40px]">
                    <div className="flex gap-1">
                      {Array.from({ length: 4 }).map((_, index) => (
                        <img
                          key={index}
                          src="../../../public/assets/image/header/start-full.svg"
                          alt="star"
                        />
                      ))}
                      <img
                        src="../../../public/assets/image/header/star-half.svg"
                        alt="star"
                      />
                    </div>
                    <p className="font-thin text-gray-500">
                      Based on 5149+ reviews:
                    </p>
                  </div>
                  <div className="w-[200px] h-[40px] flex justify-evenly items-center">
                    <div>
                      <img
                        src="../../../public/assets/image/header/g2.svg"
                        alt=""
                      />
                    </div>
                    <p className="font-bold text-md">GetApp</p>
                    <p className="font-bold text-md">Capterra</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-[400px] md:w-[800px] lg:w-full xl:w-[1200px] md:h-full flex justify-center items-center">
            <img
              src="../../../public/assets/image/header/header.svg"
              alt=""
              className="w-full"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
