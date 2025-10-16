import { useState } from "react";
import { useOutletContext } from "react-router-dom";

function Login() {
  const login = useOutletContext();  // Receives the login function from App's Outlet context
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  // On submit, call login() which updates state and triggers navigation
  function handleLogin(e) {
    e.preventDefault();
    login();
  }

  return (
    <form onSubmit={handleLogin}>
      <label htmlFor="username">Username</label>  {/* Fixed: Use htmlFor */}
      <div>
        <input
          id="username"
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
      </div>
      <label htmlFor="password">Password</label>  {/* Fixed: Use htmlFor */}
      <div>
        <input
          id="password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;