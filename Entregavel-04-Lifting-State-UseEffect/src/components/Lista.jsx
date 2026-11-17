export function Lista({ tarefas, onAlternarConcluida, onRemoverTarefa }) {
  const coresPrioridade = {
    Alta: 'bg-red-100 text-red-700 border-red-200',
    Média: 'bg-amber-100 text-amber-700 border-amber-200',
    Baixa: 'bg-emerald-100 text-emerald-700 border-emerald-200',
  };

  if (tarefas.length === 0) {
    return (
      <p className="text-sm text-slate-500 text-center py-8 bg-slate-50 rounded-lg border border-dashed border-slate-200">
        Nenhuma tarefa cadastrada. Adicione uma acima!
      </p>
    );
  }

  return (
    <ul className="divide-y divide-slate-100 border border-slate-200 rounded-xl overflow-hidden bg-white">
      {tarefas.map((tarefa) => (
        <li
          key={tarefa.id}
          className="p-4 flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors"
        >
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              checked={tarefa.concluida}
              onChange={() => onAlternarConcluida(tarefa.id)}
              className="w-4 h-4 text-blue-600 rounded border-slate-300 focus:ring-blue-500 cursor-pointer"
            />
            <span
              className={`text-sm font-medium ${
                tarefa.concluida ? 'line-through text-slate-400' : 'text-slate-800'
              }`}
            >
              {tarefa.titulo}
            </span>
            <span
              className={`text-xs font-semibold px-2 py-0.5 rounded-full border ${
                coresPrioridade[tarefa.prioridade] || coresPrioridade.Média
              }`}
            >
              {tarefa.prioridade}
            </span>
          </div>

          <button
            onClick={() => onRemoverTarefa(tarefa.id)}
            className="text-xs font-semibold text-red-600 hover:text-red-800 bg-red-50 hover:bg-red-100 px-2.5 py-1 rounded-md transition-colors"
          >
            Excluir
          </button>
        </li>
      ))}
    </ul>
  );
}