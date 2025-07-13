import { StarIcon } from "../assets/Svgs";

export default function RatingStars({ rating }) {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  for (let i = 0; i < fullStars; i++) {
    stars.push(<StarIcon key={i} className="w-3 h-3 text-yellow-400" />);
  }

  if (hasHalfStar) {
    stars.push(
      <div key="half" className="relative">
        <StarIcon className="w-3 h-3 text-gray-300" />
        <div className="absolute top-0 left-0 w-1/2 overflow-hidden">
          <StarIcon className="w-3 h-3 text-yellow-400" />
        </div>
      </div>
    );
  }

  const remainingStars = 5 - Math.ceil(rating);
  for (let i = 0; i < remainingStars; i++) {
    stars.push(
      <StarIcon key={`empty-${i}`} className="w-3 h-3 text-gray-300" />
    );
  }
  return stars;
}
