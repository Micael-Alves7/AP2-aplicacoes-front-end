
import { useState, useEffect } from "react";

function useFetch(url) {
    const [dados, setDados] = useState([]);
    const [carregando, setCarregando] = useState(true);
    const [erro, setErro] = useState(false);

    useEffect(() => {
        setCarregando(true);
        setErro(false);

        fetch(url)
            .then(resposta => {
                if (!resposta.ok) {
                    throw new Error("Erro ao buscar dados");
                }
                return resposta.json();
            })
            .then(resultado => setDados(resultado.results))
            .catch(() => setErro(true))
            .finally(() => setCarregando(false));
    }, [url]);

    return { dados, carregando, erro };
}

export default useFetch;
