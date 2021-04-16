import Image from "next/image";
import Link from 'next/link'

export default function ProfileCard({ name, picture }) {
    return (
        <Link href={`/profils/${name}`}>
            <div className="flex items-center">
                <Image src={picture} height={150} width={200} alt={name}/>
                <div className="text-xl font-bold">{name}</div>
            </div>
        </Link>
    )
}