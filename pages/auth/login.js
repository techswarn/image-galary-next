
export default function Login() {
const handleSubmit = (e) => {
console.log(e.preventDefault())
}
  return (
    <div>
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <label>
          <span>Email:</span>
          <input
            required
            type="email"
          />
        </label>
        <label>
          <span>Password:</span>
          <input
            required
            type="password"
          />
        </label>
        <button className="btn">Login</button>
      </form>
    </div>
  );
}