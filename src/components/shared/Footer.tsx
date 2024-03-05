import { footer_nav, social } from "@/constant/footer";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const Footer = () => {
  return (
    <>
      <div className="bg-[#02033B] py-10 xl:py-[192px] px-10 md:px-0">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col-reverse xl:flex-row flex-wrap justify-center items-center gap-10">
            <div className="flex flex-col gap-5">
              <div>
                <h1 className="text-white text-[28px] font-bold">
                  Scan. Detect. Remove.
                </h1>
              </div>
              <div className="flex gap-10">
                {social.map((e, index) => (
                  <>
                    <img key={index} src={e.image} alt={e.title} />
                  </>
                ))}
              </div>
              <div className="flex gap-10 text-white">
                <p>Privacy Policy</p>
                <p>Terms and services</p>
              </div>
              <div className="w-auto md:w-[35rem]">
                <p className="text-white break-all">
                  Copyright © 2022 Certo Software Limited | Registered in
                  England & Wales No. 10072356
                </p>
              </div>
              <div>
                <p className="text-white">
                  Designed & developed by Bigger Picture
                </p>
              </div>
            </div>
            <div>
              <h1 className="text-[48px] font-bold text-white">Miro.</h1>
              <div className="border bg-white w-[12rem]"></div>
              <div className="flex flex-wrap lg:flex-col gap-5 mt-12">
                {footer_nav.map((e, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-5 cursor-pointer"
                  >
                    <span className=" w-[30px] h-[3px] bg-[#FFC247]"></span>
                    <span className="text-[#FFC247] pb-1 font-bold text-[19px]">
                      {e.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="md:w-[530px] md:h-[300px] rounded-[40px] flex justify-center items-center bg-[#FDB235]/95 relative py-5">
                <div className="z-10 px-10 flex flex-col gap-5 mt-">
                  <h1 className="font-bold text-2xl">
                    Signup to our newsletter
                  </h1>
                  <p className="font-medium text-md">
                    Receive the latest mobile security news, exclusive discounts
                    & offers straight to your inbox!
                  </p>
                  <div className="flex">
                    <Input
                      placeholder="Email Address"
                      className="rounded-s-[10rem] bg-white"
                    />
                    <Button className="rounded-s-none px-7 rounded-e-[10rem]">
                      Submit
                    </Button>
                  </div>
                </div>
                <img
                  className="absolute w-28 md:w-auto"
                  src="../../../public/assets/image/common/certo-dark-yellow.svg.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="pl-0  md:pl-[100px] lg:pl-[200px] xl:pl-[250px]">
            <p className="break-all text-gray-500 font-medium max-w-[600px]">
              Apple, the Apple logo, and iPhone are trademarks of Apple Inc.,
              registered in the U.S. and other countries. App Store is a service
              mark of Apple Inc. Android, Google Play and the Google Play logo
              are trademarks of Google LLC.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

