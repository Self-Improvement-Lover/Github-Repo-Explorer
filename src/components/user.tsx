import { useState } from "react";
import { Repositories } from "./repositories";
import "./user.css";

type UserProps = {
  username: string;
  profileUrl: string;
};
export function DisplayUser({ username, profileUrl }: UserProps) {
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");

  return (
    <div className="user-full-data">
      {error && <div className="error-message">{error}</div>}
      <div
        className="user-container"
        onClick={() => {
          setShow(!show);
        }}>
        <img className="user-img" src={profileUrl} alt="user" />
        <span className="userName">{username}</span>
      </div>
      <Repositories show={show} setShow={setShow} username={username} />
    </div>
  );
}
