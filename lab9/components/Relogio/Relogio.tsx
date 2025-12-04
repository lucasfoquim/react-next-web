'use client'

import { useEffect, useState } from "react";

export default function Relogio() {
    const [hora, setHora] = useState<string>("");

    useEffect(() => {
        // Função que atualiza a data
        const updateTime = () => {
            const agora = new Date();
            const hh = agora.getHours().toString().padStart(2, "0");
            const mm = agora.getMinutes().toString().padStart(2, "0");
            const ss = agora.getSeconds().toString().padStart(2, "0");
            setHora(`${hh}:${mm}:${ss}`);
        };

        updateTime(); // atualizar no load  
        const interval = setInterval(updateTime, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <span className="font-mono">
            {hora}
        </span>
    );
}
