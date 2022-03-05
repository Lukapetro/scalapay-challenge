import { NFT } from '../../pages'

export default function Card(nft: NFT) {
  return (
    <div className="mt-6 w-96 rounded-xl border p-6 text-left transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:text-blue-600">
      <img src={nft.image} className="... h-48 w-96 object-cover"></img>
      <h3 className="text-2xl font-bold">{nft.title}</h3>
      <p className="mt-4 text-xl">
        Find in-depth information about Next.js features and API.
      </p>
    </div>
  )
}
