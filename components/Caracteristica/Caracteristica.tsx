import Link from "next/link"

interface CaracteristicaProps {
    texto: string;
    index: number;
}

export default function Caracteristica({ texto, index }: CaracteristicaProps) {

    return (

        <li className="p-2 bg-pink-700 text-white rounded-xl my-2">
        
            <Link href={`/caracteristicas/${index}`}>
                {texto}
            </Link>
            
        </li>
    )
}
