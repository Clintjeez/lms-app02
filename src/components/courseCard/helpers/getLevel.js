import NoRating from "../assets/icons/noRating.svg";
import Beginner from "../assets/icons/beginner.svg";
import Intermediate from "../assets/icons/intermediate.svg";
import Advanced from "../assets/icons/advanced.svg";

export default function getLevel(level) {
  switch (level) {
    case "beginner":
      return Beginner;

    case "intermediate":
      return Intermediate;

    case "advanced":
      return Advanced;

    default:
      return NoRating;
  }
}
