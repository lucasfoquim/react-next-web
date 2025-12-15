'use client'

import { useParams } from "next/navigation";
import Link from "next/link";

export default function CaracteristicaPage() {

    const params = useParams();
    const id = Number(params.caracteristica);

    const caracteristicas = [
        'JSX, sintaxe que mistura HTML e JS.',
        'Componentes, funções que retornam JSX.',
        'Componentes Reutilizáveis e Modulares.',
        'Roteamento Automático e APIs.',
        'Hooks: useState, useEffect e useSWR.',
        'Renderização Rápida e SEO Friendly.',
        'TypeScript Seguro e Escalável.',
        'Comunidade Ativa e Popularidade.'
    ];

    const texto = caracteristicas[id];

    return (

        <div className="flex flex-col items-center justify-center h-screen p-4 text-center">

            <div className="text-xl font-semibold mb-6 bg-pink-700 text-white p-4 rounded-xl">
                {texto}
            </div>

            <Link 
                href="/caracteristicas"
                className="mt-4 px-4 py-2 bg-gray-800 text-white rounded-lg"
            >
                Voltar às Características
            </Link>
            
        </div>
    );
}
