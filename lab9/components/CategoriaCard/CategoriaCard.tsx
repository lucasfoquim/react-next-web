import Link from "next/link";

export default function CategoriaCard({ categoria }: any) {
  return (
    <Link 
      href={`/categorias/${categoria.id}`}
      className="block"   // O link passa a ser o wrapper
    >
      <div className="p-4 bg-blue-800 text-white rounded-xl hover:bg-blue-700 cursor-pointer text-center">
        <img 
          src={categoria.image} 
          alt={categoria.name} 
          className="mx-auto h-24 mb-2" 
        />
        <h2 className="text-xl font-bold">{categoria.name}</h2>
      </div>
    </Link>
  );
}
