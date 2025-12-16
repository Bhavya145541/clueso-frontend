import { useEffect, useState } from "react";
import axios from "axios";

function Dashboard({ onLogout }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token");

      const res = await axios.get(
        "http://localhost:5000/api/auth/me",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setUser(res.data);
    };

    fetchUser();
  }, []);

  return (
    <div>
      <h1>Clueso Clone</h1>
      <h2>Welcome to Dashboard</h2>

      {user ? (
        <p>Email: {user.email}</p>
      ) : (
        <p>Loading user...</p>
      )}

      <button onClick={onLogout}>Logout</button>
    </div>
  );
}

export default Dashboard;
