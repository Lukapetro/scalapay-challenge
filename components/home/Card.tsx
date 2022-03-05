import Image from 'next/image'
import { NFT } from '../../pages'

export default function Card(nft: NFT) {
  return (
    <div className="mt-6 rounded-xl border text-left shadow transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:shadow-lg">
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
  )
}
