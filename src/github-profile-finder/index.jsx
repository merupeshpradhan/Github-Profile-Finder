import { useEffect, useState } from "react";
import "./styles.css";
import User from "./card";

export default function GithubProfileFinder() {
  const [userName, setUserName] = useState("merupeshpradhan");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  async function fetchGithubUserData() {
    setLoading(true);
    const res = await fetch(`https://api.github.com/users/${userName}`);

    const data = await res.json();
    if (data) {
      setUserData(data);
      setLoading(false);
    }

    console.log(data);
  }

  function handleSubmit() {}

  useEffect(() => {
    fetchGithubUserData();
  }, []);

  if (loading) {
    return (
      <h1
        style={{
          height: "100vh",
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Loading data ! Please wait
      </h1>
    );
  }

  return (
    <div className="github-profile-container">
      <div className="input-wrapper">
        <input
          name="search-by-username"
          type="text"
          value={userName}
          placeholder="Search Github Username..."
          onChange={(event) => setUserName(event.target.value)}
        />
        <button onClick={handleSubmit}>Search</button>
      </div>
      {userData !== null ? <User user={userData} /> : null}
    </div>
  );
}
