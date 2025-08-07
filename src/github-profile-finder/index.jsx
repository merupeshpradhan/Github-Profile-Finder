import { useEffect, useState } from "react";
import "./styles.css";

export default function GithubProfileFinder() {
  const [userName, setUserName] = useState("merupeshpradhan");

  async function fetchGithubUserData() {
     
  }

  function handleSubmit() {}

  useEffect(() => {
    fetchGithubUserData();
  });

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
    </div>
  );
}
