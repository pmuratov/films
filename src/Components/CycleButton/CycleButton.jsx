import "./CycleButton.css";
export const CycleButton = ({ onClick }) => {
  return (
    <button className="CycleButton" onClick={onClick}>
      Добавить звезду
    </button>
  );
};
