import Punk1Img from '../public/images/punk1.png'
import Punk2Img from '../public/images/punk2.png'
import Punk3Img from '../public/images/punk3.png'
import Punk4Img from '../public/images/punk4.png'

export interface NFT {
  id: string
  title: string
  price: number
  image: StaticImageData
}

export const NFTs: NFT[] = [
  {
    id: '0',
    title: 'CryptoPunk #1',
    price: 10000,
    image: Punk1Img,
  },
  {
    id: '1',
    title: 'CryptoPunk #2',
    price: 2000,
    image: Punk2Img,
  },
  {
    id: '2',
    title: 'CryptoPunk #1',
    price: 300,
    image: Punk3Img,
  },
  {
    id: '3',
    title: 'CryptoPunk #4',
    price: 4,
    image: Punk4Img,
  },
]
