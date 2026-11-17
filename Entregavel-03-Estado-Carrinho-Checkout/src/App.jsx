import { useState } from 'react';
import { Contador } from './components/Contador';
import { CheckoutForm } from './components/CheckoutForm';

const PRODUTOS_DISPONIVEIS = [
  { id: 1, nome: 'Teclado Mecânico RGB', categoria: 'Periféricos', preco: 289.90 },
  { id: 2, nome: 'Mouse Gamer Sem Fio', categoria: 'Periféricos', preco: 179.50 },
  { id: 3, nome: 'Headset Surround 7.1', categoria: 'Áudio', preco: 249.00 },
  { id: 4, nome: 'Mousepad Extra Grande', categoria: 'Acessórios', preco: 69.90 },
];

export function App() {
  const [carrinho, setCarrinho] = useState([]);
  const [adicionadoId, setAdicionadoId] = useState(null);

  function adicionarAoCarrinho(produto) {
    const novoItem = { ...produto, uid: crypto.randomUUID() };
    setCarrinho([...carrinho, novoItem]);

    setAdicionadoId(produto.id);
    setTimeout(() => {
      setAdicionadoId(null);
    }, 800);
  }

  function removerDoCarrinho(uid) {
    setCarrinho(carrinho.filter((item) => item.uid !== uid));
  }

  function limparCarrinho() {
    setCarrinho([]);
  }

  const valorTotal = carrinho.reduce((acc, item) => acc + item.preco, 0);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 py-10 px-4">
      <div className="max-w-5xl mx-auto space-y-8">

        <header className="border-b border-slate-200 pb-6">
          <h1 className="text-3xl font-extrabold text-slate-900">
            Aplicação Interativa com Estado
          </h1>
          <p className="text-slate-600 mt-1">
            Gerenciamento de estado com useState, imutabilidade via spread operator e validação de checkout (Semana 10).
          </p>
        </header>

        <Contador />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* Parte 2: Lista de Produtos */}
          <section className="lg:col-span-2 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-slate-900">Catálogo de Produtos</h2>
              <span className="text-xs font-semibold text-blue-700 bg-blue-100 px-2.5 py-1 rounded-full">
                Parte 2 • Mini Projeto
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {PRODUTOS_DISPONIVEIS.map((produto) => {
                const foiAdicionado = adicionadoId === produto.id;
                return (
                  <article
                    key={produto.id}
                    className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between"
                  >
                    <div>
                      <span className="text-xs font-semibold text-slate-500 uppercase">
                        {produto.categoria}
                      </span>
                      <h3 className="text-lg font-bold text-slate-900 mt-1">
                        {produto.nome}
                      </h3>
                      <p className="text-xl font-extrabold text-blue-600 mt-2">
                        R$ {produto.preco.toFixed(2)}
                      </p>
                    </div>

                    <button
                      onClick={() => adicionarAoCarrinho(produto)}
                      className={`mt-4 w-full py-2 px-4 rounded-lg font-medium text-sm transition-all duration-200 ${
                        foiAdicionado
                          ? 'bg-emerald-600 text-white scale-[0.98]'
                          : 'bg-blue-600 hover:bg-blue-700 text-white'
                      }`}
                    >
                      {foiAdicionado ? '✓ Adicionado!' : '+ Adicionar ao Carrinho'}
                    </button>
                  </article>
                );
              })}
            </div>
          </section>

          {/* Carrinho + Parte 3: Checkout */}
          <aside className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <h2 className="text-lg font-bold text-slate-900">Seu Carrinho</h2>
              <span className="bg-slate-900 text-white text-xs font-bold px-2.5 py-1 rounded-full">
                {carrinho.length} {carrinho.length === 1 ? 'item' : 'itens'}
              </span>
            </div>

            {carrinho.length === 0 ? (
              <p className="text-sm text-slate-500 py-8 text-center">
                Seu carrinho está vazio. Adicione produtos ao lado.
              </p>
            ) : (
              <ul className="divide-y divide-slate-100 max-h-60 overflow-y-auto my-2">
                {carrinho.map((item) => (
                  <li key={item.uid} className="py-3 flex items-center justify-between gap-2">
                    <div>
                      <p className="text-sm font-semibold text-slate-800">{item.nome}</p>
                      <p className="text-xs text-slate-500">R$ {item.preco.toFixed(2)}</p>
                    </div>
                    <button
                      onClick={() => removerDoCarrinho(item.uid)}
                      className="text-xs font-medium text-red-600 hover:text-red-800 bg-red-50 hover:bg-red-100 px-2.5 py-1 rounded-md transition-colors"
                    >
                      Remover
                    </button>
                  </li>
                ))}
              </ul>
            )}

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-sm font-medium text-slate-600">Total:</span>
              <span className="text-xl font-extrabold text-slate-900">
                R$ {valorTotal.toFixed(2)}
              </span>
            </div>

            <CheckoutForm
              total={valorTotal}
              itensCount={carrinho.length}
              onFinalizar={limparCarrinho}
            />
          </aside>

        </div>
      </div>
    </div>
  );
}

export default App;