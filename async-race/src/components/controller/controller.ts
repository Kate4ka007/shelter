import ICar from '../cars/ICar';
import Car from '../cars/car';
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
      const pageNumber = +(localStorage.getItem('page'));
      (document.querySelector('.page-garage') as HTMLDivElement).innerHTML = '';
      fetch(`http://localhost:3000/garage?_page=${pageNumber}&_limit=7`)
        .then((response) => response.json())
        .then((data: ICar[]) => {
          data.forEach((element) => {
            const car = new Car(element.id, element.name, element.color);
          });
        })
        .catch((err) => console.error(err));

      fetch('http://localhost:3000/garage')
        .then((response) => response.json())
        .then((data: ICar[]) => {
          document.querySelector('.page-type').innerHTML = `GARAGE ( ${data.length} )`;
        })
        .catch((err) => console.error(err));

      /*       window.location.reload();
      newPage(pageNumber); */
    });
  }
}

export default Controller;
