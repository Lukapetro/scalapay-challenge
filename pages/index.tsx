import Emoji from '../components/common/Emoji'
import Card from '../components/home/Card'
import { NFTs } from '../utils/Data'

export default function Home() {
  return (
    <>
      <h1 className="text-6xl font-bold">
        Welcome to{' '}
        <a
          href="https://www.scalapay.com/it"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="relative inline-block before:absolute before:-inset-2 before:block before:-skew-y-1 before:bg-pink-500">
            <span className="relative text-white">Scalapay</span>
          </span>
        </a>{' '}
        <Emoji symbol="🦄" label="unicorn" />
      </h1>

      <p className="mt-4 text-2xl">
        Buy some{' '}
        <code className="rounded-md bg-gray-100 p-2 font-mono text-lg font-bold ">
          NFTs
        </code>
        , pay later!
      </p>

      <div className="mt-6 flex  flex-wrap items-center justify-around space-x-1 sm:w-full">
        {NFTs.map((nft, index) => (
          <Card {...nft} key={index} />
        ))}
      </div>
    </>
  )
}
