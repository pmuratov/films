import { Star } from "../Star";
import "./Stars.css";

export const Stars = ({ count }): 1 | 2 | 3 | 4 | 5 => {
  const starsArray = [];
  for (let i = 0; i < count; i++) {
    starsArray.push(
      <li key={i}>
        <Star />
      </li>
    );
  }
  return <ul className="card-body-stars">{starsArray}</ul>;
};
