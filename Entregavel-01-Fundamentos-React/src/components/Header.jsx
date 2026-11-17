export function Header({ titulo, subtitulo }) {
  return (
    <header className="header">
      <h1>{titulo}</h1>
      {subtitulo && <p>{subtitulo}</p>}
    </header>
  );
}