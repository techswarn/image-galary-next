import Head from 'next/head'

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
      </div>
    </>
  );
}
 
export default About;