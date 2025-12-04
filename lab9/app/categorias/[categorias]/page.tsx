"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

export default function CategoriaPage() {
  const params = useParams();
  const [produtos, setProdutos] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!params?.categorias) return;

    fetch(
      `https://deisishop.pythonanywhere.com/products/category/${params.categorias}`
    )
      .then((res) => res.json())
      .then((data) => {
        setProdutos(data);
        setLoading(false);
      });
  }, [params?.categorias]);


  return (
    <div>
      <h1>Categoria: {params.categorias}</h1>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {produtos.map((p: any) => (
          <Link
            href={`/produtos/${p.id}`}
            key={p.id}
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
