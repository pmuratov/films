import "./CycleButton.css";
export const CycleButton = ({ setCount }) => {
  const HandleClick = () => {
    setCount((prev) => (prev < 5 ? prev + 1 : 0));
  };
  return (
    <button className="CycleButton" onClick={HandleClick}>
      Добавить звезду
    </button>
  );
};
