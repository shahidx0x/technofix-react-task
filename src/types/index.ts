export interface BannerProps {
  reverse: boolean;
  info: {
    title: string;
    paragraph: string;
    image: string;
  };
}

export interface Content {
  reverse: boolean;
}

interface Iuser {
  name: string;
  image: string;
  designation: string;
}
export interface IReviewCard {
  title: string;
  title_image: string;
  description: string;
  user: Iuser;
}