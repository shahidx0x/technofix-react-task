import { navigation } from "@/constant/navigation";
import { Button } from "../ui/button";
import { GoArrowRight } from "react-icons/go";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const Navigation = () => {
  return (
    <>
      <div className="w-full small:w-[105%] md:w-full h-[90px] border border-b-gray-200 flex items-center">
        <div className="flex justify-between w-full items-center px-5 md:px-32 lg:px-5 2xl:px-32 ">
          {/* left of the navigation bar */}
          <div>
            <div className="flex gap-8 items-center">
              <img
                src="../../../public/assets/image/header/miro.svg"
                alt="miro"
              />
              {navigation.map((each_nav) => (
                <p
                  key={each_nav.title}
                  className="hidden lg:flex pt-2 gap-1 items-center"
                >
                  <span>
                    <span className="cursor-pointer font-medium hover:font-bold">
                      {each_nav.title}
                    </span>
                  </span>
                  {each_nav.icon && (
                    <img src={each_nav.icon} alt={each_nav.title} />
                  )}
                </p>
              ))}
            </div>
          </div>
          <div className="flex lg:hidden items-center pt-1">
            {/* hamburger menu for mobile device */}
            <Sheet>
              <SheetTrigger>
                <Menu size={40} />
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle className="flex justify-between border-b">
                    <div className=" p-4">
                      <img
                        src="../../../public/assets/image/header/miro.svg"
                        alt=""
                        width={100}
                      />
                    </div>
                    <p className="flex justify-center items-center pt-1 gap-1 hover:font-bold">
                      <img
                        src="../../../public/assets/image/navigation/world.svg"
                        alt="translate"
                      />
                      <span className="hover:font-bold">EN</span>
                    </p>
                  </SheetTitle>
                  <SheetDescription>
                    {navigation.map((each_nav) => (
                      <p
                        key={each_nav.title}
                        className="flex text-xl font-sans pt-4 gap-1 items-center"
                      >
                        <span>
                          <span className="cursor-pointer font-medium hover:font-bold">
                            {each_nav.title}
                          </span>
                        </span>
                        {each_nav.icon && (
                          <img src={each_nav.icon} alt={each_nav.title} />
                        )}
                      </p>
                    ))}
                  </SheetDescription>
                </SheetHeader>
                <div className="pt-10 flex flex-col gap-5 font-medium text-xl">
                  <Button className="hover:font-bold">Contact sales</Button>
                  <Button className="hover:font-bold">Login here</Button>
                </div>
                <Button className="flex gap-1 mt-5 w-full rounded-full bg-[#4262FF]">
                  <span>Sign up free</span>
                  <GoArrowRight />
                </Button>
                <div className="border border-gray-400 mt-10 justify-center items-center flex p-20 rounded-lg bg-indigo-400">
                  <img
                    src="../../../public/assets/image/navigation/miro-bgr.png"
                    alt=""
                    width={200}
                  />
                </div>
                <div className="border-b-2 mt-10 rounded-2xl"></div>
                <div className="border-b-2 mt-2 border-dashed"></div>
                <div className="border-b-2 mt-2"></div>
              </SheetContent>
            </Sheet>
          </div>
          {/* right side of the navigation bar */}
          <div className="hidden lg:flex">
            <div className="flex gap-8 lg:gap-2 lg:mt-2 xl:gap-3 2xl:gap-8 items-center font-medium">
              <p className="flex gap-1 hover:font-bold">
                <img
                  src="../../../public/assets/image/navigation/world.svg"
                  alt="translate"
                />
                <p className="hover:font-bold cursor-pointer">EN</p>
              </p>
              <p className="hover:font-bold cursor-pointer">Contact sales</p>
              <p className="hover:font-bold cursor-pointer">Login</p>
              <Button className="flex gap-1 rounded-full cursor-pointer bg-[#4262FF]">
                <span>Sign up free</span>
                <GoArrowRight />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
