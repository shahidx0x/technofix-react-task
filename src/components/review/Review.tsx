import { Button } from "../ui/button";
import ReviewCard from "./ReviewCard/ReviewCard";

const Review = () => {
  return (
    <div className="mt-52 w-full flex justify-center items-center">
      <div className="flex justify-center items-center flex-col gap-10">
        <h1 className="text-[48px] text-center md:text-left font-bold">
          Loved by the world's best teams
        </h1>
        <Button className="rounded-full p-5 px-10 bg-white border border-indigo-500 hover:bg-indigo-200 hover:border-indigo-200 hover:text-gray-500 text-indigo-500">
          See all customer stories →
        </Button>
        <div className="flex gap-5">
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
        </div>
      </div>
    </div>
  );
};

export default Review;
