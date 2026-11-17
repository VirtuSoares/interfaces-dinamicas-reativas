const CORES_TIPO = {
  fire: 'bg-orange-100 text-orange-800 border-orange-200',
  water: 'bg-blue-100 text-blue-800 border-blue-200',
  grass: 'bg-emerald-100 text-emerald-800 border-emerald-200',
  electric: 'bg-amber-100 text-amber-800 border-amber-200',
  psychic: 'bg-pink-100 text-pink-800 border-pink-200',
  ghost: 'bg-purple-100 text-purple-800 border-purple-200',
  dragon: 'bg-indigo-100 text-indigo-800 border-indigo-200',
  normal: 'bg-slate-100 text-slate-800 border-slate-200',
};

export function PokemonCard({ pokemon }) {
  const imagem =
    pokemon.sprites?.other?.['official-artwork']?.front_default ||
    pokemon.sprites?.front_default;

  return (
    <article className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
      <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-6 flex flex-col sm:flex-row items-center gap-6 text-white">
        <div className="w-36 h-36 bg-white/10 rounded-2xl flex items-center justify-center p-3 backdrop-blur-sm">
          {imagem ? (
            <img
              src={imagem}
              alt={pokemon.name}
              className="w-full h-full object-contain drop-shadow-md"
            />
          ) : (
            <span className="text-xs text-slate-300">Sem imagem</span>
          )}
        </div>

        <div className="text-center sm:text-left space-y-2">
          <span className="text-xs font-mono font-bold text-blue-400">
            #{String(pokemon.id).padStart(3, '0')}
          </span>
          <h2 className="text-3xl font-extrabold capitalize tracking-tight">
            {pokemon.name}
          </h2>
          <div className="flex flex-wrap justify-center sm:justify-start gap-2 pt-1">
            {pokemon.types.map((t) => {
              const tipoNome = t.type.name;
              return (
                <span
                  key={tipoNome}
                  className={`px-3 py-0.5 rounded-full text-xs font-bold uppercase border ${
                    CORES_TIPO[tipoNome] || CORES_TIPO.normal
                  }`}
                >
                  {tipoNome}
                </span>
              );
            })}
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-100">
            <p className="text-xs text-slate-500 font-medium">Altura</p>
            <p className="text-lg font-extrabold text-slate-900">
              {(pokemon.height / 10).toFixed(1)} m
            </p>
          </div>
          <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-100">
            <p className="text-xs text-slate-500 font-medium">Peso</p>
            <p className="text-lg font-extrabold text-slate-900">
              {(pokemon.weight / 10).toFixed(1)} kg
            </p>
          </div>
          <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-100 col-span-2 sm:col-span-1">
            <p className="text-xs text-slate-500 font-medium">Experiência Base</p>
            <p className="text-lg font-extrabold text-slate-900">
              {pokemon.base_experience} XP
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">
            Atributos Base (Stats)
          </h3>
          <div className="space-y-2.5">
            {pokemon.stats.map((s) => {
              const porcentagem = Math.min(100, Math.round((s.base_stat / 150) * 100));
              return (
                <div key={s.stat.name} className="space-y-1">
                  <div className="flex justify-between text-xs font-semibold">
                    <span className="uppercase text-slate-600">{s.stat.name}</span>
                    <span className="text-slate-900">{s.base_stat}</span>
                  </div>
                  <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-blue-600 rounded-full transition-all duration-300"
                      style={{ width: `${porcentagem}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </article>
  );
}