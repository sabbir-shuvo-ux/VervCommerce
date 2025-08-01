import { FaStar, FaRegStar, FaRegStarHalfStroke } from "react-icons/fa6";

export const getRatingStars = (rating: number) =>
  Array.from({ length: 5 }, (_, i) => {
    const Icon =
      rating >= i + 1
        ? FaStar
        : rating >= i + 0.5
        ? FaRegStarHalfStroke
        : FaRegStar;
    return <Icon key={i} />;
  });
