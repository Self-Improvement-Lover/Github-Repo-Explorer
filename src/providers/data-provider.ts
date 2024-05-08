export abstract class DataProvider {
  abstract getUsers(username: string): Promise<User[] | null>;
  abstract getRepositoriesData(
    username: string
  ): Promise<RepositoryData[] | null>;
}

export type User = {
  username: string;
  profileUrl: string;
};

export type RepositoryData = {
  name: string;
  description: string;
  stars: number;
  topics: string[];
  updatedAt: string;
  forkCount: number;
  htmlUrl: string;
};
