import Head from 'next/head'

const About = () => {
  return (
    <>
      <Head>
        <title>Ninja List | Add users</title>
        <meta name="keywords" content="ninjas"/>
      </Head>
      <div className="section-margin">
        <h1>Add contacts</h1>
            <form className="section-margin contact-form" action="/api/form" method="post">
                <div className='contact-form-name'>
                    <label for="name">Contact Name: </label>
                    <input type="text" id="first" name="name" />
                </div>
                <div className="contact-form-phone">
                    <label for="phone_numbder">Phone Number:</label>
                    <input type="text" id="last" name="phonenumber" />
                </div>
                <div className="contact-form-button">
                    <button className="btn" type="submit">Submit</button>
                </div>
            </form>
      </div>
    </>
  );
}
 
export default About;