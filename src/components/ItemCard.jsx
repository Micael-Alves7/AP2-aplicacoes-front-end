
export default function Card({ pokemon, aoClicar }) {
    const numero = pokemon.url.split("/")[6];

    return (
        <div
            onClick={() => aoClicar(numero)}
            className="bg-white p-4 m-2 rounded cursor-pointer"
        >
            <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${numero}.png`}
                alt={pokemon.name}
                className="w-24 h-24 mx-auto"
            />

            <h2 className="text-center font-bold capitalize">
                {pokemon.name}
            </h2>
        </div>
    );
}
