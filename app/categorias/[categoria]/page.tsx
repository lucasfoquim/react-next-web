"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { ParamValue } from "next/dist/server/request/params";

export default function CategoriaPage() {
  const params = useParams();
  const [produtos, setProdutos] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!params?.categoria) return;

    fetch("https://deisishop.pythonanywhere.com/products")
      .then(res => res.json())
      .then(data => {
        const produtosFiltrados = data.filter((p: { category: ParamValue; }) => p.category === params.categoria);
        setProdutos(produtosFiltrados);
        setLoading(false);
      });
  }, [params?.categoria]);

  if (loading) return <p>A carregar produtos da categoria...</p>;

  return (
    <div>
      <h1>Categoria: {params.categoria}</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {produtos.map(p => (
          <Link
            key={p.id}
            href={`/produtos/${p.id}`}
            style={{
              border: "1px solid #ccc",
              width: "200px",
              padding: "10px",
              textDecoration: "none",
              color: "black",
            }}
          >
            <img src={p.image} width={180} />
            <h3>{p.title}</h3>
            <p>{p.price}€</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
