"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Produto } from "@/types";

export default function ProdutosPage() {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://deisishop.pythonanywhere.com/products")
      .then(res => res.json())
      .then((data: Produto[]) => {
        setProdutos(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>A carregar produtos...</p>;

  return (
    <div>
      <h1>Produtos</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {produtos.map((p: Produto) => (
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
