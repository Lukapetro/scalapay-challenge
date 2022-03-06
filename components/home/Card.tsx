import Image from 'next/image'
import Link from 'next/link'
import { NFT } from '../../pages/Home'

export default function Card(nft: NFT) {
  return (
    <Link href={`/assets/${nft.id}`} key={nft.id}>
      <div className="mt-6 rounded-xl border text-left shadow transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:cursor-pointer hover:shadow-lg">
        <Image
          alt="Vercel logo"
          src={nft.image}
          width={225}
          height={225}
          className="rounded-t-xl"
        />
        <div className="p-6">
          <h3 className="text-2xl font-bold">{nft.title}</h3>
          <p className="mt-4 text-xl">{nft.price} €</p>
        </div>
      </div>
    </Link>
  )
}
