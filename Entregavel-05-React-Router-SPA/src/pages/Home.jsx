import { Link } from 'react-router-dom';

export function Home() {
  return (
    <div className="space-y-8">
      <section className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <span className="inline-block text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full">
          Single Page Application • Semana 12
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
          Navegação Fluida sem Recarregamento de Página
        </h1>
        <p className="text-slate-600 max-w-2xl leading-relaxed">
          Esta aplicação demonstra o roteamento client-side com <strong>React Router</strong>, utilizando
          <code className="mx-1 px-1.5 py-0.5 bg-slate-100 rounded text-sm text-slate-800">&lt;Outlet /&gt;</code>
          para manter a estrutura fixa de navegação,
          <code className="mx-1 px-1.5 py-0.5 bg-slate-100 rounded text-sm text-slate-800">NavLink</code>
          para destacar a rota ativa e
          <code className="mx-1 px-1.5 py-0.5 bg-slate-100 rounded text-sm text-slate-800">useParams</code>
          para ler parâmetros dinâmicos da URL.
        </p>

        <div className="pt-2 flex flex-wrap gap-3">
          <Link
            to="/listagem"
            className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm rounded-lg transition-colors shadow-sm"
          >
            Explorar Catálogo (Listagem) →
          </Link>
          <Link
            to="/item/4"
            className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-sm rounded-lg transition-colors"
          >
            Ver Rota Dinâmica (/item/4)
          </Link>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-5 rounded-xl border border-slate-200">
          <h3 className="font-bold text-slate-900 mb-1">1. Rotas Aninhadas</h3>
          <p className="text-sm text-slate-600">
            O componente Layout envolve todas as páginas sem precisar duplicar NavBar e Footer.
          </p>
        </div>
        <div className="bg-white p-5 rounded-xl border border-slate-200">
          <h3 className="font-bold text-slate-900 mb-1">2. Estado Ativo na NavBar</h3>
          <p className="text-sm text-slate-600">
            O NavLink detecta automaticamente qual URL está aberta e aplica destaque visual.
          </p>
        </div>
        <div className="bg-white p-5 rounded-xl border border-slate-200">
          <h3 className="font-bold text-slate-900 mb-1">3. Parâmetros Dinâmicos</h3>
          <p className="text-sm text-slate-600">
            A rota /item/:id captura o identificador via useParams e exibe o conteúdo correspondente.
          </p>
        </div>
      </section>
    </div>
  );
}