import GoldStar from "../assets/icons/100.svg";
import HalfStar from "../assets/icons/50.svg";
import EmptyStar from "../assets/icons/0.svg";

export default function getStar(rating) {
  switch (rating) {
    case 0:
      return EmptyStar;
      
    case 50:
      return HalfStar;
      
    case 100:
      return GoldStar;
      
    default:
      return EmptyStar;
  }
}
