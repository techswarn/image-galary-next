// pages/posts/[id].js

// Generates `/posts/1` and `/posts/2`
export async function getStaticPaths() {

    let characters
    try {
        const res = await fetch(`https://backend-api-gujnx.ondigitalocean.app/api/contacts`, {
          headers: {
              Authorization: "Bearer 6f77053714a32d3d7fd40d2244b0ff49fff8055ca84e0c507f89f21b324ad279848ec137daaf95b6d2a63e060dc03d707af43f199d10d13e24cd65dfc3595edc74880d20216a498ca64baec368e1aba6539897540a97741bac3f1ad6757e172086491058cb09f90e48d878a65d92980ccd615b73efdcb97f912e36ff3dfb91b6"
          }
      })
    
        const data = await res.json()
        characters = data.data
    } catch(err){
        console.log(err)
    }

    
    return {
      paths : characters.map((item) => ({
        params: {
            _id: item.id.toString()
        }
      })),
      fallback: true 
    }
  }
  
  // `getStaticPaths` requires using `getStaticProps`
  export async function getStaticProps({params}) {
    console.log(params.id)

    const res = await fetch(`https://backend-api-gujnx.ondigitalocean.app/api/contacts/${params._id}`, {
      headers: {
          Authorization: "Bearer 6f77053714a32d3d7fd40d2244b0ff49fff8055ca84e0c507f89f21b324ad279848ec137daaf95b6d2a63e060dc03d707af43f199d10d13e24cd65dfc3595edc74880d20216a498ca64baec368e1aba6539897540a97741bac3f1ad6757e172086491058cb09f90e48d878a65d92980ccd615b73efdcb97f912e36ff3dfb91b6"
      }
  }) 
    const data = await res.json()
    
    return {
        props: {character: data.data}
    }
  }
  
  export default function Post({character}) {
    return (
        <div>This is {character.attributes.name} page</div>
    )
  }