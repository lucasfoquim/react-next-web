"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function ProdutoPage() {
  const params = useParams(); // <-- pega o ID do URL
  const [produto, setProduto] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!params?.id) return;

    fetch(`https://deisishop.pythonanywhere.com/product/${params.id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduto(data);
        setLoading(false);
      });
  }, [params?.id]);

  if (loading) return <p>A carregar produto...</p>;
  if (!produto) return <p>Produto não encontrado</p>;

  return (
    <div>
      <h1>{produto.title}</h1>
      <img src={produto.image} width={300} />

      <p><b>Preço:</b> {produto.price}€</p>
      <p>{produto.description}</p>
      <p><b>Categoria:</b> {produto.category}</p>
    </div>
  );
}
