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

type callbackData = (data?: SoursesDataInt) => void;
type CallbackType<T> = (data?: T) => void;

export {NewsItemInt, SourcesItemInt, NewsDataInt, SoursesDataInt, Options, callbackData, CallbackType};
