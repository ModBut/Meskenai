export default function Daiktas({ seaPlaners }) {
  return (
    <div>
      <ul>
        {seaPlaners.map((planer) => (
          <li key={planer.id}>
            <p>ID: {planer.id}</p>
            <p>Type: {planer.type}</p>
            <p>Name: {planer.name}</p>
            <p>Color: {planer.color}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
