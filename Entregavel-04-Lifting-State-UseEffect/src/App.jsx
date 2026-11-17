import { useState, useEffect } from 'react';
import { LiftingStateDemo } from './components/LiftingStateDemo';
import { Formulario } from './components/Formulario';
import { Lista } from './components/Lista';

export function App() {
  // Estado do Gerenciador de Tarefas (Parte 2)
  const [tarefas, setTarefas] = useState([
    { id: 1, titulo: 'Elevar estado para o componente pai', prioridade: 'Alta', concluida: true },
    { id: 2, titulo: 'Sincronizar título da aba com useEffect', prioridade: 'Alta', concluida: false },
    { id: 3, titulo: 'Implementar timer com cleanup (clearInterval)', prioridade: 'Média', concluida: false },
  ]);

  // Estado do Timer de tempo ativo na página (Parte 3)
  const [segundosAtivos, setSegundosAtivos] = useState(0);

  const pendentes = tarefas.filter((t) => !t.concluida).length;

  // Parte 2: useEffect para atualizar o título da aba do navegador
  useEffect(() => {
    document.title = pendentes === 1
      ? '1 tarefa pendente | React'
      : `${pendentes} tarefas pendentes | React`;
  }, [pendentes]);

  // Parte 3: useEffect com setInterval + cleanup (clearInterval)
  useEffect(() => {
    const intervalo = setInterval(() => {
      setSegundosAtivos((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(intervalo);
  }, []);

  function adicionarTarefa(titulo, prioridade) {
    const nova = {
      id: crypto.randomUUID(),
      titulo,
      prioridade,
      concluida: false,
    };
    setTarefas([nova, ...tarefas]);
  }

  function alternarConcluida(id) {
    setTarefas(
      tarefas.map((t) => (t.id === id ? { ...t, concluida: !t.concluida } : t))
    );
  }

  function removerTarefa(id) {
    setTarefas(tarefas.filter((t) => t.id !== id));
  }

  const minutos = String(Math.floor(segundosAtivos / 60)).padStart(2, '0');
  const segundos = String(segundosAtivos % 60).padStart(2, '0');

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 py-10 px-4">
      <div className="max-w-4xl mx-auto space-y-8">

        {/* Cabeçalho + Timer (Parte 3) */}
        <header className="border-b border-slate-200 pb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-extrabold text-slate-900">
              Lifting State Up & useEffect
            </h1>
            <p className="text-slate-600 mt-1">
              Comunicação entre componentes e efeitos colaterais sincronizados (Semana 11).
            </p>
          </div>

          <div className="bg-slate-900 text-white px-4 py-3 rounded-xl shadow-sm flex items-center gap-3 self-start">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <div>
              <p className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold">
                Parte 3 • Tempo na Página
              </p>
              <p className="text-lg font-mono font-bold">
                {minutos}:{segundos}
              </p>
            </div>
          </div>
        </header>

        {/* Parte 1: Lifting State Up */}
        <LiftingStateDemo />

        {/* Parte 2: Gerenciador de Tarefas */}
        <section className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-5">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full">
                Parte 2 • Mini Projeto (Gerenciador de Tarefas)
              </span>
              <h2 className="text-xl font-bold text-slate-900 mt-2">
                Lista de Tarefas Compartilhada
              </h2>
            </div>

            <span className="text-sm font-semibold px-3 py-1 rounded-full bg-amber-100 text-amber-800">
              {pendentes} {pendentes === 1 ? 'pendente' : 'pendentes'} (ver aba do navegador)
            </span>
          </div>

          {/* Filho 1: Formulário */}
          <Formulario onAdicionarTarefa={adicionarTarefa} />

          {/* Filho 2: Lista */}
          <Lista
            tarefas={tarefas}
            onAlternarConcluida={alternarConcluida}
            onRemoverTarefa={removerTarefa}
          />
        </section>

      </div>
    </div>
  );
}

export default App;