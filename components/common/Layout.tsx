import Head from 'next/head'
import { ReactNode } from 'react'
import Footer from './Footer'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Head>
        <title>Scalapay Challenge</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="mt-6 flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        {children}
      </main>
      <Footer />
    </div>
  )
}
