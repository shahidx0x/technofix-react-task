import { navigation } from "@/constant/navigation";
import { Button } from "../ui/button";
import { GoArrowRight } from "react-icons/go";

const Navigation = () => {
  return (
    <>
      <div className="w-full h-[90px] border border-b-gray-200 flex items-center">
        <div className="flex justify-between w-full items-center pl-5 pr-5 md:pl-32 md:pr-32 lg:pl-0 lg:pr-0  ">
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
                  className="hidden md:flex pt-2 gap-1 items-center"
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

          {/* right side of the navigation bar */}
          <div className="hidden md:flex">
            <div className="flex gap-8 lg:gap-2 lg:mt-2 items-center font-medium">
              <p className="flex gap-1 hover:font-bold">
                <img
                  src="../../../public/assets/image/navigation/world.svg"
                  alt="translate"
                />
                <p className="hover:font-bold">EN</p>
              </p>
              <p className="hover:font-bold">Contact sales</p>
              <p className="hover:font-bold">Login</p>
              <Button className="flex gap-1 rounded-full bg-[#4262FF]">
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
