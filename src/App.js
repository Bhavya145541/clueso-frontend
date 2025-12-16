import { useState } from "react";
import { login } from "./services/authservice";
import Dashboard from "./components/Dashboard";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = async () => {
    const res = await login("bhavya@gmail.com", "123456");

    if (res?.token) {
      localStorage.setItem("token", res.token);
      setLoggedIn(true);
    } else {
      alert("Login failed");
    }
  };
const token = localStorage.getItem("token");

 return (
  <div>
    <h1>Clueso Clone</h1>

    {loggedIn || token ? (
      <Dashboard />
    ) : (
      <button onClick={handleLogin}>Login</button>
    )}
  </div>
);

}

export default App;
