import Head from 'next/head'
import Category from '@/components/home/category/category'

//import styles from '@/styles/home.module.css'
import DefaultLayout from '@/components/common/default-layout'

export default function Home() {
  return (
    <DefaultLayout pageName="home">
      <Head>
        <title>首頁 | DEAL-2ND HAND SHOP</title>
      </Head>
      <Category />
      <h2>Home</h2>
    </DefaultLayout>
  )
}
