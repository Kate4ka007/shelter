import View from '../view/view';
import Model from '../model/model';

class Controller {
  model: Model;

  view: View;

  constructor(model: Model, view: View) {
    this.model = model;
    this.view = view;
    this.view.generaGarage();
  }
}

export default Controller;
