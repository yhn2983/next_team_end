import Head from 'next/head'
import Category from '@/components/common/category/category'

//import styles from '@/styles/home.module.css'
import DefaultLayout from '@/components/common/default-layout'

export default function Home() {
  return (
    <DefaultLayout>
      <Head>
        <title>首頁 | DEAL-2ND HAND SHOP</title>
      </Head>
      <Category />
      <h2>Home</h2>
    </DefaultLayout>
  )
}
