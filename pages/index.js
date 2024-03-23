import Head from 'next/head'
import Link from 'next/link'
//import styles from '@/styles/home.module.css'
import DefaultLayout from '@/components/common/default-layout'

export default function Home() {
  return (
    <DefaultLayout>
      <Head>
        <title>首頁 | DEAL-2ND HAND SHOP</title>
      </Head>
      <h2>Home</h2>
    </DefaultLayout>
  )
}
