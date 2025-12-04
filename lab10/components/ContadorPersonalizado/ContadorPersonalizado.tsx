'use client'

import { useEffect, useState } from "react";

interface ContadorPersonalizadoProps {
    title: string;
}

export default function ContadorPersonalizado({ title }: ContadorPersonalizadoProps) {
    const storageKey = `likes-${title}`;

    const [likes, setLikes] = useState(0);

    // Carrega valor guardado
    useEffect(() => {
        const saved = localStorage.getItem(storageKey);
        if (saved) setLikes(Number(saved));
    }, [storageKey]);

    // Guarda sempre que mudar
    useEffect(() => {
        localStorage.setItem(storageKey, likes.toString());
    }, [likes, storageKey]);

    function incrementar() {
        setLikes(likes + 1);
    }

    return (
        <button
            onClick={incrementar}
            className="px-4 py-2 mt-2 bg-yellow-400 text-black rounded-lg font-bold"
        >
            👍 Likes: {likes}
        </button>
    );
}
