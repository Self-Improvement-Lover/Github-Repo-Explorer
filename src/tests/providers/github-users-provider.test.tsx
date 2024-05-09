import { GithubUsersProvider } from "../../providers/github-users-provider";

describe.skip("github user provider API ",  () => {
  let provider: GithubUsersProvider;
  beforeEach(async () => {
   // why should I make a new instance for each test case in here? 
     provider = new GithubUsersProvider();
  // added this due to API rate limit per second
     await new Promise((r) =>  setTimeout(r, 2000))
  })

  it("should return relevant results when valid text is provided", async () => {
    const users = await provider.getUsers("self-improvement-lover");


    expect(users).toStrictEqual([
      {
        username: "Self-Improvement-Lover",
        profileUrl: "https://avatars.githubusercontent.com/u/137676834?v=4",
      },
    ]);
  });

  it("should return nothing  when gibberish/invalid text is provided", async () => {
    const users = await provider.getUsers(
      "vgmggfmmfghmpmr[enbarea=opgdfogd=ohonaa=mdogkomrnhinnzng"
    );
    expect(users).toStrictEqual([]);
  });

  
  it("should return multiple users when input contains a part of a name", async () => {
    const users = await provider.getUsers("john");
    console.log(users)
    expect(users).toStrictEqual(johnUsernames);
  })

});
/*
should return nothing when giiiberish is providered
should return soemthing when vlid text procvided
should return nothing if invalid text is proided 

*/
const johnUsernames =
  [
    {
      username: "john",
      profileUrl: "https://avatars.githubusercontent.com/u/1668?v=4",
    },
    {
      username: "john-smilga",
      profileUrl: "https://avatars.githubusercontent.com/u/42133389?v=4",
    },
    {
      username: "johnpapa",
      profileUrl: "https://avatars.githubusercontent.com/u/1202528?v=4",
    },
    {
      username: "johngrib",
      profileUrl: "https://avatars.githubusercontent.com/u/1855714?v=4",
    },
    {
      username: "JohnHammond",
      profileUrl: "https://avatars.githubusercontent.com/u/6288722?v=4",
    },
    {
      username: "johndpope",
      profileUrl: "https://avatars.githubusercontent.com/u/289994?v=4",
    },
    {
      username: "JohnMwendwa",
      profileUrl: "https://avatars.githubusercontent.com/u/72663882?v=4",
    },
    {
      username: "JohnSundell",
      profileUrl: "https://avatars.githubusercontent.com/u/2466701?v=4",
    },
    {
      username: "jeresig",
      profileUrl: "https://avatars.githubusercontent.com/u/1615?v=4",
    },
    {
      username: "johnlindquist",
      profileUrl: "https://avatars.githubusercontent.com/u/36073?v=4",
    },
    {
      username: "johnmyleswhite",
      profileUrl: "https://avatars.githubusercontent.com/u/22064?v=4",
    },
    {
      username: "jwasham",
      profileUrl: "https://avatars.githubusercontent.com/u/3771963?v=4",
    },
    {
      username: "johno",
      profileUrl: "https://avatars.githubusercontent.com/u/1424573?v=4",
    },
    {
      username: "springframeworkguru",
      profileUrl: "https://avatars.githubusercontent.com/u/10575098?v=4",
    },
    {
      username: "johnBuffer",
      profileUrl: "https://avatars.githubusercontent.com/u/9960400?v=4",
    },
    {
      username: "yaoyao-liu",
      profileUrl: "https://avatars.githubusercontent.com/u/20499376?v=4",
    },
    {
      username: "JohnTitor",
      profileUrl: "https://avatars.githubusercontent.com/u/25030997?v=4",
    },
    {
      username: "jhnwr",
      profileUrl: "https://avatars.githubusercontent.com/u/50677710?v=4",
    },
    {
      username: "johnafish",
      profileUrl: "https://avatars.githubusercontent.com/u/1160599?v=4",
    },
    {
      username: "topjohnwu",
      profileUrl: "https://avatars.githubusercontent.com/u/7337301?v=4",
    },
    {
      username: "johnlui",
      profileUrl: "https://avatars.githubusercontent.com/u/2127912?v=4",
    },
    {
      username: "fjh658",
      profileUrl: "https://avatars.githubusercontent.com/u/5550316?v=4",
    },
    {
      username: "jhawthorn",
      profileUrl: "https://avatars.githubusercontent.com/u/131752?v=4",
    },
    {
      username: "jdegoes",
      profileUrl: "https://avatars.githubusercontent.com/u/156745?v=4",
    },
    {
      username: "johnno1962",
      profileUrl: "https://avatars.githubusercontent.com/u/1786033?v=4",
    },
    {
      username: "wetw0rk",
      profileUrl: "https://avatars.githubusercontent.com/u/20763546?v=4",
    },
    {
      username: "Lin20",
      profileUrl: "https://avatars.githubusercontent.com/u/6455971?v=4",
    },
    {
      username: "JohnCoene",
      profileUrl: "https://avatars.githubusercontent.com/u/7833796?v=4",
    },
    {
      username: "johnsoncodehk",
      profileUrl: "https://avatars.githubusercontent.com/u/16279759?v=4",
    },
    {
      username: "johnkil",
      profileUrl: "https://avatars.githubusercontent.com/u/926129?v=4",
    }
  ];

