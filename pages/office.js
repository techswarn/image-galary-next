import Link from 'next/link'

export async function getServerSideprops(req, res) {
    let data
    console.log("Generating product list")
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
    //    revalidate: 20,
    }    
}


export default function office({data}) {
  return (
    
    <div>
    <h3>List of chareacters</h3>
        {data.map((item) => (<Link key={item.id} href={`/users/${item.id}`}><a style={{ display:"block"}} >{item?.attributes?.name}</a></Link>))}
    </div>
  )
}