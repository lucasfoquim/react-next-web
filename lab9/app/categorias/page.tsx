"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function CategoriasPage() {
  const [categorias, setCategorias] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://deisishop.pythonanywhere.com/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategorias(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>A carregar categorias...</p>;

  return (
    <div>
      <h1>Categorias</h1>
      <ul>
        {categorias.map((cat) => (
          <li key={cat}>
            <Link href={`/categorias/${cat}`}>{cat}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
