'use client'

import { useState } from "react";

export default function InputPage() {
    const [texto, setTexto] = useState("");
    const [categoria, setCategoria] = useState("React");
    const [tarefa, setTarefa] = useState("");
    const [tarefas, setTarefas] = useState<{ id: number, texto: string }[]>([]);
    const [editarId, setEditarId] = useState<number | null>(null);

    const categorias = ["React", "Next.js", "JavaScript", "TypeScript", "Node.js"];

    function adicionarTarefa() {
        if (!tarefa.trim()) return;

        // Editar tarefa existente
        if (editarId !== null) {
            setTarefas(
                tarefas.map((t) =>
                    t.id === editarId ? { ...t, texto: tarefa } : t
                )
            );
            setEditarId(null);
            setTarefa("");
            return;
        }

        // Nova tarefa
        setTarefas([
            ...tarefas,
            { id: Date.now(), texto: tarefa }
        ]);

        setTarefa("");
    }

    function apagar(id: number) {
        setTarefas(tarefas.filter((t) => t.id !== id));
    }

    function editar(id: number, texto: string) {
        setEditarId(id);
        setTarefa(texto);
    }

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Página Input</h1>

            {/* INPUT */}
            <div className="mb-6">
                <input
                    type="text"
                    placeholder="Escreve algo..."
                    value={texto}
                    onChange={(e) => setTexto(e.target.value)}
                    className="border p-2 rounded w-full"
                />

                <p className="mt-2 text-lg">
                    <strong>Digitado:</strong> {texto}
                </p>
            </div>

            {/* SELECTOR */}
            <div className="mb-6">
                <label className="mr-2 font-semibold">Categoria:</label>
                <select
                    value={categoria}
                    onChange={(e) => setCategoria(e.target.value)}
                    className="border p-2 rounded"
                >
                    {categorias.map((c) => (
                        <option key={c} value={c}>
                            {c}
                        </option>
                    ))}
                </select>

                <p className="mt-2">Categoria selecionada: <strong>{categoria}</strong></p>
            </div>

            {/* TAREFAS */}
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Nova tarefa..."
                    value={tarefa}
                    onChange={(e) => setTarefa(e.target.value)}
                    className="border p-2 rounded w-full"
                />

                <button
                    onClick={adicionarTarefa}
                    className="mt-2 px-4 py-2 bg-blue-700 text-white rounded"
                >
                    {editarId ? "Guardar edição" : "Adicionar tarefa"}
                </button>
            </div>

            <ul className="mt-4 space-y-2">
                {tarefas.map((t) => (
                    <li
                        key={t.id}
                        className="p-3 bg-pink-400 rounded flex justify-between items-center"
                    >
                        <span>{t.texto}</span>

                        <div className="flex gap-2">
                            <button
                                onClick={() => editar(t.id, t.texto)}
                                className="px-3 py-1 bg-yellow-500 text-white rounded"
                            >
                                Editar
                            </button>
                            <button
                                onClick={() => apagar(t.id)}
                                className="px-3 py-1 bg-red-600 text-white rounded"
                            >
                                Apagar
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
