"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Produto } from "@/models/interfaces";

export default function ProdutoPage() {
  const params = useParams();
  const [produto, setProduto] = useState<Produto | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!params?.id) return;

    fetch(`https://deisishop.pythonanywhere.com/product/${params.id}`)
      .then(res => res.json())
      .then((data: Produto) => {
        setProduto(data);
        setLoading(false);
      });
  }, [params?.id]);

  function addToCart(produto: Produto) {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    cart.push(produto);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Produto adicionado ao carrinho!");
  }

  if (loading) return <p>A carregar produto...</p>;
  if (!produto) return <p>Produto não encontrado</p>;

  return (
    <div>
      <h1>{produto.title}</h1>
      <img src={produto.image} width={300} />
      <p><b>Preço:</b> {produto.price}€</p>
      <p>{produto.description}</p>
      <p><b>Categoria:</b> {produto.category}</p>

      {/* BOTÃO PARA ADICIONAR AO CARRINHO */}
      <button
        onClick={() => addToCart(produto)}
        style={{
          marginTop: "10px",
          padding: "10px",
          background: "green",
          color: "white",
          border: "none",
          borderRadius: "5px",
        }}
      >
        Adicionar ao carrinho
      </button>
    </div>
  );
}
