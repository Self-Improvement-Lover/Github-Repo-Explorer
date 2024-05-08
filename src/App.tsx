import React, { useEffect, useState } from "react";

import "./App.css";
import { DisplayUser } from "./components/user";
import { GithubDataProvider } from "./providers/github-data-provider";
import { User } from "./providers/data-provider";

function App() {
  const githubProvider = new GithubDataProvider();
  const [queryUser, setQueryUser] = useState("");
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");

  async function onUserSearch(username: string) {
    try {
      const users = await githubProvider.getUsers(username);
      setUsers(users);
    } catch (e) {
      setUsers([]);
      setError(
        "There was an error retrieving the data: " + (e as Error).message
      );
    }
  }

  function onSearch() {
    const timeoutId = setTimeout(() => {
      if (queryUser !== "") {
        onUserSearch(queryUser);
      }
    }, 500);

    return () => clearTimeout(timeoutId);
  }

  return (
    <div className="app">
      {error && <div className="error-message">{error}</div>}
      {!error && (
        <div className="app-content">
          <h1>Github Repository Explorer</h1>
          <div className="input-container">
            <input
              type="text"
              placeholder="Enter a username..."
              value={queryUser}
              onChange={(e) => setQueryUser(e.target.value)}
            />
            <button onClick={() => onSearch()}>Search</button>
          </div>

          <main className="user-main">
            {users.map((user) => {
              return (
                <DisplayUser
                  username={user.username}
                  profileUrl={user.profileUrl}
                />
              );
            })}
          </main>
        </div>
      )}
    </div>
  );
}

export default App;
