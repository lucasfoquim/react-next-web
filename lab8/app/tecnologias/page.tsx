import React from "react";
import Image from "next/image";
import tecnologias from "@/app/data/tecnologias.json";


export default function Page() {
  const lista = JSON.parse(JSON.stringify(tecnologias));

  return (
    <div className="px-8 py-6">
      <h2 className="text-3xl font-bold mb-6">Tecnologias Exploradas</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {lista.map((tec: any, i: number) => {
          return (
            <div
              key={i}
              className="bg-white p-5 rounded-xl shadow-md border flex flex-col items-center hover:shadow-xl transition-shadow"
            >
              <Image
                src={`/tecnologias/${tec.image}`} 
                alt={`Logotipo do ${tec.title}`}
                width={200}
                height={200}
                className="mb-4"
              />

              <h3 className="text-xl font-semibold">{tec.title}</h3>

              <p className="text-gray-600 text-center mt-2">{tec.description}</p>

              <div className="mt-3 text-yellow-500 text-lg">
                {"⭐".repeat(tec.rating)}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
