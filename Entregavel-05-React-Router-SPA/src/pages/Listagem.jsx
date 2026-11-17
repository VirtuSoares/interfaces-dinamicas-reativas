import { Link } from 'react-router-dom';
import { CATALOGO_CURSOS } from '../data/catalogo';

export function Listagem() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
          Trilha de Estudos React (Listagem)
        </h1>
        <p className="text-slate-600 mt-1">
          Selecione qualquer módulo abaixo para navegar até sua rota dinâmica de detalhes (<code className="text-xs bg-slate-200 px-1.5 py-0.5 rounded">/item/:id</code>).
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {CATALOGO_CURSOS.map((item) => (
          <article
            key={item.id}
            className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800">
                  ID #{item.id} • {item.nivel}
                </span>
                <span className="text-xs font-semibold text-slate-500">
                  Carga: {item.cargaHoraria}
                </span>
              </div>
              <h2 className="text-lg font-bold text-slate-900 mb-2">{item.titulo}</h2>
              <p className="text-sm text-slate-600 leading-relaxed">{item.resumo}</p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex justify-end">
              <Link
                to={`/item/${item.id}`}
                className="px-4 py-2 bg-slate-900 hover:bg-blue-600 text-white text-sm font-semibold rounded-lg transition-colors"
              >
                Acessar Detalhes →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}