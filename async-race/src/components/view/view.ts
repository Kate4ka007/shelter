/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
import { brand, models } from '../cars/models';
import {
  countCars,
  createPage, getRandome, newPage,
} from '../../index';
import Car from '../cars/car';
import ICar from '../cars/ICar';
import Generator from '../generator/generator';

class View {
  panel: Generator;

  count: number;

  constructor() {
    this.count = 1;
    this.panel = new Generator(this.count);
  }

  generaGarage(dataCar: ICar[]): void {
    const garage: Array<ICar> = dataCar;
    garage.forEach((element) => {
      const car = new Car(element.id, element.name, element.color);
    });
    createPage(1);

    const input = document.createElement('input');
    input.type = 'color';
    input.addEventListener('change', () => {
      console.log(input.value);
    });
    (document.querySelector('.page-garage') as HTMLDivElement).appendChild(input);

    const btnGenerate = document.querySelector('.btn-car-ceneratecars');
    btnGenerate.addEventListener('click', () => {
      let colors: string;
      for (let i = 0; i < 100; i += 1) {
        const nameCar = `${brand[getRandome()]} ${models[getRandome()]}`;
        if (input.value === '#000000') {
          colors = Math.floor(Math.random() * 16777215).toString(16);
        } else {
          colors = input.value.slice(1);
        }
        if (colors === '272525') {
          colors = '8b8080';
        }
        fetch('http://localhost:3000/garage', {
          method: 'POST',
          body: JSON.stringify({ name: nameCar, color: `#${colors}` }),
          headers: {
            'Content-Type': 'application/json',
          },
        });
      }

      (document.querySelector('.page-garage') as HTMLDivElement).innerHTML = '';
      newPage();
      const len = countCars();
      len.then((data) => { document.querySelector('.page-type').innerHTML = `GARAGE ( ${data} )`; });
    });
  }
}

export default View;