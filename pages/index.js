import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Head>
        <title>Next sample site</title>
        <meta name="keywords" content="ninjas"/>
      </Head>
      <div>
        <h1 className={styles.title}>Image galary</h1>
        <div className={styles.images}>
          <Image src="/image-1.jpg" alt="site logo" width={300} height={450} />
          <Image src="/image-2.jpg" alt="site logo" width={300} height={450} />
          <Image src="/image-3.jpg" alt="site logo" width={300} height={450} />
          <Image src="/image-4.jpg" alt="site logo" width={300} height={450} />
          <Image src="/image-5.jpg" alt="site logo" width={300} height={450} />
          <Image src="/image-6.jpg" alt="site logo" width={300} height={450} />
          <Image src="/image-7.jpg" alt="site logo" width={300} height={450} />
          <Image src="/image-8.jpg" alt="site logo" width={300} height={450} />
        </div>
      </div>
    </>
  )
}