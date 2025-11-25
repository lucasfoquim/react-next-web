import tecnologias from "@/data/tecnologias.json";
import TecnologiaCard from "@/components/TecnologiaCard/TecnologiaCard"
import Link from "next/link"

export default function TecnologiasPage() {
    return (
           <>

        <h2>Página Tecnologias</h2>
        
        <p>Nesta aplicação utilizamos varias Tecnologias</p>

           {tecnologias.map((tecnologia, index) => (
           <Link 
            key={`tecno-${index}`}  
            href={`/tecnologia/${index}`}
          >
               <TecnologiaCard nome={tecnologia.title} />
            </Link>
      ))}

           

      </>
    )    
}