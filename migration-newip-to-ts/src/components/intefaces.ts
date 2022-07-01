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

export {NewsItemInt, SourcesItemInt, NewsDataInt, SoursesDataInt};
