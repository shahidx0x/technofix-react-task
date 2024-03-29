import Hero from "./components/Hero/Hero";
import Company from "./components/company/Company";
import Feature from "./components/feature/Feature";
import Banner from "./components/banner/Banner";
import { banner_one, banner_two } from "./constant/banners";
import Cta from "./components/cta/Cta";
import WorkTab from "./components/tabs/WorkTab";
import BuiltTab from "./components/tabs/BuiltTab";
import Review from "./components/review/Review";

const Page = () => {
  return (
    <>
      <Hero />
      <Company />
      <Feature />
      <Banner reverse={false} info={banner_one} />
      <Banner reverse={true} info={banner_two} />
      <Cta />
      <WorkTab />
      <BuiltTab />
      <Review />
    </>
  );
};

export default Page;
