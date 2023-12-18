export default function ZebraiBebrai({ color }) {
  return (
    <>
      <h1 style={color === 1 ? { color: "blue" } : { color: "red" }}>
        Zebrai ir Bebrai
      </h1>
    </>
  );
}
