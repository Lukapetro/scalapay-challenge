import type { NextPage } from 'next'
import Head from 'next/head'
import Emoji from '../components/common/Emoji'
import Footer from '../components/common/Footer'
import Card from '../components/home/Card'
import Punk1Img from '../assets/images/punk1.png'

export interface NFT {
  id: number
  title: string
  price: number
  image: string
}

const NFTs: NFT[] = [
  {
    id: 0,
    title: 'CryptoPunk #1',
    price: 10000,
    image: '../assets/images/punk1.png',
  },
]

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Head>
        <title>Scalapay Challenge</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
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

        <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
          {NFTs.map((nft) => (
            <Card {...nft} key={nft.id} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Home
