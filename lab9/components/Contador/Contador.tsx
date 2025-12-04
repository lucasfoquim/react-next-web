'use client'

import { useEffect, useState } from "react";

export default function Contador() {
    const [valor, setValor] = useState(0);
    const [historico, setHistorico] = useState<number[]>([]);

    // Carregar valores guardados no localStorage
    useEffect(() => {
        const saved = localStorage.getItem("contadorValor");
        const savedHistorico = localStorage.getItem("contadorHistorico");

        if (saved) setValor(Number(saved));
        if (savedHistorico) setHistorico(JSON.parse(savedHistorico));
    }, []);

    // Guardar sempre que mudar
    useEffect(() => {
        localStorage.setItem("contadorValor", valor.toString());
        localStorage.setItem("contadorHistorico", JSON.stringify(historico));
    }, [valor, historico]);

    function incrementar() {
        if (valor < 10) {
            const novo = valor + 1;
            setValor(novo);
            setHistorico([...historico, novo]);
        }
    }

    function decrementar() {
        if (valor > 0) {
            const novo = valor - 1;
            setValor(novo);
            setHistorico([...historico, novo]);
        }
    }

    function reset() {
        setValor(0);
        setHistorico([...historico, 0]);
    }

    // Cores dinâmicas
    let cor = "text-white bg-gray-700";
    if (valor <= 3) cor = "text-white bg-red-600";
    else if (valor <= 7) cor = "text-black bg-yellow-300";
    else cor = "text-white bg-green-600";

    return (
        <div className="flex flex-col items-center gap-4">

            {/* Valor com cor dinâmica */}
            <div className={`text-4xl font-bold p-6 rounded-xl ${cor}`}>
                {valor}
            </div>

            {/* Botões */}
            <div className="flex gap-4">
                <button 
                    onClick={decrementar}
                    className="px-4 py-2 bg-gray-800 text-white rounded-lg"
                >
                    - 1
                </button>

                <button 
                    onClick={reset}
                    className="px-4 py-2 bg-gray-500 text-white rounded-lg"
                >
                    Reset
                </button>

                <button 
                    onClick={incrementar}
                    className="px-4 py-2 bg-gray-800 text-white rounded-lg"
                >
                    + 1
                </button>
            </div>

            {/* Histórico */ }
            <div className="mt-6">
                <h3 className="text-xl font-bold mb-2">Histórico</h3>
                <ul className="list-disc pl-5">
                    {historico.map((v, i) => (
                        <li key={i}>{v}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
