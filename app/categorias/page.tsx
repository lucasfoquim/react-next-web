"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type Categoria = {
  name: string;
};

export default function CategoriasPage() {
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://deisishop.pythonanywhere.com/categories")
      .then(res => res.json())
      .then((data: Categoria[]) => {
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
          <li key={cat.name}>
            <Link href={`/categorias/${cat.name}`}>
              {cat.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
