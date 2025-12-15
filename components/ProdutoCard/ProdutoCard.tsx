"use client";

import { Produto } from "@/models/interfaces";

type Props = {
  produto: Produto;
  onAdd?: (produto: Produto) => void;  
  onRemove?: (produto: Produto) => void; 
};

export default function ProdutoCard({ produto, onAdd, onRemove }: Props) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        width: "200px",
        padding: "10px",
        textAlign: "center",
      }}
    >
      <img src={produto.image} width={180} />
      <h4>{produto.title}</h4>
      <p>{produto.price}€</p>

      {onAdd && (
        <button
          onClick={() => onAdd(produto)}
          style={{
            background: "green",
            color: "white",
            padding: "5px 10px",
            border: "none",
            borderRadius: "5px",
            marginTop: "5px",
            cursor: "pointer",
          }}
        >
          Adicionar ao carrinho
        </button>
      )}

      {onRemove && (
        <button
          onClick={() => onRemove(produto)}
          style={{
            background: "red",
            color: "white",
            padding: "5px 10px",
            border: "none",
            borderRadius: "5px",
            marginTop: "5px",
            cursor: "pointer",
          }}
        >
          Remover do carrinho
        </button>
      )}
    </div>
  );
}
