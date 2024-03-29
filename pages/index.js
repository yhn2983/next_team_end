import Head from 'next/head'
import DefaultLayout from '@/components/common/default-layout'
import Category from '@/components/home/category/category'
import ProdA from '@/components/home/product/prod-a'
import Offer from '@/components/home/offer/offer'
import ProdB from '@/components/home/product/prod-b'
import Ad from '@/components/home/ad/ad'

export default function Home() {
  return (
    <DefaultLayout pageName="home">
      <Head>
        <title>首頁 | DEAL-2ND HAND SHOP</title>
      </Head>
      <Category />
      <ProdA />
      <Offer />
      <ProdB />
      <Ad />
    </DefaultLayout>
  )
}
