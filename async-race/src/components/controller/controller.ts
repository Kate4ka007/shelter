import View from '../view/view';
import Model from '../model/model';

class Controller {
  model: Model;

  view: View;

  pageCount: number;

  constructor(model: Model, view: View) {
    this.model = model;
    this.view = view;
    const page = this.model.getDataonPage();
    page.then((data) => this.view.generaGarage(data));

    this.pageCount = this.model.pageNumber;
  }
}

export default Controller;
