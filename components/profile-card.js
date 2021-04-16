import Image from "next/image";

export default function ProfileCard({ name, picture }) {
    return (
        <div className="flex items-center">
            <Image src={picture} height={150} width={200} alt={name}/>
            <div className="text-xl font-bold">{name}</div>
        </div>
    )
}