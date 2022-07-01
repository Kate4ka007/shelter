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

  start() {
    document
      .querySelector('.sources')
      .addEventListener('click', (e: Event) =>
        this.controller.getNews(e, (data: NewsDataInt) => this.view.drawNews(data))
      );
    this.controller.getSources((data: SoursesDataInt) => this.view.drawSources(data));
  }
}

export default App;
