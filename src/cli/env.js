const parseEnv = () => {
  const env = process.env;

  const rssKeys = Object.keys(env).filter((key) => key.startsWith("RSS_"));
  const result = rssKeys.map((key) => `${key}=${env[key]}`);

  console.log(result.join("; "));
};

parseEnv();
