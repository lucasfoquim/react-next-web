'use client'

import tecnologias from '@/data/tecnologias.json'
import { useParams} from 'next/navigation'
import TecnologiaDetailsCard from '@/components/TecnologiaDetailsCard/TecnologiaDetailsCard'
import Link from 'next/link'

export default function TecnologiaPage() {
    const params = useParams();
    const id = Number(params.tecnologia)

    const tecnologia = tecnologias[id]

    return (
    <div className = "p-6">
      <TecnologiaDetailsCard 
      title = {tecnologia.title}
      image = {tecnologia.image}
      description = {tecnologia.description}
      rating = {tecnologia.rating}
    />
      
    <Link 
       href = "/tecnologia"
       className="inline-block mt-6 px-4 py-2 bg-gray-800 text-white rounded-xl" 
    >
       Voltar 
    </Link>
    </div>
    )
}