import Head from 'next/head'
import {signIn} from "next-auth/react"

const About = () => {
  return (
    <>
      <Head>
        <title>Ninja List | About</title>
        <meta name="keywords" content="ninjas"/>
      </Head>
      <div className="section-margin">
        <h1>About</h1>
        <p>Just a CRUD Nextjs APP</p>
        <button onClick={() => signIn()}>Login</button>
      </div>
    </>
  );
}
 
export default About;