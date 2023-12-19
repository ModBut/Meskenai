import RandomColor from "../../../Function/randomColor";

export default function BigSq1({ sq1, setSq1 }) {
  const change1 = () => {
    setSq1(RandomColor());
  };

  return (
    <div
      className="square big pointer"
      style={{
        backgroundColor: sq1 + "66",
        border: "1px solid" + sq1,
      }}
      onClick={change1}
    >
      This is BigSq 1
    </div>
  );
}
