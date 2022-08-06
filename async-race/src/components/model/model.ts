import { getCountCars } from '../../index';
import ICar from '../cars/ICar';
import IModel from './IModel';

/* eslint-disable class-methods-use-this */
class Model implements IModel {
  pageNumber = 1;
  // constructor() { }

  getDataonPage(): Promise <ICar[]> {
    const getPage = async (pageNumber: number = 1): Promise<ICar[]> => {
      const response = await fetch(`http://localhost:3000/garage?_page=${pageNumber}&_limit=7`);
      const data = await response.json();
      return data;
    };

    const createPage = async (num:number = 1) => {
      const page = await getPage(num);
      console.log(page);
      console.log(await getCountCars());
      return page;
    };
    const cars = createPage();
    return cars;
  }

  createOneCar(carName: string, carColor: string) {
    fetch('http://localhost:3000/garage', {
      method: 'POST',
      body: JSON.stringify({ name: carName, color: carColor }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  onUpdateCar(id: number, oldName: string, oldColor: string) {
    const nameCar = (<HTMLInputElement>document.querySelector('.car-name-update')).value
      ? (<HTMLInputElement>document.querySelector('.car-name-update')).value
      : oldName;
    const colorCar = (<HTMLInputElement>document.querySelector('.car-color-update')).value !== '#000000'
      ? (<HTMLInputElement>document.querySelector('.car-color-update')).value
      : oldColor;

    fetch(`http://localhost:3000/garage/${id}`, {
      method: 'PUT',
      body: JSON.stringify({ name: nameCar, color: colorCar }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}

export default Model;
