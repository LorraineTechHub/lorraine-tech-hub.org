import Image from "next/image";
import Link from 'next/link'

export default function ProfileCard({ name, picture }) {
    return (
        <div className="flex items-center">
            <Link href={`/profils/${name}`}>
                <a>
                    <Image src={picture} height={150} width={200} alt={name}/>
                    <div className="text-xl font-bold">{name}</div>
                </a>
            </Link>
        </div>
    )
}