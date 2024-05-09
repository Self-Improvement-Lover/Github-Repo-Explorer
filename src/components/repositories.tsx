import React, { useEffect, useState } from "react";
import { FaRegStar } from "react-icons/fa";
import { GoRepoForked } from "react-icons/go";
import { GithubUsersProvider } from "../providers/github-users-provider";
import { GithubRepoProvider } from "../providers/github-repo-provider";
import { DataProviderError } from "../providers/data-provider-error";
import { RepositoryData } from "../providers/repo-provider";
import "./repositories.css";

type RepositoriesProps = {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  username: string;
};
export function Repositories({ show, setShow, username }: RepositoriesProps) {
  const [reposData, setReposData] = useState<RepositoryData[]>([]);
  const [error, setError] = useState("");
  const githubRepoProvider = new GithubRepoProvider();
  const reposImportantData = [];

  useEffect(() => {
    fetchData(username);
  }, []);

  useEffect(() => {
    setShow(false);
    fetchData(username);
  }, [username]);

  async function fetchData(username: string) {
    try {
      const repositoriesData = await githubRepoProvider.getRepositoriesData(
        username
      );
      setReposData(repositoriesData);
    } catch (error) {
      if (error instanceof DataProviderError) {
        setError(error.message);
      } else {
        setError("An error occurred:" + (error as Error).message);
      }
      setReposData([]);
    }
  }

  return (
    <div className="repositories">
      {show &&
        reposData.map((repo, index) => (
          <div key={index} className="repository">
            <div className="repo-top-half-container">
              <div className="repo-name-and-description">
                <a
                  href={repo.htmlUrl}
                  target="_blank"
                  rel="noopener noreferrer">
                  <h3 className="repo-name">{repo.name}</h3>
                </a>
                {repo.description && (
                  <p className="repo-description">
                    {repo.description.split(" ").length > 6
                      ? repo.description.split(" ").slice(0, 6).join(" ") +
                        "..."
                      : repo.description}
                  </p>
                )}
                {!repo.description && (
                  <p className="repo-description">No description available.</p>
                )}
              </div>
              <p className="repo-stars">
                Stars:
                <span>
                  <FaRegStar /> {repo?.stars}
                </span>
              </p>
            </div>
            <div className="repo-second-half-container">
              <p className="repo-topics">
                {repo.topics.length >= 1 ? repo.topics.join(", ") : "No Topics"}
              </p>
              <p className="fork-count">
                <GoRepoForked /> {repo.forkCount}
              </p>
              <p className="repo-last-updated">Updated: {repo.updatedAt}</p>
            </div>
          </div>
        ))}

      {error && <div className="error-message">{error}</div>}
    </div>
  );
}
