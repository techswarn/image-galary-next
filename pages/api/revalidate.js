export default async function handler(req, res) {
  
    try {
      console.log("-------------------------------****--------------------------------")
      console.log("---------------------------RAVALIDATE ENDPOINTCALLED---------------------------")
      console.log("-------------------------------****--------------------------------")
      // this should be the actual path not a rewritten path
      // e.g. for "/blog/[slug]" this should be "/blog/post-1"
      await res.revalidate('/office')
      return res.json({ revalidated: true })
    } catch (err) {
        console.log(err)
      // If there was an error, Next.js will continue
      // to show the last successfully generated page
      return res.status(500).send('Error revalidating')
    }
  }