import { NewsDataInt, SoursesDataInt } from '../intefaces';
import News from './news/news';
import Sources from './sources/sources';

export class AppView {
  public news: News;
  public sources: Sources;
  constructor() {
    this.news = new News();
    this.sources = new Sources();
  }

  drawNews(data: NewsDataInt): void {
    const values = data?.articles ? data?.articles : [];
    this.news.draw(values);
  }

  drawSources(data: Pick<SoursesDataInt, 'sources' | 'status'>): void {
    const values = data?.sources ? data?.sources : [];
    this.sources.draw(values);
  }
}

export default AppView;
