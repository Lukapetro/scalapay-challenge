import Link from 'next/link'
import { useRouter } from 'next/router'
import Card from '../../components/home/Card'
import { NFTs } from '../../utils/Data'

export default function Asset() {
  const router = useRouter()
  const { id } = router.query

  const nft = NFTs.find((nft) => nft.id === id)

  return (
    <div className="flex flex-col items-center justify-center">
      <Link href={'/'}>
        <a className="mb-2 flex items-center justify-center text-sm text-gray-500 no-underline hover:text-gray-800">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mr-1 h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back to store
        </a>
      </Link>
      <img
        className=" my-4 h-40 w-40 rounded-full"
        src={nft?.image.src}
        alt="nft_image"
      />

      <p className="my-4 text-xl font-bold ">{nft?.title}</p>

      <div className="inline-flex rounded-md shadow">
        <a
          href="#"
          className="inline-flex items-center justify-center rounded-md border border-transparent bg-scalapay px-5 py-3 text-base font-medium text-black hover:bg-scalapay"
        >
          Compra ora {nft?.price}€
        </a>
      </div>
    </div>
  )
}
