import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import Script from 'next/script'

export async function getStaticProps() {

    let data
    console.log("Generating user list")
    try {
        const res = await fetch("https://backend-api-gujnx.ondigitalocean.app/api/contacts", {
            headers: {
                Authorization: "Bearer 6f77053714a32d3d7fd40d2244b0ff49fff8055ca84e0c507f89f21b324ad279848ec137daaf95b6d2a63e060dc03d707af43f199d10d13e24cd65dfc3595edc74880d20216a498ca64baec368e1aba6539897540a97741bac3f1ad6757e172086491058cb09f90e48d878a65d92980ccd615b73efdcb97f912e36ff3dfb91b6"
            }
        })
        data = await res.json()
        console.log(data.data)

    }catch(err){
        console.log(err)
    }
    return {
        props: {
            data: data.data
        },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    //    revalidate: 10, // In seconds
    }    
}

export default function Home({data}){
    const [users, setUsers] = useState(data)

    console.log(users)
    

    return(
        <div className="home-main">
            <h1>Contact list</h1>
            <div className="contact-list">
                {users.map((item) => (
                    <div key={item.id} className="contact-list-box">
                        <Link key={item.id} href={`/users/${item.id}`}>
                            <div className="contact-list-link">{item?.attributes?.name}</div>
                        </Link>
                        <div className='icon-delete'>
                            <ion-icon name="close-outline"></ion-icon>
                        </div>
                    </div>
                ))}
            </div>
            <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
            <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
        </div>
    )
}
