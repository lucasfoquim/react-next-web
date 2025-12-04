export default function ProdutoDetails({ produto }: any) {
return (
<div className="bg-gray-900 text-white p-6 rounded-xl max-w-xl mt-4">
<img src={produto.image} alt={produto.name} className="rounded mb-4" />


<h1 className="text-3xl font-bold mb-2">{produto.name}</h1>
<p className="text-green-400 font-bold text-xl mb-4">€ {produto.price}</p>


<p>{produto.description}</p>
</div>
);
}