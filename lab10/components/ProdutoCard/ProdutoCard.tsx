import Link from "next/link";


export default function ProdutoCard({ produto }: any) {
return (
<Link href={`/produtos/${produto.id}`}>
<div className="p-4 bg-gray-800 text-white rounded-xl hover:bg-gray-700 cursor-pointer">
<img src={produto.image} alt={produto.name} className="rounded mb-2" />
<h2 className="text-xl font-bold">{produto.name}</h2>
<p className="text-green-400 font-bold">€ {produto.price}</p>
</div>
</Link>
);
}