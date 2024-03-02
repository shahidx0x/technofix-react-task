import { header } from "@/constant/header";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import "./style.css";

const Header = () => {
  return (
    <div className="pl-[120px] pt-[100px] pr-[120px] flex justify-center">
      <div className="w-[1140px] h-[470px] flex gap-30">
        <div className="w-[440px] h-[470px] p-2">
          <p className="header-title">{header.header_title}</p>
          <p className="pt-2 text-gray-600">{header.header_paragraph}</p>
          <div className="pt-5">
            <Input
              className="p-6 rounded-full"
              type="email"
              placeholder="Enter your work email"
            />
          </div>
          <Button className="bg-[#4262FF] mt-2 rounded-full p-6 w-full">
            Sign up free
          </Button>
          <span className="font-sans text-gray-500 text-sm p-2">
            Collaborate with your team within minutes
          </span>
          <div className="w-[400px] h-[62px] mt-[14px] bg-[#F5F5F7] rounded-md flex justify-center items-center gap-2 p-2">
            <div className="w-[200px] h-[40px]">
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
              <p className="font-thin text-gray-500">Based on 5149+ reviews:</p>
            </div>
            <div className="w-[200px] h-[40px] flex justify-evenly items-center">
              <div>
                <img src="../../../public/assets/image/header/g2.svg" alt="" />
              </div>
              <p className="font-bold text-md">GetApp</p>
              <p className="font-bold text-md">Capterra</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <img src="../../../public/assets/image/header/header.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
