import RandomColor from "../../../Function/randomColor";

export default function BigSq2({ sq2, setSq2 }) {
  const change2 = () => {
    setSq2(RandomColor());
  };
  return (
    <div
      className="square big pointer"
      style={{
        backgroundColor: sq2 + "66",
        color: "1px solid" + sq2,
      }}
      onClick={change2}
    >
      This is BigSq 2
    </div>
  );
}
