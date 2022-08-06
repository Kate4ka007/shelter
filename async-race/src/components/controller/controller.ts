import View from '../view/view';
import Model from '../model/model';
import { newPage } from '../../index';

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
    (<HTMLButtonElement>document.querySelector('.btn-car-create')).addEventListener('click', () => {
      const name = (<HTMLInputElement>document.querySelector('.car-name-create')).value;
      const color = (<HTMLInputElement>document.querySelector('.car-color-create')).value;
      this.model.createOneCar(name, color);
      console.log(name, color);
      (document.querySelector('.page-garage') as HTMLDivElement).innerHTML = '';
      const pageNumber = +(localStorage.getItem('page'));
      newPage(pageNumber);
    });
  }
}

export default Controller;
