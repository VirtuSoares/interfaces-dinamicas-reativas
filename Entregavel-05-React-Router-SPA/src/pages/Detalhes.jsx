import { useParams, Link } from 'react-router-dom';
import { CATALOGO_CURSOS } from '../data/catalogo';

export function Detalhes() {
  // Parte 3: Capturando o parâmetro dinâmico :id da URL com useParams
  const { id } = useParams();
  const itemSelecionado = CATALOGO_CURSOS.find((curso) => curso.id === id);

  if (!itemSelecionado) {
    return (
      <div className="bg-white p-8 rounded-2xl border border-red-200 text-center space-y-4">
        <span className="inline-block px-3 py-1 rounded-full bg-red-100 text-red-700 text-xs font-bold">
          Parâmetro URL: id = "{id}"
        </span>
        <h2 className="text-2xl font-bold text-slate-900">Item não encontrado</h2>
        <p className="text-sm text-slate-600">
          Nenhum registro corresponde ao ID informado na URL.
        </p>
        <Link
          to="/listagem"
          className="inline-block px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700"
        >
          ← Voltar para a Listagem
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold">
            useParams() → ID capturado: {id}
          </span>
          <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold">
            {itemSelecionado.nivel}
          </span>
        </div>
        <span className="text-sm font-bold text-blue-600">
          Carga Horária: {itemSelecionado.cargaHoraria}
        </span>
      </div>

      <div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3">
          {itemSelecionado.titulo}
        </h1>
        <p className="text-base text-slate-700 leading-relaxed">
          {itemSelecionado.detalhes}
        </p>
      </div>

      <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
        <Link
          to="/listagem"
          className="px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-800 text-sm font-semibold rounded-lg transition-colors"
        >
          ← Voltar para Listagem
        </Link>

        <div className="flex gap-2">
          {CATALOGO_CURSOS.map((c) => (
            <Link
              key={c.id}
              to={`/item/${c.id}`}
              className={`px-3 py-1.5 rounded-md text-xs font-bold transition-colors ${
                c.id === id
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              #{c.id}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}