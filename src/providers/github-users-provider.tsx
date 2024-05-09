import { UsersProvider, User } from "./users-provider";
import { DataProviderError } from "./data-provider-error";
const githubToken = process.env.REACT_APP_GITHUB_TOKEN;
console.log(githubToken);
export class GithubUsersProvider extends UsersProvider {
async getUsers(username: string): Promise<User[]> {
    const response = await fetch(
      "https://api.github.com/search/users?q=" + username
    );
console.log(response)
    if (!response.ok) {
      throw new DataProviderError(
        "GET",
        response.url,
        response.status,

        await response.text()
      );
    }
    const body = await response.json();
    if (body.length === 0) {
      throw new Error("Their wasn't anybody with that username");
    }
    console.log(body.items);
    const userData = body.items.map((user: GithubUser) => ({
      username: user.login,
      profileUrl: user.avatar_url,
    }));
    return userData;
  }
 
}

interface GithubUser {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
  score: number;
}
