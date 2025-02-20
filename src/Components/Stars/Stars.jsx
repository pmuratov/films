import { useState } from "react";
import { Star } from "../Star/";
import { CycleButton } from "../CycleButton";
import "./Stars.css";

export const Stars = () => {
  const [count, setCount] = useState(1);
  const HandleClick = () => {
    setCount((prev) => (prev < 5 ? prev + 1 : 0));
  };
  if (
    count > 0 &&
    count < 6 &&
    Number.isInteger(count) &&
    typeof count === "number" &&
    !isNaN(count)
  ) {
    const starsArray = [];
    for (let i = 0; i < count; i++) {
      starsArray.push(
        <li key={i}>
          <Star />
        </li>
      );
    }
    return (
      <>
        <ul className="card-body-stars">{starsArray}</ul>
        <CycleButton onClick={HandleClick} />
      </>
    );
  } else return <CycleButton onClick={HandleClick} />;
};

/*Если рейтинг меньше 1 или больше 5, или вообще не число, то компонент не должен иметь какого-либо представления в DOM.
Звёзды рейтинга должны быть представлены тегом <ul> с классом card-body-stars. Для отображения символа звезды внутри тега <li> используйте компонент Star.*/
