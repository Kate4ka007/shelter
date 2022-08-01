import { getCountCars } from '../../index';
import ICar from '../cars/ICar';

/* eslint-disable class-methods-use-this */
class Model {
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
}

export default Model;
