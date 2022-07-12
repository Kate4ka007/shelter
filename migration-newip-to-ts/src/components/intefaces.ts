import { NewsItemInt } from './view/news/newsInt';

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

type CallbackData = (data?: SoursesDataInt) => void; 

export { 
  SourcesItemInt,
  NewsDataInt,
  SoursesDataInt,
  CallbackData
};
