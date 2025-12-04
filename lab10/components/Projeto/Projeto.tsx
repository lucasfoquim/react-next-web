import Link from "next/link";

interface ProjetoProps {
    nome : string
    url : string
}

export default function Projeto({nome, url}: ProjetoProps) {

    return(
        <article className ="bg-yellow-500 p-2 m-2 rounded-xl">

            <h2 className="text-2xl">{nome}</h2>

            <p>Explore o projeto {nome} no seguinte&nbsp; 
                <Link href={url} className="underline" target="_blank">
                link
            </Link>

             </p>
        </article>
    )
}