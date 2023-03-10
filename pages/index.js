import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Image from 'next/image'

export default function Home() {
  res.setHeader('Cache-Control', 's-maxage=86400')
  let arrImage = [];
  for(let i=1; i<=3; i++){
    arrImage.push(`https://backendapp.fra1.digitaloceanspaces.com/image-${i}.jpg`)
  }
  console.log(arrImage.length)
  
  return (
    <>
      <Head>
        <title>Next sample site</title>
        <meta name="keywords" content="ninjas"/>
      </Head>
      <div>
        <h1 className={styles.title}>Image galary</h1>
        <div className={styles.images}>
          {arrImage.map((img, i) => (
            <div key={i}>
              <Image src={img} priority={true} alt="site logo" width={300} height={450} />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}