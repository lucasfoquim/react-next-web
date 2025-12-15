"use client";

import { useState, useEffect } from "react";
import { Produto } from "@/models/interfaces";
import ProdutoCard from "@/components/ProdutoCard/ProdutoCard";

type Props = {
  produtos: Produto[];
  addToCart: (produto: Produto) => void; 
};

export default function ProductSearch({ produtos, addToCart }: Props) {
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState<Produto[]>(produtos);

  useEffect(() => {
    const resultado = produtos.filter((p) =>
      p.title.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredData(resultado);
  }, [search, produtos]);

  return (
    <div>
      {/* Input pesquisa */}
      <input
        type="text"
        placeholder="Pesquisar produtos..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-2 rounded w-full mb-4"
      />

      {/* Lista filtrada */}
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {filteredData.map((p) => (
          <ProdutoCard
            key={p.id}
            produto={p}
            onAdd={addToCart} 
          />
        ))}
      </div>
    </div>
  );
}
