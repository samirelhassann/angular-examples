import { secrets } from "./secrets";

export const environment = {
  production: false,

  github: {
    host: "https://api.github.com",
    token: secrets.API_TOKEN,
  },
};
