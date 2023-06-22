import axios from "axios";

export default function handler(req, res) {
  // Get data submitted in request's body.
  const body = req.body;

  // Optional logging to see the responses
  // in the command line where next.js app is running.
  //   console.log("body: ", body);
  console.log(1);
  callApi(body)
    .then((response) => {
      console.log(response);
      console.log(2);
      res.json({ data: `User added` });
    })
    .catch((err) => {
      console.log("Error from backend" + err);
      res.json({ data: `We got some errors` });
    });
  console.log(3);
  // Guard clause checks for first and last name,
  // and returns early if they are not found
  // Found the name.
}

const callApi = async (details) => {
  const data = {
    firstName: details.firstname,
    lastName: details.lastname,
    userName: details.username,
    email: details.email,
    password: details.password,
    passwordConfirm: details.confirmpassword,
  };
  console.log(data);
  const JSONdata = JSON.stringify(data);
  //   const endpoint =
  //     "https://seal-app-lskga.ondigitalocean.app/nodeproject/api/v1/users/signup";
  const endpoint = "http://localhost:8000/api/v1/users/signup";
  let response;
  try {
    response = await axios.post(endpoint, data, {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });

    return response;
  } catch (err) {
    console.log("error in API function" + err);
    return err;
  }
};
