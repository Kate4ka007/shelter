interface ILoader {
  baseLink: string;
  options: { apiKey: string };
}

interface Options {
  [key: string]: string;
}

export { ILoader, Options };