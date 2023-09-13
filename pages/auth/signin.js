import { useState } from "react";
import { signIn } from "next-auth/react";

const SignIn = (props) => {
  const [userinfo, setUserinfo] = useState({ email: "", password: "" });
  const handleSubmit = async (e) => {
    console.log(e.preventDefault());
    const res = await signIn("credentials", {
      email: userinfo.email,
      password: userinfo.password,
      redirect: false,
    });
    console.log(res);
  };
  return (
    <div>
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <label>
          <span>Email:</span>
          <input
            required
            type="email"
            onChange={(e) =>
              setUserinfo({ ...userinfo, email: e.target.value })
            }
          />
        </label>
        <label>
          <span>Password:</span>
          <input
            required
            type="password"
            onChange={(e) =>
              setUserinfo({ ...userinfo, password: e.target.value })
            }
          />
        </label>
        <button className="btn">Login</button>
      </form>
    </div>
  );
};
export default SignIn;
