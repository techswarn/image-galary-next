import Head from "next/head";
import Image from "next/image";
import { signIn } from "next-auth/react";
import sampleimage from "./../public/images/sample.jpg";
const About = () => {
  return (
    <>
      <Head>
        <title>Ninja List | About</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div className="section-margin">
        <h1>About</h1>
        <p>Just a CRUD Nextjs APP</p>
        <Image
          src={sampleimage}
          width={500}
          height={500}
          alt="Picture of the author"
        />
        <button onClick={() => signIn()}>Login</button>
      </div>
    </>
  );
};

export default About;
