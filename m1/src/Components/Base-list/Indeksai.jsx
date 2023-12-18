export default function Indeksas({ dogs, i }) {
  return (
    <div
      style={{
        border: "1px solid black",
        borderRadius: dogs[i] % 2 === 0 ? "50%" : "0%",
      }}
    >
      {dogs}
    </div>
  );
}

// export default function Indeksas({ dogs }) {
//     return (
//         <>
//         <div></div>
//         </>
//     )
// }
