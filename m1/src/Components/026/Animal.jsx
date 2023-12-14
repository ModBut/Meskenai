export default function Animal({ animal }) {
  const randomColor = (_) =>
    "#" + Math.floor(Math.random() * 16777215).toString(16);

  const color = randomColor();

  return (
    <div
      className="square"
      style={{ backgroundColor: color + "22", borderColor: color }}
    >
      <span className="square__animal">{animal}</span>
    </div>
  );
}
