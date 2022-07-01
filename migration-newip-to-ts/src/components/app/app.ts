import AppController from '../controller/controller';
import { NewsDataInt, SoursesDataInt } from '../intefaces';
import { AppView } from '../view/appView';

class App {
  controller: AppController;
  view: AppView;
  constructor() {
    this.controller = new AppController();
    this.view = new AppView();
  }

  start(): void {
    const sources = document.querySelector('.sources') as HTMLElement;
    sources.addEventListener('click', (e: Event) =>
      this.controller.getNews(e, (data) => this.view.drawNews(data as NewsDataInt))
    );
    this.controller.getSources((data) => this.view.drawSources(data as SoursesDataInt));
  }
}

export default App;
