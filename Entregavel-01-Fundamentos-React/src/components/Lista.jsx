export function Lista({ titulo, itens }) {
  return (
    <section className="lista-container">
      <h3>{titulo}</h3>
      <ul>
        {itens.map((item, index) => (
          <li key={`${item}-${index}`}>{item}</li>
        ))}
      </ul>
    </section>
  );
}