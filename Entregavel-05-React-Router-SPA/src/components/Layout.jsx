import { NavLink, Outlet } from 'react-router-dom';

export function Layout() {
  const linkClass = ({ isActive }) =>
    `px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
      isActive
        ? 'bg-blue-600 text-white shadow-sm'
        : 'text-slate-300 hover:text-white hover:bg-slate-800'
    }`;

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800">
      {/* NavBar fixa no topo responsiva */}
      <header className="sticky top-0 z-50 bg-slate-900 border-b border-slate-800 shadow-md">
        <nav className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-blue-600 text-white font-extrabold flex items-center justify-center text-sm">
              SPA
            </span>
            <span className="font-bold text-white tracking-tight text-sm sm:text-base">
              React Router Portal
            </span>
          </div>

          <div className="flex items-center gap-1 sm:gap-2">
            <NavLink to="/" end className={linkClass}>
              Home
            </NavLink>
            <NavLink to="/listagem" className={linkClass}>
              Listagem
            </NavLink>
            <NavLink to="/item/1" className={linkClass}>
              Detalhes (Ex: #1)
            </NavLink>
          </div>
        </nav>
      </header>

      {/* Área dinâmica das rotas filhas via Outlet */}
      <main className="flex-1 max-w-5xl w-full mx-auto px-4 py-10">
        <Outlet />
      </main>

      {/* Footer compartilhado */}
      <footer className="bg-slate-900 text-slate-400 text-center py-5 text-xs sm:text-sm border-t border-slate-800">
        Desenvolvido por Victor Hugo | Universidade CEUMA - 2026 • Semana 12 (React Router SPA)
      </footer>
    </div>
  );
}