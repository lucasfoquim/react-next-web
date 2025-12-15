"use client";

import { useEffect, useState } from "react";
import { Produto } from "@/models/interfaces";
import ProductSearch from "@/components/Input/Input";
import ProdutoCard from "@/components/ProdutoCard/ProdutoCard";

export default function ProdutosPage() {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [cart, setCart] = useState<Produto[]>([]);
  const [loading, setLoading] = useState(true);

  const [isStudent, setIsStudent] = useState(false); // checkbox estudante
  const [coupon, setCoupon] = useState("");          // input cupão

  // Carregar produtos da API
  useEffect(() => {
    fetch("https://deisishop.pythonanywhere.com/products")
      .then(res => res.json())
      .then((data: Produto[]) => {
        setProdutos(data);
        setLoading(false);
      });
  }, []);

  // Carregar carrinho do localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) setCart(JSON.parse(savedCart));
  }, []);

  // Guardar carrinho no localStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Adicionar produto ao carrinho
  function addToCart(produto: Produto) {
    if (!cart.find(p => p.id === produto.id)) setCart([...cart, produto]);
  }

  // Remover produto do carrinho
  function removeFromCart(produto: Produto) {
    setCart(cart.filter(p => p.id !== produto.id));
  }

  // Total
  const total = cart.reduce((sum, p) => sum + Number(p.price), 0);

  // Função de compra
  const buy = () => {
    fetch("/api/deisishop/buy", {
      method: "POST",
      body: JSON.stringify({
        products: cart.map(p => p.id),
        name: "",
        student: isStudent,
        coupon: coupon,
      }),
      headers: { "Content-Type": "application/json" },
    })
      .then(response => {
        if (!response.ok) throw new Error(response.statusText);
        return response.json();
      })
      .then(() => {
        setCart([]); // esvaziar carrinho após compra
        alert("Compra realizada com sucesso!");
      })
      .catch(() => {
        console.log("error ao comprar");
        alert("Erro ao comprar!");
      });
  };

  if (loading) return <p>A carregar produtos...</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>Produtos</h1>

      {/* Pesquisa */}
      <ProductSearch produtos={produtos} addToCart={addToCart} />

      {/* Carrinho */}
      <h2 style={{ marginTop: "40px" }}>Carrinho</h2>
      {cart.length === 0 ? (
        <p>Carrinho vazio</p>
      ) : (
        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
          {cart.map(p => (
            <ProdutoCard
              key={p.id}
              produto={p}
              onRemove={removeFromCart}
            />
          ))}
        </div>
      )}

      <h3>Total: {total.toFixed(2)}€</h3>

      {/* Inputs para compra */}
      <div style={{ marginTop: "20px" }}>
        <label style={{ display: "block", marginBottom: "10px" }}>
          <input
            type="checkbox"
            checked={isStudent}
            onChange={e => setIsStudent(e.target.checked)}
          />{" "}
          Estudante DEISI
        </label>

        <label style={{ display: "block", marginBottom: "10px" }}>
          Cupão de desconto:
          <input
            type="text"
            value={coupon}
            onChange={e => setCoupon(e.target.value)}
            style={{ marginLeft: "10px", padding: "3px" }}
          />
        </label>

        <button
          onClick={buy}
          style={{
            padding: "10px 20px",
            background: "blue",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Comprar
        </button>
      </div>
    </div>
  );
}
