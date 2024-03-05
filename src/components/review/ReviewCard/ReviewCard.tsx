import { IReviewCard } from "@/types";

const ReviewCard = ({ title, title_image, description, user }: IReviewCard) => {
  return (
    <div className="px-10 md:px-0 w-[360px] h-[460px] flex flex-col gap-10 relative">
      <div className="w-[280px] h-[60px]">
        <img src={title_image} alt={title} />
      </div>

      <p className="text-gray-500 pr-5 break-all">{description}</p>
      <div className="absolute flex gap-10 items-center bottom-10 w-[300px] h-[80px]">
        <div className="">
          <img src={user.image} alt="" />
        </div>
        <div className="">
          <p className="text-gray-500 font-medium">{user.name}</p>
          <p className="text-gray-700">{user.designation}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
