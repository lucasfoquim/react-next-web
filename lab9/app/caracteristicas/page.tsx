import Caracteristica from "@/components/Caracteristica/Caracteristica";

export default function CaracteristicasPage() {

    const caracteristicas = [
        'JSX.',
        'Componentes.',
        'Componentes.',
        'Roteamento.',
        'Hooks.',
        'Renderização.',
        'TypeScript.',
        'Comunidade.'
    ];

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Características do React e Next.js</h2>

            <ul>
                {caracteristicas.map((caracteristica, i) => (
                    <Caracteristica 
                        key={i}
                        texto={caracteristica}
                        index={i}
                    />
                ))}
            </ul>
        </div>
    );
}
