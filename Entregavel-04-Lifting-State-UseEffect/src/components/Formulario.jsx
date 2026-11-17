import { useState } from 'react';

export function Formulario({ onAdicionarTarefa }) {
  const [titulo, setTitulo] = useState('');
  const [prioridade, setPrioridade] = useState('Média');

  function handleSubmit(e) {
    e.preventDefault();
    if (!titulo.trim()) return;

    onAdicionarTarefa(titulo.trim(), prioridade);
    setTitulo('');
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
      <input
        type="text"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
        placeholder="Nova tarefa (ex: Revisar hooks do React)..."
        className="flex-1 px-3.5 py-2.5 bg-white border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-500"
      />
      <select
        value={prioridade}
        onChange={(e) => setPrioridade(e.target.value)}
        className="px-3 py-2.5 bg-white border border-slate-300 rounded-lg text-sm font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-500"
      >
        <option value="Alta">Alta</option>
        <option value="Média">Média</option>
        <option value="Baixa">Baixa</option>
      </select>
      <button
        type="submit"
        className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm rounded-lg transition-colors"
      >
        + Adicionar
      </button>
    </form>
  );
}