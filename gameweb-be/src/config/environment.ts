if (process.argv.includes("--dev")) process.loadEnvFile();

const env_variables = {
  PORT: process.env.PORT || 3000,
  MONGO_URI: process.env.MONGO_URI,
};

if (!env_variables.MONGO_URI) {
  throw Error("MONGO_URI environment variable is required");
}

export { env_variables };
