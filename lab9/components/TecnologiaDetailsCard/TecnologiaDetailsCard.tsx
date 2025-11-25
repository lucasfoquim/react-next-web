// app/components/TecnologiaDetailsCard.tsx
interface TecnologiaDetailsProps {
    title: string;
    image: string;
    description: string;
    rating: number;
}

export default function TecnologiaDetailsCard({title, image, description, rating}: TecnologiaDetailsProps) {

    return (

        <div className="p-4 rounded-2xl bg-pink-700 text-white max-w-xl mx-auto">
            
            <h2 className="text-2xl font-bold mb-3">{title}</h2>
            
            <img 
                src={image} 
                alt={title} 
                className="w-full rounded-xl mb-4"
            />

            <p className="mb-4">{description}</p>

            <p className="font-semibold">⭐ Rating: {rating}/5</p>
        </div>
    );
}
