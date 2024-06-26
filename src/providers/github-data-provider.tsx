import { DataProvider, User, RepositoryData } from "./data-provider";
import { DataProviderError } from "./data-provider-error";
const githubToken = process.env.REACT_APP_GITHUB_TOKEN;
console.log(githubToken);
export class GithubDataProvider extends DataProvider {
  async getUsers(username: string): Promise<User[]> {
    const response = await fetch(
      "https://api.github.com/search/users?q=" + username
    );

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
 console.log(body.items)
    const userData = body.items.map((user: GithubUser) => ({
      username: user.login,
      profileUrl: user.avatar_url,
    }));
    return userData;
  }
  async getRepositoriesData(username: string) {
    const reposImportantData: RepositoryData[] = [];
    const response = await fetch(
      `https://api.github.com/users/${username}/repos`,
      {
        headers: {
          Authorization: `Bearer ${githubToken}`,
        },
      }
    );
    if (!response.ok) {
      throw new DataProviderError(
        "GET",
        response.url,
        response.status,
        response.body
      );
    }

    const body = await response.json();
    // get rid of github repo
    // get rid of extra folder
    // find the correct types for the currently missing
    // write tests
    console.log(body);
    body.forEach((repo: GithubRepo) => {
      const repoData = {
        name: repo.name,
        description: repo.description,
        stars: repo.stargazers_count,
        topics: repo.topics,
        updatedAt: new Date(repo.updated_at).toLocaleDateString(),
        forkCount: repo.forks_count,
        htmlUrl: repo.html_url,
      };
      reposImportantData.push(repoData);
    });
    return reposImportantData;
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
interface GithubRepo {
  id: number;
  node_id: string;
  name: string;
  full_name: string;
  private: boolean;
  owner: Owner;
  html_url: string;
  description: string;
  fork: boolean;
  url: string;
  forks_url: string;
  keys_url: string;
  collaborators_url: string;
  teams_url: string;
  hooks_url: string;
  issue_events_url: string;
  events_url: string;
  assignees_url: string;
  branches_url: string;
  tags_url: string;
  blobs_url: string;
  git_tags_url: string;
  git_refs_url: string;
  trees_url: string;
  statuses_url: string;
  languages_url: string;
  stargazers_url: string;
  contributors_url: string;
  subscribers_url: string;
  subscription_url: string;
  commits_url: string;
  git_commits_url: string;
  comments_url: string;
  issue_comment_url: string;
  contents_url: string;
  compare_url: string;
  merges_url: string;
  archive_url: string;
  downloads_url: string;
  issues_url: string;
  pulls_url: string;
  milestones_url: string;
  notifications_url: string;
  labels_url: string;
  releases_url: string;
  deployments_url: string;
  created_at: string;
  updated_at: string;
  pushed_at: string;
  git_url: string;
  ssh_url: string;
  clone_url: string;
  svn_url: string;
  homepage: string;
  size: number;
  stargazers_count: number;
  watchers_count: number;
  language: string;
  has_issues: boolean;
  has_projects: boolean;
  has_downloads: boolean;
  has_wiki: boolean;
  has_pages: boolean;
  has_discussions: boolean;
  forks_count: number;
  mirror_url: any;
  archived: boolean;
  disabled: boolean;
  open_issues_count: number;
  license: License;
  allow_forking: boolean;
  is_template: boolean;
  web_commit_signoff_required: boolean;
  topics: any[];
  visibility: string;
  forks: number;
  open_issues: number;
  watchers: number;
  default_branch: string;
  permissions: Permissions;
}
interface Owner {
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
}
interface License {
  key: string;
  name: string;
  spdx_id: string;
  url: string;
  node_id: string;
}
interface Permissions {
  admin: boolean;
  maintain: boolean;
  push: boolean;
  triage: boolean;
  pull: boolean;
}
