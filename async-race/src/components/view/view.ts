/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
import { brand, models } from '../cars/models';
import { getRandome } from '../../index';
import Car from '../cars/car';
import ICar from '../cars/ICar';
import Generator from '../generator/generator';

class View {
  panel: Generator;

  constructor() {
    this.panel = new Generator();
  }

  generaGarage(): void {
    let garage: Array<ICar>;
    fetch('http://localhost:3000/garage')
      .then((response) => response.json())
      .then((data: ICar[]) => {
        garage = data;
      });

    const dat = async () => {
      garage.forEach((element: ICar) => {
        const car = new Car(element.id, element.name, element.color);
      });
    };

    setTimeout(() => {
      dat();
    }, 1500);

    const input = document.createElement('input');
    input.type = 'color';
    input.addEventListener('change', () => {
      console.log(input.value);
    });
    (document.querySelector('.page-garage') as HTMLDivElement).appendChild(input);

    const btnGenerate = document.querySelector('.btn-car-ceneratecars');
    btnGenerate.addEventListener('click', () => {
      let colors: string;
      for (let i = 0; i < 20; i += 1) {
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
      fetch('http://localhost:3000/garage')
        .then((response) => response.json())
        .then((data: ICar[]) => {
          garage = data;
          garage.forEach((element: ICar) => {
            const car = new Car(element.id, element.name, element.color);
          });
        });
    });
  }
}

export default View;
