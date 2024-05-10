import { GithubRepoProvider } from "../../providers/github-repo-provider";
const jRepos =
[
    {
      name: ".github",
      description: null,
      stars: 0,
      topics: [],
      updatedAt: "02/02/2024",
      forkCount: 0,
      htmlUrl: "https://github.com/j/.github",
    },
    {
      name: "dialogable.js",
      description:
        "For people who want the bootstrap modal look and feel... but better... oh and with built-in ajax support.",
      stars: 3,
      topics: [],
      updatedAt: "28/01/2023",
      forkCount: 1,
      htmlUrl: "https://github.com/j/dialogable.js",
    },
    {
      name: "docker-google-cloud-emulators",
      description:
        "Google cloud pubsub and datastore emulators hosted in docker",
      stars: 0,
      topics: [],
      updatedAt: "02/07/2021",
      forkCount: 0,
      htmlUrl: "https://github.com/j/docker-google-cloud-emulators",
    },
    {
      name: "fast-mapper",
      description: "A highly performant JIT & decorator based class mapper.",
      stars: 1,
      topics: [],
      updatedAt: "17/04/2022",
      forkCount: 0,
      htmlUrl: "https://github.com/j/fast-mapper",
    },
    {
      name: "federation-demo",
      description: "Demo of Apollo Federation",
      stars: 0,
      topics: [],
      updatedAt: "25/06/2019",
      forkCount: 0,
      htmlUrl: "https://github.com/j/federation-demo",
    },
    {
      name: "free-awsd",
      description: "Firmware & Hardware Joystick prototype",
      stars: 0,
      topics: [],
      updatedAt: "17/02/2023",
      forkCount: 0,
      htmlUrl: "https://github.com/j/free-awsd",
    },
    {
      name: "graphql",
      description:
        "GraphQL (TypeScript) module for Nest framework (node.js) 🍷",
      stars: 0,
      topics: [],
      updatedAt: "02/06/2020",
      forkCount: 0,
      htmlUrl: "https://github.com/j/graphql",
    },
    {
      name: "graphql-party",
      description: "A decorator based GraphQL schema builder.",
      stars: 6,
      topics: ["graphql", "graphql-schema"],
      updatedAt: "04/06/2020",
      forkCount: 0,
      htmlUrl: "https://github.com/j/graphql-party",
    },
    {
      name: "gson",
      description:
        "A Java serialization/deserialization library to convert Java Objects into JSON and back",
      stars: 0,
      topics: [],
      updatedAt: "20/12/2021",
      forkCount: 0,
      htmlUrl: "https://github.com/j/gson",
    },
    {
      name: "heroku-buildpack-vips",
      description: "Heroku buildpack with vips and pdf support via poppler",
      stars: 0,
      topics: [],
      updatedAt: "07/05/2024",
      forkCount: 0,
      htmlUrl: "https://github.com/j/heroku-buildpack-vips",
    },
    {
      name: "j.github.com",
      description: null,
      stars: 1,
      topics: [],
      updatedAt: "07/06/2021",
      forkCount: 0,
      htmlUrl: "https://github.com/j/j.github.com",
    },
    {
      name: "jest-environment-nock-axios",
      description:
        "Simple environment that disables all network connectivity via nock",
      stars: 0,
      topics: [],
      updatedAt: "19/12/2019",
      forkCount: 0,
      htmlUrl: "https://github.com/j/jest-environment-nock-axios",
    },
    {
      name: "jest-mongodb-rs",
      description: "Jest preset for MongoDB in-memory server",
      stars: 0,
      topics: [],
      updatedAt: "10/11/2020",
      forkCount: 0,
      htmlUrl: "https://github.com/j/jest-mongodb-rs",
    },
    {
      name: "jrdn.org",
      description: "jrdn.org",
      stars: 0,
      topics: [],
      updatedAt: "13/02/2023",
      forkCount: 0,
      htmlUrl: "https://github.com/j/jrdn.org",
    },
    {
      name: "js-bson",
      description: "BSON Parser for node and browser",
      stars: 0,
      topics: [],
      updatedAt: "26/05/2020",
      forkCount: 0,
      htmlUrl: "https://github.com/j/js-bson",
    },
    {
      name: "jwt-decode",
      description: "Decode JWT tokens; useful for browser applications.",
      stars: 0,
      topics: [],
      updatedAt: "18/03/2021",
      forkCount: 0,
      htmlUrl: "https://github.com/j/jwt-decode",
    },
    {
      name: "keyboard",
      description:
        "Hook and simulate global keyboard events on Windows and Linux.",
      stars: 0,
      topics: [],
      updatedAt: "21/08/2020",
      forkCount: 0,
      htmlUrl: "https://github.com/j/keyboard",
    },
    {
      name: "lambda-layer-headless-chromium",
      description:
        "AWS Lambda Layer for headless chromium with extra CJK font support",
      stars: 0,
      topics: [],
      updatedAt: "20/12/2019",
      forkCount: 0,
      htmlUrl: "https://github.com/j/lambda-layer-headless-chromium",
    },
    {
      name: "Lunaphase",
      description: "A very simple moon calendar built using D3",
      stars: 0,
      topics: [],
      updatedAt: "26/08/2020",
      forkCount: 0,
      htmlUrl: "https://github.com/j/Lunaphase",
    },
    {
      name: "marshal.ts",
      description:
        "Marshal.ts the fastest universal TypeScript serializer and validator with JIT engine for frontend, backend, http-transport, RPC, and database, with built-in validations, NestJS support, and MongoDB ORM/Query builder, for Browser/NodeJS. The better and up to 300x faster alternative to class-transformer",
      stars: 0,
      topics: [],
      updatedAt: "14/09/2020",
      forkCount: 0,
      htmlUrl: "https://github.com/j/marshal.ts",
    },
    {
      name: "mongoose",
      description: "Mongoose module for Nest framework (node.js) 🍸",
      stars: 0,
      topics: [],
      updatedAt: "09/12/2020",
      forkCount: 0,
      htmlUrl: "https://github.com/j/mongoose",
    },
    {
      name: "nestjs-issue-7582",
      description: "Show incorrect module initialization order",
      stars: 0,
      topics: [],
      updatedAt: "16/07/2021",
      forkCount: 0,
      htmlUrl: "https://github.com/j/nestjs-issue-7582",
    },
    {
      name: "nestjs-mercurius",
      description: "NestJs module to use Mercurius as GraphQL server",
      stars: 0,
      topics: [],
      updatedAt: "03/08/2021",
      forkCount: 0,
      htmlUrl: "https://github.com/j/nestjs-mercurius",
    },
    {
      name: "nestjs-middleware-bug",
      description: null,
      stars: 0,
      topics: [],
      updatedAt: "15/07/2021",
      forkCount: 0,
      htmlUrl: "https://github.com/j/nestjs-middleware-bug",
    },
    {
      name: "nestjs-type-clean",
      description: null,
      stars: 0,
      topics: [],
      updatedAt: "26/01/2021",
      forkCount: 0,
      htmlUrl: "https://github.com/j/nestjs-type-clean",
    },
    {
      name: "nestjs-type-events",
      description: "A type-events module for nest.js",
      stars: 0,
      topics: [],
      updatedAt: "26/01/2021",
      forkCount: 0,
      htmlUrl: "https://github.com/j/nestjs-type-events",
    },
    {
      name: "nestjs-type-mongodb",
      description: "A type-mongodb module for Nest.js",
      stars: 3,
      topics: [],
      updatedAt: "02/04/2023",
      forkCount: 1,
      htmlUrl: "https://github.com/j/nestjs-type-mongodb",
    },
    {
      name: "nextjs-tailwindcss-typescript-starter",
      description: "NextJS, TailwindCSS and Typescript starter template",
      stars: 0,
      topics: [],
      updatedAt: "29/12/2020",
      forkCount: 0,
      htmlUrl: "https://github.com/j/nextjs-tailwindcss-typescript-starter",
    },
    {
      name: "node-mongodb-native",
      description: "The Official MongoDB Node.js Driver",
      stars: 0,
      topics: [],
      updatedAt: "19/05/2021",
      forkCount: 0,
      htmlUrl: "https://github.com/j/node-mongodb-native",
    },
    {
      name: "prettier-plugin-tailwindcss",
      description:
        "A Prettier plugin for Tailwind CSS that automatically sorts classes based on our recommended class order.",
      stars: 0,
      topics: [],
      updatedAt: "09/02/2023",
      forkCount: 0,
      htmlUrl: "https://github.com/j/prettier-plugin-tailwindcss",
    }
  ];
