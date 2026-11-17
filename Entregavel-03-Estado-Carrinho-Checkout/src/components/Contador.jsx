import { useState } from 'react';

export function Contador() {
  const [contador, setContador] = useState(0);

  return (
    <section className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
      <div>
        <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full">
          Parte 1 • Exercício Guiado
        </span>
        <h2 className="text-lg font-bold text-slate-900 mt-2">Contador Reativo (useState)</h2>
        <p className="text-sm text-slate-500">Demonstração do ciclo de re-renderização ao atualizar o estado.</p>
      </div>

      <div className="flex items-center gap-3">
        <button
          onClick={() => setContador(contador - 1)}
          className="w-10 h-10 rounded-lg bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold text-lg transition-colors"
        >
          -
        </button>
        <span className="w-12 text-center text-2xl font-extrabold text-slate-900">
          {contador}
        </span>
        <button
          onClick={() => setContador(contador + 1)}
          className="w-10 h-10 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg transition-colors"
        >
          +
        </button>
        <button
          onClick={() => setContador(0)}
          className="ml-2 px-3 py-2 text-xs font-medium text-slate-600 hover:text-slate-900 border border-slate-200 rounded-lg"
        >
          Zerar
        </button>
      </div>
    </section>
  );
}