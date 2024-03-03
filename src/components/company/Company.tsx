import { company } from "@/constant/company";

const Company = () => {
  return (
    <>
      <div className="flex justify-center items-center mt-[200px] sm:mt-[400px] md:mt-[470px] lg:mt-2">
        <div className="w-[1400px] flex flex-col gap-[48px] justify-center">
          <h1 className="text-center font-medium text-[30px] leading-[24px]">
            Trusted by 45M+ users
          </h1>
          <div className="">
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-3">
              {company.map((e, index) => (
                <div key={index} className="flex justify-center items-center ">
                  <img src={e.src} alt={e.title} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Company;
