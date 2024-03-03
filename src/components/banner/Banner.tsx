import { BannerProps } from "@/types";

const Banner = ({ reverse, info }: BannerProps) => {
  return (
    <div className="flex justify-center items-center mt-[50px] md:mt-[100px] ">
      <div
        className={
          reverse
            ? "w-[1400px] flex flex-col-reverse md:flex-row-reverse gap-20 justify-center items-center "
            : "w-[1400px] flex flex-col md:flex-row justify-center items-center "
        }
      >
        <div className="w-[400px] md:w-[550px] flex flex-col gap-5 md:gap-10">
          <h1 className="text-2xl px-[5rem] md:px-0 text-center md:text-left md:text-[48px] font-bold leading-8 md:leading-[3rem]">
            {info.title}
          </h1>
          <p className="md:pt-5 text-sm text-center md:text-left px-[7rem] md:px-0 md:text-xl font-thin break-all md:pr-10">
            {info.paragraph}
          </p>
          <p className="text-blue-500 text-center md:text-left underline">
            Learn more
          </p>
        </div>
        <div>
          <img className="w-80 md:w-full" src={info.image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
