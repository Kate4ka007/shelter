import AppController from './controller/controller';
import AppView from './view/appView';

interface NewsItemInt {
  source: {
    id: string;
    name: string;
  };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}
interface SourcesItemInt {
  id: string;
  name: string;
  description: string;
  url: string;
  category: string;
  language: string;
  country: string;
}

interface NewsDataInt {
  status: string;
  totalResults: number;
  articles: NewsItemInt[];
}

interface SoursesDataInt {
  status?: string;
  sources: SourcesItemInt[];
}

interface Options {
  [key: string]: string;
}

type CallbackData = (data?: SoursesDataInt) => void;

type CallbackType<T> = (data?: T) => void;

type getRespArg = {
  endpoint?: string;
  options: Options;
};
interface ILoader {
  baseLink: string;
  options: { apiKey: string };
  // getResp(arg: Required<getRespArg>, callback: () => void): void;
  // errorHandler(arg: Response): Response;
  // makeUrl(options: Options, endpoint: string): string;
  // load(method: string, endpoint: string, callback: CallbackData, options: Options): void;
}

interface AppControllerInt {
  getSources(callback: CallbackData): void;
  getNews(e: Event, callback: CallbackType<NewsDataInt>): void;
}

interface INews {
  draw(data: NewsItemInt[]): void;
}

interface IApp {
  controller: AppController;
  view: AppView;
  start(): void;
}

interface ISources {
  draw(data: SourcesItemInt[]): void;
}

export {
  NewsItemInt,
  SourcesItemInt,
  NewsDataInt,
  SoursesDataInt,
  Options,
  CallbackData,
  CallbackType,
  ILoader,
  getRespArg,
  AppControllerInt,
  INews,
  IApp,
  ISources,
};
