import { useState } from 'react';

export function CheckoutForm({ total, itensCount, onFinalizar }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [erroNome, setErroNome] = useState('');
  const [pedidoSucesso, setPedidoSucesso] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setPedidoSucesso(false);

    if (!nome.trim()) {
      setErroNome('O campo nome é obrigatório para finalizar o pedido.');
      return;
    }

    setErroNome('');
    setPedidoSucesso(true);
    setNome('');
    setEmail('');
    onFinalizar();
  }

  return (
    <div className="mt-6 pt-6 border-t border-slate-200">
      <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-2.5 py-1 rounded-full">
        Parte 3 • Desafio Checkout
      </span>
      <h3 className="text-base font-bold text-slate-900 mt-2 mb-3">Finalizar Compra</h3>

      <form onSubmit={handleSubmit} className="space-y-3" noValidate>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">
            Nome Completo *
          </label>
          <input
            type="text"
            value={nome}
            onChange={(e) => {
              setNome(e.target.value);
              if (erroNome) setErroNome('');
            }}
            placeholder="Digite seu nome..."
            className={`w-full px-3 py-2 bg-white border rounded-lg text-sm focus:outline-none focus:ring-2 transition-all ${
              erroNome
                ? 'border-red-500 focus:border-red-500 focus:ring-red-200'
                : 'border-slate-300 focus:border-blue-500 focus:ring-blue-200'
            }`}
          />
          {erroNome && (
            <p className="text-xs font-medium text-red-600 mt-1">{erroNome}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">
            E-mail (Opcional)
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="seuemail@exemplo.com"
            className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
          />
        </div>

        <button
          type="submit"
          disabled={itensCount === 0}
          className={`w-full py-2.5 px-4 rounded-lg font-semibold text-sm transition-colors ${
            itensCount === 0
              ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
              : 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm'
          }`}
        >
          Confirmar Pedido (R$ {total.toFixed(2)})
        </button>
      </form>

      {pedidoSucesso && (
        <div className="mt-4 p-3 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm font-medium">
          ✓ Pedido confirmado com sucesso! Obrigado pela compra.
        </div>
      )}
    </div>
  );
}