
import ItemCard from "./ItemCard";

export default function ItemList({ pokemons, aoClicar }) {
    return (
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {pokemons.map(pokemon => (
                <ItemCard
                    key={pokemon.name}
                    pokemon={pokemon}
                    aoClicar={aoClicar}
                />
            ))}
        </div>
    );
}
