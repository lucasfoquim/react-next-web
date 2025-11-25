interface TecnologiaProps {
    nome : string;
}


export default function TecnologiaCard({nome}: TecnologiaProps) {


    return (
        <div className="p-2 m-2 bg-pink-800 text-white rounded-2xl">
            <h2>{nome}</h2>
        </div>
    )
}