describe.skip("github repo provider", () => {
  let repoProvider: GithubRepoProvider;

  beforeEach(async () => {
    repoProvider = new GithubRepoProvider();

    await new Promise((r) => setTimeout(r, 3000));
  });

  test("should return valid results when valid inputs are entered", async () => {
    // Question: What should I do in this case, if a person updates their repos, this test would be wrong
    const repos = await repoProvider.getRepositoriesData(
      "self-improvement-lover"
    );
    expect(repos).toStrictEqual([
      {
        name: "Calculator-Web-page-",
        description: null,
        stars: 0,
        topics: [],
        updatedAt: "26/06/2023",
        forkCount: 0,
        htmlUrl:
          "https://github.com/Self-Improvement-Lover/Calculator-Web-page-",
      },
      {
        name: "css_mm_4e",
        description: null,
        stars: 0,
        topics: [],
        updatedAt: "04/09/2023",
        forkCount: 0,
        htmlUrl: "https://github.com/Self-Improvement-Lover/css_mm_4e",
      },
      {
        name: "Fiancial-Tracker",
        description:
          "This is a simple Front-End application that a person could use to track thier income, expenses and overall balance.",
        stars: 0,
        topics: [],
        updatedAt: "29/12/2023",
        forkCount: 0,
        htmlUrl: "https://github.com/Self-Improvement-Lover/Fiancial-Tracker",
      },
      {
        name: "Github-Repo-Explorer",
        description: null,
        stars: 0,
        topics: [],
        updatedAt: "09/05/2024",
        forkCount: 0,
        htmlUrl:
          "https://github.com/Self-Improvement-Lover/Github-Repo-Explorer",
      },
      {
        name: "React-Shopping-Cart",
        description:
          "This is a simple Front-End application that a person could use to choose to buy some static listed products, buy it with however much quantity, and the price for all their products would be shown. ",
        stars: 0,
        topics: [],
        updatedAt: "05/01/2024",
        forkCount: 0,
        htmlUrl:
          "https://github.com/Self-Improvement-Lover/React-Shopping-Cart",
      },
      {
        name: "Weather-App-",
        description: null,
        stars: 0,
        topics: [],
        updatedAt: "12/03/2024",
        forkCount: 0,
        htmlUrl: "https://github.com/Self-Improvement-Lover/Weather-App-",
      },
    ]);
  });

  test("should return no results when invalid inputs are entered", async () => {
    const repos = await repoProvider.getRepositoriesData("vhyu0f--8t67-h");
    expect(repos).toStrictEqual([]);
  });

  test("should return no results when nothing is inputted", async () => {
    const repos = await repoProvider.getRepositoriesData("");
    expect(repos).toStrictEqual([]);
  });

    test("should return results when one letter is inputted", async () => {
      const repos = await repoProvider.getRepositoriesData("j");
      expect(repos).toStrictEqual(jRepos);
    });
});
