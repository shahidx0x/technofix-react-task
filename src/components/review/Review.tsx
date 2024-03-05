import { review } from "@/constant/review";
import { Button } from "../ui/button";
import ReviewCard from "./ReviewCard/ReviewCard";

const Review = () => {
  return (
    <div className="w-full flex justify-center items-center mt-64 md:mt-0">
      <div className="flex justify-center items-center flex-col gap-10">
        <h1 className="text-[48px] text-center md:text-left font-bold">
          Loved by the world's best teams
        </h1>
        <Button className="rounded-full p-5 px-10 bg-white border border-indigo-500 hover:bg-indigo-200 hover:border-indigo-200 hover:text-gray-500 text-indigo-500">
          See all customer stories →
        </Button>
        <div className="flex flex-wrap justify-center flex-col md:flex-row gap-5 p-5">
          {review.map((e, index) => (
            <>
              <ReviewCard
                key={index}
                title={e.title}
                title_image={e.title_image}
                description={e.description}
                user={e.user}
              />
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Review;
