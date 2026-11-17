import { useState } from 'react';

function IrmaoEditor({ mensagem, onMensagemChange }) {
  return (
    <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
      <label className="block text-xs font-bold uppercase text-slate-500 mb-1.5">
        Componente Irmão A (Emissor de Eventos)
      </label>
      <input
        type="text"
        value={mensagem}
        onChange={(e) => onMensagemChange(e.target.value)}
        placeholder="Digite algo para sincronizar..."
        className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-500"
      />
    </div>
  );
}

function IrmaoExibidor({ mensagem }) {
  return (
    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 flex flex-col justify-center">
      <span className="text-xs font-bold uppercase text-blue-600 mb-1">
        Componente Irmão B (Receptor via Props)
      </span>
      <p className="text-sm font-semibold text-slate-900">
        {mensagem.trim() ? mensagem : 'Aguardando digitação no Irmão A...'}
      </p>
    </div>
  );
}

export function LiftingStateDemo() {
  // Estado elevado (Lifting State Up) para o componente pai
  const [textoCompartilhado, setTextoCompartilhado] = useState('Estado sincronizado entre irmãos!');

  return (
    <section className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4">
      <div>
        <span className="text-xs font-bold uppercase tracking-wider text-indigo-700 bg-indigo-50 px-2.5 py-1 rounded-full">
          Parte 1 • Exercício Guiado (Lifting State Up)
        </span>
        <h2 className="text-lg font-bold text-slate-900 mt-2">
          Compartilhamento de Estado entre Irmãos
        </h2>
        <p className="text-sm text-slate-500">
          O estado reside no componente pai, descendo como props e subindo via callbacks.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <IrmaoEditor
          mensagem={textoCompartilhado}
          onMensagemChange={setTextoCompartilhado}
        />
        <IrmaoExibidor mensagem={textoCompartilhado} />
      </div>
    </section>
  );
}