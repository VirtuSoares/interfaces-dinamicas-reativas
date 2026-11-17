export function Card({ titulo, descricao, categoria }) {
  return (
    <article className="card">
      <span className="badge">{categoria}</span>
      <h2>{titulo}</h2>
      <p>{descricao}</p>
    </article>
  );
}