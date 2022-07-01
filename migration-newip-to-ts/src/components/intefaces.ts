export default interface NewsItemInt {
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


export default interface SourcesItemInt {
  id: string;
  name: string;
  description: string;
  url: string;
  category: string;
  language: string;
  country: string;
}

//export default NewsItemInt;
