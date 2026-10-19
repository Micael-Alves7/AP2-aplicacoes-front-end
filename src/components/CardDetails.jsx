
import { useState, useEffect } from "react";
import { habilidades } from "../Traducoes";

export default function CardDetails({ numero, aoFechar }) {
    const [pokemon, setPokemon] = useState(null);

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${numero}`)
            .then(resposta => resposta.json())
            .then(dados => setPokemon(dados));
    }, [numero]);

    if (pokemon === null) {
        return <p>Carregando...</p>;
    }

    return (
        <div className="bg-white p-4 m-4 rounded">
            <button
                onClick={aoFechar}
                className="bg-gray-300 p-2 rounded"
            >
                Voltar
            </button>

            <h2 className="text-2xl font-bold capitalize">
                {pokemon.name} - #{pokemon.id}
            </h2>

            <img
                src={pokemon.sprites.front_default}
                alt={pokemon.name}
                className="w-32 h-32"
            />

            <p>
                Tipo: {pokemon.types.map(item => {
                    let nome = item.type.name;

                    if (nome === "grass") nome = "Planta";
                    if (nome === "poison") nome = "Veneno";
                    if (nome === "fire") nome = "Fogo";
                    if (nome === "water") nome = "Água";
                    if (nome === "bug") nome = "Inseto";
                    if (nome === "normal") nome = "Normal";
                    if (nome === "electric") nome = "Elétrico";
                    if (nome === "ground") nome = "Terra";
                    if (nome === "fairy") nome = "Fada";
                    if (nome === "fighting") nome = "Lutador";
                    if (nome === "psychic") nome = "Psíquico";
                    if (nome === "rock") nome = "Pedra";
                    if (nome === "ghost") nome = "Fantasma";
                    if (nome === "ice") nome = "Gelo";
                    if (nome === "dragon") nome = "Dragão";
                    if (nome === "dark") nome = "Sombrio";
                    if (nome === "steel") nome = "Aço";
                    if (nome === "flying") nome = "Voador";

                    return nome;
                }).join(", ")}
            </p>

            <p>Altura: {pokemon.height / 10} m</p>
            <p>Peso: {pokemon.weight / 10} kg</p>

            <h3 className="font-bold">Habilidades</h3>

            {pokemon.abilities.map(item => (
                <p key={item.ability.name}>
                    {habilidades[item.ability.name] || item.ability.name}
                </p>
            ))}

            <h3 className="font-bold">Estatísticas</h3>

            {pokemon.stats.map(item => {
                let nome = item.stat.name;

                if (nome === "hp") nome = "Vida";
                if (nome === "attack") nome = "Ataque";
                if (nome === "defense") nome = "Defesa";
                if (nome === "special-attack") nome = "Ataque especial";
                if (nome === "special-defense") nome = "Defesa especial";
                if (nome === "speed") nome = "Velocidade";

                return (
                    <p key={item.stat.name}>
                        {nome}: {item.base_stat}
                    </p>
                );
            })}
        </div>
    );
}
