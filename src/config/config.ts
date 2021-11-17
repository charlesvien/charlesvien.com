interface Config {
  [key: string]: any;
}

export const config: Config = {
  links: {
    branch: "https://branch.gg",
    twitter: "https://twitter.com/charlesvien",
    linkedin: "https://www.linkedin.com/in/charlesvien/",
    github: "https://github.com/charlesvien",
    blog: "https://charlesvien.com/blog",
    ipfs: "https://www.ipfs.com/",
  },

  discord: "Charles#0039",

  version: process.env.REACT_APP_VERSION,

  env: process.env.REACT_APP_ENV,
};
