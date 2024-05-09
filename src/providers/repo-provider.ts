export abstract class RepoProvider {
  abstract getRepositoriesData(
    username: string
  ): Promise<RepositoryData[] | null>;
}

export type RepositoryData = {
  name: string;
  description: string;
  stars: number;
  topics: string[];
  updatedAt: string;
  forkCount: number;
  htmlUrl: string;
};
