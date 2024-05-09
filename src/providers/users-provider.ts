export abstract class UsersProvider {
  abstract getUsers(username: string): Promise<User[] | null>;
}

export type User = {
  username: string;
  profileUrl: string;
};

