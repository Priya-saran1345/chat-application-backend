import { config as dotenvConfig } from "dotenv";
dotenvConfig();

  const _config={
    port: process.env.PORT||3001,
}

export const config = Object.freeze(_config);
