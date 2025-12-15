import Link from "next/link";
import Projeto from "@/components/Projeto/Projeto"

export default function DescricaoProjetos() {

    const projetos = [
        {nome:"LojaTeste", url:"https:/lucasfoquim.github.io/lab7/index.html"},
    ]

    return (
        <>
          <h1>Projetos</h1>
           <p>Projetos realizados em HTML, javascript e CSS.</p>
           <p>Visite o meu&nbsp;
           <Link href="https://lucasfoquim.github.io/" 
           target="_blank"
           className ="font-bold underline"
           >
         website
           </Link>
          </p>

         <Projeto 
            nome ="Loja"
            url="https:/lucasfoquim.github.io/lab7/index.html" 
            />


            {projetos.map(projeto => (
            <Projeto 
            key ={projeto.nome}
            nome ={projeto.nome}
            url={projeto.url} 
            />
           ))}

        </>

    )
}