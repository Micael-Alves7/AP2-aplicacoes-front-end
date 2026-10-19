
export default function SearchForm({ busca, setBusca }) {
    return (
        <input
            type="text"
            placeholder="Buscar Pokémon..."
            value={busca}
            onChange={evento => setBusca(evento.target.value)}
            className="w-full rounded border p-3"
        />
    );
}
