import Head from "next/head";
import { useState } from "react";
import axios from "axios";

const Adduser = () => {
  const [user, setUser] = useState({
    firstname: null,
    lastname: null,
    username: null,
    email: null,
    password: null,
    confirmpassword: null,
    phonenumber: null,
  });
  const handleSumit = async (e) => {
    e.preventDefault();
    const data = {
      firstName: e.target.firstname.value,
      lastName: e.target.lastname.value,
      userName: e.target.username.value,
      email: e.target.email.value,
      password: e.target.password.value,
      passwordConfirm: e.target.confirmpassword.value,
      phonenumber: e.target.phonenumber.value,
    };
    console.log(data);
    const JSONdata = JSON.stringify(data);
    const endpoint =
      "https://seal-app-lskga.ondigitalocean.app/nodeproject/api/v1/users/signup";

    // Form the request for sending data to the server.
    const options = {
      // Tell the server we're sending JSON.
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    };

    // Send the form data to our forms API on Vercel and get a response.
    //    const response = await fetch(endpoint, options);
    const response = await axios.post(endpoint, options);
    console.log(response);

    // Get the response data from server as JSON.
    // If server returns the name submitted, that means the form works.
    const result = await response.json();
    console.log(result);
  };

  return (
    <>
      <Head>
        <title>Add users</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div className="section-margin">
        <h1>Add contacts</h1>
        <form className="section-margin contact-form" onSubmit={handleSumit}>
          <div className="contact-form-name">
            <label htmlFor="name">First Name: </label>
            <input type="text" id="firstname" name="firstname" />
          </div>
          <div className="contact-form-name">
            <label htmlFor="name">Last name: </label>
            <input type="text" id="lastname" name="lastname" />
          </div>
          <div className="contact-form-name">
            <label htmlFor="name">Username: </label>
            <input type="text" id="username" name="username" />
          </div>
          <div className="contact-form-name">
            <label htmlFor="name">Email: </label>
            <input type="email" id="email" name="email" />
          </div>
          <div className="contact-form-name">
            <label htmlFor="name">Password: </label>
            <input type="password" id="password" name="password" />
          </div>
          <div className="contact-form-name">
            <label htmlFor="name">Comfirm Password: </label>
            <input
              type="password"
              id="confirmpassword"
              name="confirmpassword"
            />
          </div>
          <div className="contact-form-phone">
            <label htmlFor="phone_numbder">Phone Number:</label>
            <input type="text" id="phonenumber" name="phonenumber" />
          </div>
          <div className="contact-form-button">
            <button className="btn" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Adduser;
