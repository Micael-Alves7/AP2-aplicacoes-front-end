
import { useState } from "react";
import useFetch from "../hooks/UseFetch";
import SearchForm from "../components/SearchForm";
import ItemList from "../components/ItemList";
import CardDetails from "../components/CardDetails";

export default function Home() {
    const [busca, setBusca] = useState("");
    const [numero, setNumero] = useState(null);

    const { dados: pokemons, carregando, erro } = useFetch(
        "https://pokeapi.co/api/v2/pokemon?limit=151"
    );

    const filtrados = pokemons.filter(pokemon =>
        pokemon.name.includes(busca.toLowerCase())
    );

    if (numero !== null) {
        return (
            <CardDetails
                numero={numero}
                aoFechar={() => setNumero(null)}
            />
        );
    }

    return (
        <div className="bg-gray-100 min-h-screen p-4">
            <h1 className="text-3xl text-center font-bold m-4">
                Catálogo de Pokémons
            </h1>

            <SearchForm
                busca={busca}
                setBusca={setBusca}
            />

            {carregando && <p className="text-center m-4">Carregando Pokémon...</p>}

            {erro && <p className="text-center m-4">Erro ao carregar os Pokémon. Tente novamente.</p>}

            {!carregando && !erro && (
                <ItemList
                    pokemons={filtrados}
                    aoClicar={setNumero}
                />
            )}

            {!carregando && !erro && filtrados.length === 0 && (
                <p className="text-center m-4">Nenhum Pokémon encontrado.</p>
            )}
        </div>
    );
}
