interface Config {
  [key: string]: any;
}

export const config: Config = {
  links: {
    branch: "https://branch.gg",
    twitter: "https://twitter.com/charlesvien",
    linkedin: "https://www.linkedin.com/in/charlesvien/",
    github: "https://github.com/charlesvien",
    wallet: "https://unstoppabledomains.com/d/charlesvien.wallet",
    ipfs: "https://ipfs.io/",
  },

  discord: "Charles#0039",

  version: process.env.REACT_APP_VERSION,

  env: process.env.REACT_APP_ENV,
};
